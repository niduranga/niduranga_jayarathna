import React from 'react';

const Experience: React.FC = () => {
    const experiences = [
        {
            company: "Stephen Innovation",
            role: "FullStack Software Engineer",
            period: "2026 Jan - Present",
            description: "Developing high-performance web applications and internal management systems. Focused on building scalable architecture and optimizing user experiences.",
            skills: ["React", "vue", "Laravel", "Tailwind CSS", "API Integration", "Mysql"],
            isCurrent: true
        },
    ];

    const certifications = [
        {
            institute: "SL Code Guru",
            course: "Full-Stack Development (React & Laravel)",
            period: "2024 - Present",
            description: "Advanced training in modern web ecosystems, focusing on building robust enterprise-level applications with a clean-code approach.",
            skills: ["React JS", "Laravel Framework", "Database Design"]
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="bg-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">My Journey</h3>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
                        Experience & <span className="text-blue-600">Growth</span>
                    </h1>
                    <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
                        A timeline of my professional career, technical training, and the projects that shaped my expertise.
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- Professional Work --- */}
                <div className="mb-20">
                    <div className="flex items-center space-x-4 mb-12">
                        <div className="h-0.5 w-12 bg-blue-600"></div>
                        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-wider">Work Experience</h2>
                    </div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative pl-8 border-l-2 border-slate-100 group">
                                {/* Timeline Dot */}
                                <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-white border-2 border-blue-600 group-hover:bg-blue-600 transition-colors"></div>

                                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                                            <p className="text-blue-600 font-semibold">{exp.company}</p>
                                        </div>
                                        <span className="px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold self-start md:self-center">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-slate-600 mb-6 leading-relaxed italic">"{exp.description}"</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase tracking-wider">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- Technical Education --- */}
                <div>
                    <div className="flex items-center space-x-4 mb-12">
                        <div className="h-0.5 w-12 bg-indigo-600"></div>
                        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-wider">Technical Training</h2>
                    </div>

                    <div className="space-y-12">
                        {certifications.map((cert, index) => (
                            <div key={index} className="relative pl-8 border-l-2 border-slate-100 group">
                                <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-white border-2 border-indigo-600 group-hover:bg-indigo-600 transition-colors"></div>

                                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">{cert.course}</h3>
                                            <p className="text-indigo-600 font-semibold">{cert.institute}</p>
                                        </div>
                                        <span className="text-slate-400 font-bold text-sm">{cert.period}</span>
                                    </div>
                                    <p className="text-slate-600 mb-6 text-sm">{cert.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-md text-xs font-bold uppercase tracking-wider">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Experience;
