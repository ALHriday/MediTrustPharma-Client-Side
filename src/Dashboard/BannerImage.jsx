import axios from "axios";
import useBannerImage from "../Hooks/useBannerImage";
import Swal from "sweetalert2";

const BannerImage = () => {

    const [images, refetch] = useBannerImage();

    const { _id, image1, image2, image3 } = images[0] || {};

    const HandleUpdateImage = (e) => {
        e.preventDefault();
        const form = e.target;

        const image1 = form.img1.value;
        const image2 = form.img2.value;
        const image3 = form.img3.value;

        const imageData = { image1, image2, image3 };

        axios.put(`http://localhost:2100/bannerImage/${_id}`, imageData)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Banner Updated Successful",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            }
            )

    }

    return (
        <section className="max-w-4xl p-6 mx-auto rounded-md shadow-md bg-opacity-20 my-4">
            <h2 className="text-lg font-semibold capitalize mb-2">Current Banner</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="w-full h-full">
                    <img className="rounded-md h-full object-cover" src={image1} alt="" />
                </div>
                <div className="w-full h-full">
                    <img className="rounded-md h-full object-cover" src={image2} alt="" />
                </div>
                <div className="w-full h-full">
                    <img className="rounded-md h-full object-cover" src={image3} alt="" />
                </div>
            </div>

            <form onSubmit={HandleUpdateImage}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="">PhotoURL 1</label>
                        <input type="text" defaultValue={image1} name="img1" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                    </div>

                    <div>
                        <label className="">PhotoURL 2</label>
                        <input type="text" defaultValue={image2} name="img2" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                    </div>
                    <div>
                        <label className="">PhotoURL 3</label>
                        <input type="text" defaultValue={image3} name="img3" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform rounded-md hover:bg-gray-600 focus:outline-none bg-teal-600 focus:bg-gray-600">Save</button>
                </div>
            </form>
        </section>
    );
};

export default BannerImage;