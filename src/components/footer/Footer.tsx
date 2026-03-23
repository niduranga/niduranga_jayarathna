import { Link } from "react-router";
import logo from '../../assets/logo.png';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand & About */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <img src={logo} alt="logo" className="h-8 w-auto" />
                            <span className="text-xl font-bold text-slate-900 tracking-tight">
                                Niduranga <span className="text-blue-600">J.</span>
                            </span>
                        </div>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            Building high-performance digital solutions that help businesses scale. Specializing in modern web and mobile development.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-slate-900 font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {["About", "Experience", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase()}`} className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h4 className="text-slate-900 font-bold mb-6">Services</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li className="hover:text-blue-600 cursor-pointer">Web Development</li>
                            <li className="hover:text-blue-600 cursor-pointer">UI/UX Optimization</li>
                            <li className="hover:text-blue-600 cursor-pointer">Cloud Hosting</li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h4 className="text-slate-900 font-bold mb-6">Get in Touch</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3 text-slate-500">
                                <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                <span>Katunayake, Srilanka</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-500">
                                <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                <a href="mailto:nidurangajayarathna.com" className="hover:text-blue-600">nidurangajayarathna@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* --- Sub-Footer --- */}
                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-400 uppercase tracking-widest font-semibold">
                    <p>© 2026 Niduranga Jayarathna. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link to="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
