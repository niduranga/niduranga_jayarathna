import { NavLink as BaseNavLink } from "react-router";

interface INavLinkProp {
    to: string;
    children: string;
}

const NavLink = ({ to, children }: INavLinkProp) => {
    return (
        <BaseNavLink
            to={to}
            className={({ isActive }) =>
                `${isActive
                    ? "text-blue-600 font-bold border-b-2 border-blue-600"
                    : "text-slate-600"
                } hover:text-blue-600 transition-all py-2`
            }
        >
            {children}
        </BaseNavLink>
    );
};

export default NavLink;