import { useForm } from "react-hook-form"
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useCategoryData from "../Hooks/useCategoryData";


const AddProductCategory = () => {
    const axiosPublic = useAxiosPublic();
    const [categoryData, refetch] = useCategoryData();

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = (data) => {
        const { categoryName, categoryImage } = data;

        const categoryInfo = { categoryName, categoryImage };

        axiosPublic.post('/productCategory', categoryInfo)
            .then(res => {
                if (res.data.insertedId) {

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Added New Product Category",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    reset();
                    refetch();
                }
            }
            )
    }

    const handleDeleteCategory = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/productCategory/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <div className="p-4">
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold my-4 border-b-2 py-2">All Category</h1>

                <div>
                    <table className="table text-black">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Category Photo</th>
                                <th>Category Name</th>
                                <th className="text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="overflow-x-auto">
                            {/* row 1 */}

                            {categoryData && categoryData.map((c, i) => <tr key={i}>

                                <td>
                                    <div className="avatar">
                                        <div className="rounded-md h-20 w-20 md:w-40">
                                            <img
                                                src={c.categoryImage}
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td>{c.categoryName}</td>

                                <td>
                                    <div onClick={() => handleDeleteCategory(c._id)} className="flex gap-2 justify-center items-center">
                                        <button className={`btn btn-sm bg-red-600 hover:bg-red-500 text-slate-100`}>Delete</button>
                                    </div>
                                </td>

                            </tr>)}


                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h1 className="text-2xl font-bold my-4 border-b-2 py-2">Add New Category</h1>
                </div>
                <div>
                    <label className="">Category Name</label>
                    <input {...register("categoryName")} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                </div>

                <div className="mt-2">
                    <label className="">Category Image</label>
                    <input {...register("categoryImage")} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                </div>
                <div className="flex justify-end mt-2">
                    <button className="btn btn-accent">Add Category</button>
                </div>
            </form>
        </div>
    );
};

export default AddProductCategory;