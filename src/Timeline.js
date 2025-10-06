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
    <section id="timeline" className="section py-16 relative">
      {/* 🔥 Custom Animations */}
      <style>{`
        @keyframes neon-blink {
          0%, 100% {
            box-shadow: 0 0 10px rgba(168,85,247,0.7),
                        0 0 20px rgba(168,85,247,0.6),
                        0 0 40px rgba(168,85,247,0.5);
          }
          50% {
            box-shadow: 0 0 5px rgba(168,85,247,0.3),
                        0 0 10px rgba(168,85,247,0.2);
          }
        }
        @keyframes pulse-dot {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.6);
            opacity: 0.7;
          }
        }
        .neon-circle {
          animation: neon-blink 1.5s infinite ease-in-out;
        }
        .pulse-dot {
          animation: pulse-dot 1.5s infinite ease-in-out;
        }
        .hover-techy {
          position: relative;
          display: inline-block;
          transition: all 0.3s ease-in-out;
        }
        .hover-techy::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #a855f7, #4f46e5, #f472b6);
          transition: width 0.4s ease;
        }
        .hover-techy:hover::after {
          width: 100%;
        }
        .hover-techy:hover {
          background: linear-gradient(90deg, #a855f7, #4f46e5, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          
          transform: skewX(-3deg) translateY(-2px);
        }
      `}</style>

      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Event <span className="text-purple-400">Timeline</span>
        </h2>
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full"></div>

          {timelineEvents.map((event, index) => (
            <div key={index} className="mb-12 relative flex items-center">
              {/* Circle */}
              <div className="absolute left-1/2 -translate-x-1/2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-purple-500 neon-circle">
                  {/* Inner pulsing dot */}
                  <div className="w-4 h-4 bg-indigo-500 rounded-full pulse-dot"></div>
                </div>
              </div>

              {/* Event Content */}
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "text-right pr-8" : "text-left pl-8 ml-auto"
                }`}
              >
                <p className="text-lg font-bold text-purple-400">{event.date}</p>
                <h3 className="text-xl font-semibold text-white hover-techy">{event.title}</h3>
                <p className="text-neutral-400">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
