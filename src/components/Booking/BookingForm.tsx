import React from 'react';

const BookingForm: React.FC = () => {
    return (
        <div className="max-w-xl mx-auto p-1">
            {/* The Outer Glowing Card */}
            <form className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl overflow-hidden group">

                {/* Subtle background glow effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/40 transition-all duration-700" />

                <div className="relative z-10 mb-8">
                    <h1 className="flex justify-center text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                        Book <span className="text-blue-400">Discovery</span> Call!
                    </h1>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        Ready to skyrocket your business growth? Let's talk! Our Social Media Marketing experts are here to build game-changing strategies for you.
                    </p>
                </div>

                <div className="space-y-4 relative z-10">
                    {/* Email Field */}
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-xl text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-white/10"
                        />
                    </div>

                    {/* Phone Field */}
                    <div className="relative">
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-xl text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-white/10"
                        />
                    </div>

                    {/* Submit Button */}
                    <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2 group">
                        Get Started
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
