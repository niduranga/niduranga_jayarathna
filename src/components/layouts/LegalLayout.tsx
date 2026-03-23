import React from 'react';
import { Link } from 'react-router';

interface LegalLayoutProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
}

const LegalLayout = ({ title, lastUpdated, children }: LegalLayoutProps) => {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Navigation Back */}
                <Link to="/" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mb-8 transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </Link>

                <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-8 sm:p-12">
                    <header className="mb-10 border-b border-slate-100 pb-8">
                        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">{title}</h1>
                        <p className="text-slate-500 font-medium">Last Updated: {lastUpdated}</p>
                    </header>

                    <div className="prose prose-slate prose-blue max-w-none
                        prose-headings:text-slate-900 prose-headings:font-bold
                        prose-p:text-slate-600 prose-p:leading-relaxed
                        prose-li:text-slate-600 prose-strong:text-slate-900">
                        {children}
                    </div>
                </div>

                <footer className="mt-12 text-center text-slate-400 text-sm">
                    &copy; {new Date().getFullYear()} Niduranga Jayarathna. All rights reserved.
                </footer>
            </div>
        </div>
    );
};

export default LegalLayout;
