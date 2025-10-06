import React, { useEffect, useRef } from "react";

export default function EventDetails() {
  const cardsRef = useRef([]);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-slide");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="details" className="section relative bg-[#101010] overflow-hidden">
      {/* Background grid & particles */}
      <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
      <canvas id="particles" className="absolute inset-0 z-0 pointer-events-none"></canvas>

      <div className="container mx-auto text-center relative z-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What is <span className="text-purple-400 hover-techy">CodeUnCode</span>?
          </h2>
          <p className="max-w-4xl mx-auto text-neutral-400 text-lg">
            CodeUnCode is more than just a hackathon; it's a launchpad for the next generation of technology. We bring together the brightest minds to solve real-world problems, build groundbreaking projects, and push the boundaries of what's possible. Over one intense weekend, you'll collaborate, innovate, and create.
          </p>
        </div>

        <div className="flex gap-6 mt-16 overflow-hidden justify-center transition-all duration-500">
          {/* Cards */}
          {[
            {
              title: "Collaborate & Build",
              text: "Team up with talented developers, designers, and visionaries. Transform your ideas into tangible prototypes in just 48 hours.",
            },
            {
              title: "Learn from the Best",
              text: "Attend workshops and mentorship sessions hosted by industry leaders from top tech companies. Gain insights and level up your skills.",
            },
            {
              title: "Win Big",
              text: "Compete for an exciting prize pool, gain recognition for your work, and get a chance to network with potential investors and employers.",
            },
          ].map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 flex-1 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:flex-[2] hover:shadow-xl hover:shadow-purple-500/50 hover:-translate-y-2 hover:rotate-1"
            >
              <h3 className="text-2xl font-bold mb-3 text-purple-400 hover-techy">
                {card.title}
              </h3>
              <p className="text-neutral-400">{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind animation & custom CSS */}
      <style>{`
        /* Scroll fade + slide */
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-slide {
          animation: fadeSlide 0.8s ease forwards;
        }

        /* Hover techy gradient */
        .hover-techy {
          position: relative;
          display: inline-block;
          background: linear-gradient(90deg, #a855f7, #4f46e5, #f472b6, #a855f7);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: all 0.3s ease-in-out;
        }
        .hover-techy:hover {
          transform: skewX(-3deg) translateY(-2px);
          background-position: 100% center;
        }

        /* Background grid pattern */
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>

      {/* Simple JS particles */}
      <script>{`
        const canvas = document.getElementById('particles');
        if(canvas){
          const ctx = canvas.getContext('2d');
          let width = canvas.width = window.innerWidth;
          let height = canvas.height = window.innerHeight;
          const particles = Array.from({length: 60}, () => ({
            x: Math.random()*width,
            y: Math.random()*height,
            r: Math.random()*2+1,
            dx: (Math.random()-0.5)*0.5,
            dy: (Math.random()-0.5)*0.5
          }));
          function animate(){
            ctx.clearRect(0,0,width,height);
            particles.forEach(p=>{
              ctx.beginPath();
              ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
              ctx.fillStyle = 'rgba(168,85,247,0.5)';
              ctx.fill();
              p.x += p.dx;
              p.y += p.dy;
              if(p.x>width) p.x=0;
              if(p.x<0) p.x=width;
              if(p.y>height) p.y=0;
              if(p.y<0) p.y=height;
            });
            requestAnimationFrame(animate);
          }
          animate();
          window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
          });
        }
      `}</script>
    </section>
  );
}
