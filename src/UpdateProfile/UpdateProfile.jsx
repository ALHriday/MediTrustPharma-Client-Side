import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const UpdateProfile = () => {
    const axiosPublic = useAxiosPublic();
    const { currentUser } = useAuth();

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const photo = form.photoURL.value;

        const userInfo = { userName, photo };

        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.put(`/userInfo/${currentUser._id}`, userInfo)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            Swal.fire({
                                title: "Account Updated",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            form.userName.value = '';
                            form.photoURL.value = '';
                        }
                    }
                    )


            }
        });
    }


    return (
        <section className="max-w-4xl p-6 mx-auto my-2 rounded-md bg-slate-200 shadow-md">
            <h2 className="text-lg font-bold text-slate-700 capitalize">Account settings</h2>

            <form onSubmit={handleUpdateProfile}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-slate-700 font-bold">UserName</label>
                        <input type="text" defaultValue={currentUser?.userName} name="userName" className="block w-full px-4 py-2 mt-2 text-black bg-slate-50 border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                    </div>

                    <div>
                        <label className="text-slate-700 font-bold">PhotoURL</label>
                        <input type="text" defaultValue={currentUser?.photoURL} name="photoURL" className="block w-full px-4 py-2 mt-2 text-black bg-slate-50 border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                </div>
            </form>
        </section>
    );
};

export default UpdateProfile;