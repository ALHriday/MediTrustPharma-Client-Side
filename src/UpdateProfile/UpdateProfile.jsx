import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { auth } from "../Auth/firebase.init";

const UpdateProfile = () => {

    const { user } = useAuth();

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const photo = form.photoURL.value;
        // console.log(userName, photo);
        Swal.fire({
            title: "Are you sure?",
            // text: "You won't be able to revert this!",
            // icon: "success",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
          }).then((result) => {
              if (result.isConfirmed) {
                // console.log('Profile Updated');
                updateProfile(auth.currentUser, {displayName: userName ,photoURL : photo})
              Swal.fire({
                title: "Account Updated",
                text: "Your file has been deleted.",
                icon: "success"
              });
                  
              form.userName.value = '';
              form.photoURL.value = '';
            }
          });
    }


    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

            <form onSubmit={handleUpdateProfile}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">UserName</label>
                        <input type="text" defaultValue={user?.displayName} name="userName"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200">PhotoURL</label>
                        <input type="text" defaultValue={user?.photoURL} name="photoURL" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
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