import React from "react";
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

export default function Header() {
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

