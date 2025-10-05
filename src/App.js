// Main App Component for CodeUnCode 2026
// This single file contains all the components and logic for the website.

import React,{useState} from "react";

// Main App Component for CodeUnCode 2026
// This single file contains all the components and logic for the website.



// Helper function to add styles to the document head
const addStyle = (styleString) => {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
};

// Add Google Fonts and global styles
addStyle(`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  body {
    font-family: 'Inter', sans-serif;
    background-color: #0a0a0a;
    color: #f5f5f5;
    overflow-x: hidden;
  }
  html {
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #1a1a1a;
  }
  ::-webkit-scrollbar-thumb {
    background: #4a00e0;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #8e2de2;
  }
  .section {
      padding: 6rem 1rem;
      overflow: hidden;
  }
  @media (min-width: 768px) {
    .section {
      padding: 8rem 2rem;
    }
  }
`);

// --- Icon Components (using inline SVG) ---
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);


// --- Header Component ---
function Header() {
    const [isOpen, setIsOpen] = React.useState(false);

    const navLinks = [
        { href: '#details', label: 'Details' },
        { href: '#timeline', label: 'Timeline' },
        { href: '#sponsors', label: 'Sponsors' },
        { href: '#contact', label: 'Contact' },
    ];
    
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-purple-400">CUC_2026</a>
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map(link => (
                         <a key={link.href} href={link.href} className="text-purple-400 hover:text-purple-300 transition-colors duration-300">{link.label}</a>
                    ))}
                    <a 
                        href="#register"
                        className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                        Register Now
                    </a>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>
            </nav>
            {isOpen && (
                 <div 
                    className="md:hidden px-6 pb-4"
                 >
                    {navLinks.map(link => (
                         <a 
                            key={link.href} 
                            href={link.href} 
                            className="block py-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                         >
                            {link.label}
                         </a>
                    ))}
                    <a 
                        href="#register"
                        className="mt-4 block text-purple-400 hover:text-purple-300 transition-colors duration-300 text-center"
                    >
                        Register Now
                    </a>
                </div>
            )}
        </header>
    );
}


// --- Hero Section Component ---
function HeroSection() {
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


// --- Event Details Component ---
function EventDetails() {
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

// --- Timeline Component ---
function Timeline() {
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

// --- Sponsors Component ---
function Sponsors() {
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

// --- Contact / Footer Component ---
function Footer() {
    return (
        <footer id="contact" className="section bg-black border-t border-neutral-900 text-center">
            <div className="container mx-auto">
                <h2 
                    className="text-3xl md:text-4xl font-bold mb-4"
                >
                    Get in <span className="text-purple-400">Touch</span>
                </h2>
                <p 
                    className="text-neutral-400 mb-8"
                >
                    Have questions or want to partner with us? Reach out!
                </p>
                <div>
                    <a href="mailto:organizers@codeuncode.io" className="text-lg text-purple-400 font-semibold">organizers@codeuncode.io</a>
                </div>
                 <div className="mt-10 pt-8 border-t border-neutral-800 text-neutral-500">
                    <p>&copy; 2026 CodeUnCode. All rights reserved. Designed with passion.</p>
                </div>
            </div>
        </footer>
    );
}


// --- Main App Component ---
function App() {

  React.useEffect(() => {
    // Add Tailwind CSS
    const tailwindScript = document.createElement('script');
    tailwindScript.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(tailwindScript);
    
    // Custom CSS for background pattern
     addStyle(`
        .bg-grid-pattern {
            background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 30px 30px;
        }
    `);

  }, []);

  return (
    <div className="bg-black">
      <Header />
      <main>
        <HeroSection />
        <EventDetails />
        <Timeline />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}

// Default export for the app
export default App;

