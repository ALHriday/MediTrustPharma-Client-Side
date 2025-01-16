import { Helmet } from "react-helmet-async";
import useData from "../../Hooks/useData";


const Categories = () => {
    const [data] = useData();
   
    return (
        <div>
            <Helmet>
                <title>MediTrust | Categories</title>
            </Helmet>

            <h1>Categories</h1>
            {
                data.map(d => <div key={d._id}>
                    <p>Title: {d.Title}</p>
                    <p>Price: {d.price}Taka</p>
                </div>)
            }
        </div>
    );
};

export default Categories;