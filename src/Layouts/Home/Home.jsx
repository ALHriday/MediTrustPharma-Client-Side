// import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import { Helmet } from "react-helmet-async";
import Categories from "../../Components/Categories/Categories";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MediTrust | Home</title>
            </Helmet>
            <Banner/>
            {/* <Link className="btn btn-primary" to='/categories'> Categories</Link> */}
            <Categories></Categories>
        </div>
    );
};

export default Home;