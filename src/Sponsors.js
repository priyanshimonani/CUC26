import React from "react";
export default function Sponsors() {
    const sponsors = [
        'TechCorp', 'Innovate Inc.', 'Dev Solutions', 'CodeBase', 'Future Systems', 'LogicLeap'
    ];
    return (
        <section id="sponsors" className="section bg-[#101010]">
            <div className="container mx-auto text-center">
                <h2 
                    className="text-4xl md:text-5xl font-bold mb-12"
                >
                    Our Awesome <span className="text-purple-400">Sponsors</span>
                </h2>
                 <div 
                    className="flex flex-wrap justify-center items-center gap-8"
                >
                    {sponsors.map((name, index) => (
                        <div key={index} className="p-4">
                            <img
                                src={`https://placehold.co/180x90/1a1a1a/f5f5f5?text=${name.replace(' ', '+')}&font=inter`}
                                alt={`${name} logo`}
                                className="opacity-60 hover:opacity-100 transition-opacity duration-300 rounded-lg"
                                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/180x90/1a1a1a/f5f5f5?text=Sponsor'; }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}