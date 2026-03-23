import React from 'react';
import { Link } from "react-router";
import logo from '../assets/logo.png';

const Home: React.FC = () => {
    return (
        <div className="bg-slate-50 w-full">

            {/* --- SECTION 1: HERO --- */}
            <section className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden">

                {/* Background "Glow" Decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-200/30 blur-[120px] rounded-full animate-pulse" />
                    <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-indigo-100/40 blur-[100px] rounded-full" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* LEFT SIDE: Sales Content */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            {/* Live Badge */}
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                <span className="text-blue-600 font-bold tracking-widest uppercase text-[10px] md:text-xs">
                                    Available for new projects
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                                Bringing Your <br/>
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500">
                                    Digital Vision
                                </span> to Life
                            </h1>

                            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                I specialize in building high-performance web application and cloud hosting
                                that help businesses grow and scale in the modern era.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/services" className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25 active:scale-95 flex items-center justify-center gap-2">
                                    Our Services
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                    </svg>
                                </Link>
                                <Link to="/contact" className="px-10 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center">
                                    Contact Me
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT SIDE: Visual Section */}
                        <div className="relative flex justify-center order-1 lg:order-2">
                            {/* Decorative Animated Rings */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-64 h-64 md:w-96 md:h-96 border border-blue-100 rounded-full animate-[ping_5s_linear_infinite] opacity-20" />
                                <div className="absolute w-48 h-48 md:w-80 md:h-80 border border-blue-50 rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
                            </div>

                            <div className="relative p-6 md:p-12 bg-white rounded-[2.5rem] shadow-2xl shadow-blue-200/50 hover:rotate-3 transition-transform duration-500">
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="h-32 md:h-56 w-auto object-contain drop-shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: SERVICES --- */}
            <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h3 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3">What I Do</h3>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                        Tailored <span className="text-blue-600">Solutions</span> for Your Business
                    </h2>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Service 1: Web Development */}
                    <div className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3 font-display">Web Development</h4>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Building responsive, high-performance websites using React, Next.js, and modern CSS frameworks.
                        </p>
                    </div>

                    {/* Service 2: UI/UX Design */}
                    <div className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.172-1.172a4 4 0 115.656 5.656L17 13"/>
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3 font-display">UI/UX Design</h4>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Designing intuitive and beautiful user interfaces that prioritize speed, accessibility, and user delight.
                        </p>
                    </div>

                    {/* Service 3: Cloud Hosting */}
                    <div className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        {/* Icon Container with Sky Blue Theme */}
                        <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                />
                            </svg>
                        </div>

                        <h4 className="text-xl font-bold text-slate-900 mb-3 font-display">Cloud Hosting</h4>

                        <p className="text-slate-600 leading-relaxed mb-6">
                            Deploying secure, scalable server environments with 99.9% uptime and automated backup solutions.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
