import React from "react";
export default function Timeline() {
    const timelineEvents = [
        { date: 'Jan 15, 2026', title: 'Registration Opens', description: 'Mark your calendars! The portal opens for all aspiring participants.' },
        { date: 'Feb 28, 2026', title: 'Registration Closes', description: 'Final call for entries. Don\'t miss your chance to be part of the action.' },
        { date: 'Mar 10, 2026', title: 'Online Preliminaries', description: 'A remote round to shortlist the best ideas and teams for the main event.' },
        { date: 'Mar 28, 2026', title: 'Final Teams Announced', description: 'The finalists who will compete in the grand finale are revealed.' },
        { date: 'Apr 14-16, 2026', title: 'The Main Event', description: 'The 48-hour hackathon begins. Let the coding frenzy commence!' },
        { date: 'Apr 16, 2026', title: 'Winners Announced', description: 'The culmination of the event, where we crown the champions of CodeUnCode 2026.' }
    ];

    return (
        <section id="timeline" className="section">
            <div className="container mx-auto">
                <h2 
                    className="text-4xl md:text-5xl font-bold text-center mb-16"
                >
                    Event <span className="text-purple-400">Timeline</span>
                </h2>
                <div className="relative max-w-2xl mx-auto">
                    <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full"></div>
                    {timelineEvents.map((event, index) => (
                        <div 
                            key={index} 
                            className="mb-8 flex justify-between items-center w-full"
                        >
                            <div className={`w-5/12 ${index % 2 === 0 ? 'order-1' : 'order-3'}`}>
                                <div className={`text-right ${index % 2 !== 0 && 'md:text-left'}`}>
                                    <p className="text-lg font-bold text-purple-400">{event.date}</p>
                                    <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                                    <p className="text-neutral-400">{event.description}</p>
                                </div>
                            </div>
                            <div className="order-2 w-10 h-10 bg-neutral-900 border-2 border-purple-500 rounded-full flex items-center justify-center">
                                <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                            </div>
                            <div className="w-5/12 order-1 md:order-3"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}