import React from "react";
export default function HeroSection() {
    return (
        <section className="min-h-screen flex items-center justify-center text-center bg-grid-pattern relative">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
            <div 
                className="z-10 p-4"
            >
                <h1 
                    className="text-5xl md:text-7xl lg:text-8xl font-black"
                >
                    <span className="text-purple-400">CodeUnCode</span> 2026
                </h1>
                <p 
                    className="text-lg md:text-2xl mt-4 text-neutral-300 max-w-3xl mx-auto"
                >
                    Where innovation meets implementation. The ultimate 48-hour hackathon for creators, thinkers, and builders.
                </p>
                <div className="mt-10">
                    <a 
                        href="#register"
                        className="text-purple-400 font-bold text-lg"
                    >
                        Join the Revolution
                    </a>
                </div>
            </div>
        </section>
    );
}
