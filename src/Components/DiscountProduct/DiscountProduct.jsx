import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-cards';

const DiscountProduct = () => {

    return (
        <div className="my-4">
            <div className="py-6">
                <h1 className="text-2xl font-bold text-center py-2">Discount Product</h1>
                <p className="text-4xl font-bold text-center text-teal-500">Up to 30% OFF</p>
            </div>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="flex w-[260px] h-[300px]"
            >
                <SwiperSlide>
                    <img className="w-full h-full object-cover rounded-md" src="https://img.freepik.com/free-vector/realistic-vitamin-complex-package_23-2148490928.jpg?ga=GA1.1.1576804030.1736064088&semt=ais_hybrid" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover rounded-md" src="https://img.freepik.com/free-photo/colorful-pills-with-tiny-metallic-container_176474-1680.jpg?ga=GA1.1.1576804030.1736064088&semt=ais_hybrid" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover rounded-md" src="https://img.freepik.com/free-photo/high-angle-pill-containers-with-foils_23-2148533502.jpg?ga=GA1.1.1576804030.1736064088&semt=ais_hybrid" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover rounded-md" src="https://img.freepik.com/free-photo/medicine-bottles-tablets-wooden-desk_1387-420.jpg?ga=GA1.1.1576804030.1736064088&semt=ais_hybrid" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover rounded-md" src="https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg?ga=GA1.1.1576804030.1736064088&semt=ais_hybrid" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default DiscountProduct;