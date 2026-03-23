import React from 'react';

const About: React.FC = () => {
    const skills = [
        { name: "Frontend", tools: "React, Tailwind, TypeScript" },
        { name: "Backend", tools: "php, Laravel" },
        { name: "Database", tools: "MySQL" },
    ];

    return (
        <div className="bg-white">
            {/* --- Hero / Introduction Section --- */}
            <section className="py-20 lg:py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">About Me</h3>
                                <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                                    Software Engineer Based in <span className="text-blue-600">Katunayake, Sri Lanka.</span>
                                </h1>
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                I’m Niduranga Jayarathna, a dedicated Full-Stack Developer originally from Sri Lanka.
                                I bridge the gap between complex business requirements and high-performance digital solutions.
                                My goal is to build software that isn't just functional, but exceptional.
                            </p>
                            <div className="flex items-center space-x-8 text-slate-900 font-bold">
                                <div>
                                    <span className="block text-3xl">1+</span>
                                    <span className="text-slate-400 text-xs uppercase tracking-widest">Years Exp.</span>
                                </div>
                                <div className="h-10 w-[1px] bg-slate-200"></div>
                                <div>
                                    <span className="block text-3xl">10+</span>
                                    <span className="text-slate-400 text-xs uppercase tracking-widest">Projects</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Image/Graphic Placeholder */}
                        <div className="relative">
                            <div className="aspect-square bg-blue-600 rounded-3xl rotate-3 absolute inset-0 opacity-10"></div>
                            <div className="relative aspect-square bg-white border border-slate-100 rounded-3xl shadow-2xl flex items-center justify-center p-12 overflow-hidden">
                                {/* You can put a high-quality professional photo of yourself here */}
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                                    </div>
                                    <p className="font-mono text-slate-400 text-sm">{"< Code with Passion />"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Skills / Tech Stack Section --- */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">My Tech Stack</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        I use the most modern and reliable technologies to ensure your project is scalable and maintainable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill) => (
                        <div key={skill.name} className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-md transition-all">
                            <h4 className="font-bold text-slate-900 mb-2">{skill.name}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">{skill.tools}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
