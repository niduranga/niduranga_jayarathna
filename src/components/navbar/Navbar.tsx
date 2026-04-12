import logo from '../../assets/logo.png'
import NavLink from "./NavLink.tsx";
import {useState} from "react";
import {Link} from "react-router";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const routes = [
        { path: "/", name: "Home" },
        { path: "/about", name: "About" },
        { path: "/projects", name: "Projects" },
        { path: "/experience", name: "Experience" },
        { path: "/contact", name: "Contact" },
    ]
    return (
        <div className="sticky top-0 z-50 bg-white border-b border-blue-200">
            <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20'>
                {/* logo section */}
                <div className="flex shrink-0 items-center">
                    <Link
                        to="/"
                        className="group flex items-center gap-3 transition-opacity hover:opacity-90"
                    >
                        {/* Logo Container */}
                        <div className="relative overflow-hidden rounded-xl">
                            <img
                                src={logo}
                                alt="Niduranga Jayarathna Logo"
                                className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Text Container */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                            <h1 className="text-xl font-bold tracking-tighter text-slate-900 sm:text-2xl transition-colors group-hover:text-blue-600">
                                Niduranga
                                <span className="text-blue-600 sm:ml-1.5 group-hover:text-slate-900 transition-colors">Jayarathna</span>
                            </h1>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-8">
                    {routes.map(route => (
                        <NavLink key={route.name} to={route.path}>
                            {route.name}
                        </NavLink>
                    ))}
                </div>

                {/* Call to Action Section */}
                <div className="flex items-center gap-6">
                    {/* Phone Number - Added a subtle hover and centered alignment */}
                    <a
                        href="tel:+94752828091"
                        className="hidden lg:flex items-center gap-2 text-slate-600 hover:text-blue-600 font-semibold transition-colors cursor-pointer"
                    >
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        +94 75 282 8091
                    </a>

                    <a
                        href="https://wa.me/94752828091?text=I'm%20interested%20in%20a%20proposal%20for%20my%20project!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden lg:flex group relative items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg shadow-emerald-500/25 active:scale-95 overflow-hidden whitespace-nowrap"
                    >
                        <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.628 1.435h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        <span className="relative z-10">Get Proposal</span>
                    </a>

                    {/* Mobile Toggle - Improved design */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2.5 bg-slate-50 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                        aria-label="Toggle Menu"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Moble Navigation Menu */}
            <div className={`md:hidden ${isOpen ?"block" :"hidden"} border-t border-gray-100 bg-white`}>
                <div className="px-4 pt-2 pb-6 space-y-1">
                    {routes.map(route => (
                        <Link to={route.path} children={route.name} onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md"/>
                    ))}

                    <div className="pt-4 border-t border-gray-100">
                        <a href="tel:+94752828091" className="flex px-3 py-2 text-gray-500 justify-center font-semibold text-sm">+94 75 282 8091</a>
                        <a
                            href="https://wa.me/94752828091?text=I'm%20interested%20in%20a%20proposal%20for%20my%20project!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg shadow-emerald-500/25 active:scale-95 overflow-hidden"
                        >
                            <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.628 1.435h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span className="relative z-10">Get Proposal</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
