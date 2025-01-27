// import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import { Helmet } from "react-helmet-async";
import Categories from "../../Components/Categories/Categories";
import { Link } from "react-router-dom";
import DiscountProduct from "../../Components/DiscountProduct/DiscountProduct";
import Accordion from "../../Components/Accordion/Accordion";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MediTrust | Home</title>
            </Helmet>
            <Banner/>
            <div className="py-6 px-4">
                <h1 className="text-center text-2xl font-bold mb-2">Your Trusted Partner in Health and Wellness.</h1>
                <p className="text-slate-500 text-center">MediTrustPharma is a trusted online platform for authentic medicines and healthcare products. With a wide range of offerings, easy prescription uploads, and fast doorstep delivery, we simplify your healthcare journey while ensuring quality and affordability.</p>
            </div>
            <Categories/>
            <DiscountProduct/>
            <Accordion/>
        </div>
    );
};

export default Home;