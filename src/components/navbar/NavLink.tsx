import {Link} from "react-router";

interface INavLinkProp {
    to:string,
    children:string
}

const NavLink = ({to, children}: INavLinkProp) => {
    return (
        <Link to={to} className='text-gray-700 hover:text-blue-700 font-medium transition-colors'>{children}</Link>
    );
};

export default NavLink;
