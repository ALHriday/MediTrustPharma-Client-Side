import { Helmet } from "react-helmet-async";
import useData from "../../Hooks/useData";


const Categories = () => {
    const [data, loading] = useData();
    
    console.log(data, loading);
   
    return (
        <div>
            <Helmet>
                <title>MediTrust || Categories</title>
            </Helmet>

            <h1>Categories</h1>
        </div>
    );
};

export default Categories;