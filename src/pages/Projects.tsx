import React from 'react';

interface Project {
    name: string;
    description: string;
    repo?: string;
    link?: string;
    technologies: string[];
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            name: "eventspick.com",
            description: "Developed as a Full Stack Developer at Stephan-Innovation. Contributed to building scalable features and handling both frontend and backend logic.",
            repo: "",
            link: "https://eventspick.com",
            technologies: ["Vue.js", "Laravel", "Mysql"]
        },
        {
            name: "astransg.com",
            description: "A comprehensive POS system developed during my tenure at Stephan-Innovation, focusing on inventory management and seamless transactions.",
            repo: "",
            link: "https://astransg.com/",
            technologies: ["React.js", "Mysql", "Laravel"]
        },
        {
            name: "Lawnelsonk",
            description: "Developed as a Full Stack Developer at Stephan-Innovation.",
            repo: "",
            link: "https://admin.nkglobaledge.com/",
            technologies: ["HTML"]
        },
        {
            name: "Portfolio",
            description: "Developed as a Full Stack Developer.",
            repo: "https://github.com/niduranga/niduranga_jayarathna.git",
            link: "https://niduranga.github.io/niduranga_jayarathna/",
            technologies: ["React.js"]
        },
    ];

    const contributions = [
        {
            name: 'Fix: Allow runtime property overrides (onQueue) to take precedence over class attributes in laravel',
            type: 'Bug-fix',
            id: '#59468',
            link: 'https://github.com/laravel/framework/pull/59468'
        },
        {
            name: '[13.x] Added inheritance support for Controller Middleware attributes in laravel.',
            type: 'feature',
            id: '#59597',
            link: 'https://github.com/laravel/framework/pull/59597'
        }
    ]

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between p-8"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                    {project.name}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {project.link ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex italic text-sm items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors mb-1"
                                >
                                    {project.name}
                                </a>
                            ) : (
                                ''
                            )}

                            {project.repo ? (
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                                >
                                    View Repository
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            ) : (
                                <span className="text-gray-400 text-sm italic">Private Repository</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 mt-20">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
                    OpenSource Contributions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {contributions.map((contribution, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between p-8"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                    {contribution.name}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {contribution.type}
                                </p>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {contribution.id}
                                </p>
                            </div>

                            {contribution.link ? (
                                <a
                                    href={contribution.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex italic text-sm items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors mb-1"
                                >
                                    link
                                </a>
                            ) : (
                                ''
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;