import {createBrowserRouter} from "react-router";
import Home from "../pages/Home.tsx";
import GuestLayout from "../components/layouts/GuestLayout.tsx";
import About from "../pages/About.tsx";
import Experience from "../pages/Experience.tsx";
import Contact from "../pages/Contact.tsx";
import PrivacyPolicy from "../pages/policy/PrivacyPolicy.tsx";
import TermsOfService from "../pages/policy/TermsOfService.tsx";
import Projects from "../pages/Projects.tsx";

const router = createBrowserRouter([
    {
        path:'/',
        element: <GuestLayout/>,
        children: [
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/projects",
                element:<Projects/>
            },
            {
                path:"/experience",
                element:<Experience/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
        ]
    },
    {
        path:"/privacy",
        element:<PrivacyPolicy/>
    },
    {
        path:"/terms",
        element:<TermsOfService/>
    }
], {
    basename: "/niduranga_jayarathna"
})

export default router
