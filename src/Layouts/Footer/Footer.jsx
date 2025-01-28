import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex flex-col gap-6 md:flex-row justify-evenly bg-neutral text-neutral-content p-10 mt-6 md:mt-12">
            <nav className="flex flex-col gap-1">
                <div className="w-16 h-16">
                    <img src="https://img.icons8.com/?size=100&id=108787&format=png&color=000000" alt="" />
                </div>
                <h1 className="font-bold">MediTrustPharma</h1>
            </nav>
            <nav className="flex flex-col gap-1">
                <h6 className="footer-title">Services</h6>
                <Link to='/shop' className="link link-hover">Shop</Link>
                <Link to='/joinUs' className="link link-hover">Join Us</Link>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className="flex flex-col gap-1">
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;