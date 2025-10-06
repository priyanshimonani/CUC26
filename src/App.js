
import React,{useState} from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import EventDetails from "./EventDetails";
import Timeline from "./Timeline";
import Sponsors from "./Sponsors";
import Footer from "./Footer";
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

// --- Sponsors Component ---


// --- Contact / Footer Component ---



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

