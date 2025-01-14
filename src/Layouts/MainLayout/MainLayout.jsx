import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen p-4">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;