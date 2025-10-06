import React from "react";
export default function EventDetails() {
    return (
        <section id="details" className="section bg-[#101010]">
            <div className="container mx-auto text-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">What is <span className="text-purple-400">CodeUnCode</span>?</h2>
                    <p className="max-w-4xl mx-auto text-neutral-400 text-lg">
                        CodeUnCode is more than just a hackathon; it's a launchpad for the next generation of technology. We bring together the brightest minds to solve real-world problems, build groundbreaking projects, and push the boundaries of what's possible. Over one intense weekend, you'll collaborate, innovate, and create.
                    </p>
                </div>

                <div 
                    className="grid md:grid-cols-3 gap-8 mt-16"
                >
                    {/* Highlight Card 1 */}
                    <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                        <h3 className="text-2xl font-bold mb-3 text-purple-400">Collaborate & Build</h3>
                        <p className="text-neutral-400">Team up with talented developers, designers, and visionaries. Transform your ideas into tangible prototypes in just 48 hours.</p>
                    </div>
                    {/* Highlight Card 2 */}
                    <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                        <h3 className="text-2xl font-bold mb-3 text-purple-400">Learn from the Best</h3>
                        <p className="text-neutral-400">Attend workshops and mentorship sessions hosted by industry leaders from top tech companies. Gain insights and level up your skills.</p>
                    </div>
                    {/* Highlight Card 3 */}
                    <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                        <h3 className="text-2xl font-bold mb-3 text-purple-400">Win Big</h3>
                        <p className="text-neutral-400">Compete for an exciting prize pool, gain recognition for your work, and get a chance to network with potential investors and employers.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}