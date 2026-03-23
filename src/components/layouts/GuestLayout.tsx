import Navbar from "../navbar/Navbar.tsx";
import {Outlet} from "react-router";
import Footer from "../footer/Footer.tsx";

const GuestLayout = () => {
    return (
        <div>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default GuestLayout;
