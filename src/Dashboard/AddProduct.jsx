import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddProduct = () => {
    const { currentUser } = useAuth();
    const axiosPublic = useAxiosPublic();
    
    const sellerName = currentUser?.userName;
    const sellerEmail = currentUser?.userEmail;
    
    const HandleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        

        const title = form.title.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const image = form.image.value;
        const description = form.description.value;

        const productInfo = {
            title,
            price,
            quantity,
            category,
            image,
            description,
            sellerName,
            sellerEmail
        };

        axiosPublic.post(`/products`, productInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product Added Successfully",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            }
            )
    }


    return (
        <section className="max-w-4xl p-6 mx-auto rounded-md shadow-md bg-opacity-20 my-4">
            <h2 className="text-lg font-semibold capitalize mb-2">Add New Product</h2>


            <form onSubmit={(e) => HandleUpdateProduct(e)}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="">Title</label>
                        <input type="text" name="title" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                    </div>

                    <div>
                        <label className="">Price</label>
                        <input type="number" name="price" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="">Quantity</label>
                        <input type="number" name="quantity" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="">PhotoURL</label>
                        <input type="text" name="image" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="">Category</label>
                        <input type="text" name="category" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="">Description</label>
                        <input type="text" name="description" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="">Seller Name</label>
                        <input type="text" readOnly defaultValue={sellerName} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="">Seller Email</label>
                        <input type="text" readOnly defaultValue={sellerEmail} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform rounded-md hover:bg-gray-600 focus:outline-none bg-teal-600 focus:bg-gray-600">Add Product</button>
                </div>
            </form>
        </section>
    );
};

export default AddProduct;