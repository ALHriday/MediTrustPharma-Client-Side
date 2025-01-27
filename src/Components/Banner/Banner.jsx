import useBannerImage from "../../Hooks/useBannerImage";

const Banner = () => {
    const [images] = useBannerImage();
    
    return (
        <div>
            <div className="carousel w-full max-h-[400px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={images[0]?.image1}
                        className="w-full object-cover rounded-md" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={images[0]?.image2}
                        className="w-full object-cover rounded-md" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={images[0]?.image3}
                        className="w-full object-cover rounded-md" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;