import React from "react";
export default function Footer() {
    return (
        <footer id="contact" className="section bg-black border-t border-neutral-900 text-center">
            <div className="container mx-auto">
                <h2 
                    className="text-3xl md:text-4xl font-bold mb-4"
                >
                    Get in <span className="text-purple-400 hover-techy">Touch</span>
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