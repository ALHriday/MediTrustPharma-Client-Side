// import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import { Helmet } from "react-helmet-async";
import Categories from "../../Components/Categories/Categories";
import DiscountProduct from "../../Components/DiscountProduct/DiscountProduct";
import Accordion from "../../Components/Accordion/Accordion";
import { motion } from "motion/react"

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MediTrust | Home</title>
            </Helmet>
            <Banner />
            <div className="py-6 px-4">
                <motion.div
                    initial={{ x: 0, y: -80 }}
                    whileInView={{ x: 0, y: 0 }}
                    transition={{ duration: 0.9 }}
                >
                    <h1 className="text-center text-2xl font-bold mb-2">Your Trusted Partner in Health and Wellness.</h1>
                </motion.div>

                <motion.div
                    initial={{ x: 0, y: 100 }}
                    whileInView={{ x: 0, y: 0 }}
                    transition={{ duration: 0.9 }}
                >
                    <p className="text-slate-500 text-center">MediTrustPharma is a trusted online platform for authentic medicines and healthcare products. With a wide range of offerings, easy prescription uploads, and fast doorstep delivery, we simplify your healthcare journey while ensuring quality and affordability.</p>
                </motion.div>
            </div>
            <Categories />
            <DiscountProduct />
            <Accordion />
        </div>
    );
};

export default Home;