import { useContext, useState } from "react";
import useBannerImage from "../../Hooks/useBannerImage";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Banner = () => {
    const { isLoading } = useContext(AuthContext);
    const [slide, setSlide] = useState(0);
    const [images] = useBannerImage();
    const values = Object.values(images[0] || {});
    const image = values.slice(1, 4);


    const handlePrev = () => { slide === 0 ? setSlide(2) : setSlide(slide - 1) }
    const handleNext = () => { slide === 2 ? setSlide(0) : setSlide(slide + 1) }


    return (
        <div className="w-full h-[220px] sm:h-[260px] md:h-[380px] md:mt-2">
            <div className="relative w-full">
                <div className={`border h-[200px] sm:h-[240px] md:h-[360px] rounded-md overflow-hidden ${isLoading ? "blur-sm pointer-events-none" : "blur-0"}`}>
                    <img
                        className="w-full h-full object-cover rounded-md"
                        src={image[slide]}
                        // eslint-disable-next-line react/no-unknown-property
                        fetchpriority="high"
                    />
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <button className="btn btn-circle" onClick={handlePrev}>❮</button>
                    <button className="btn btn-circle" onClick={handleNext}>❯</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;