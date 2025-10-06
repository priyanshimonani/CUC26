import React, { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particleCount = 200;
    const particles = [];
    const colors = ["#a855f7", "#4f46e5", "#f472b6", "#ffffff"];

    // Initialize particles with angular movement
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        dirX: Math.random() < 0.5 ? 1 : -1,
        dirY: Math.random() < 0.5 ? 1 : -1,
        speed: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particles and connecting lines like circuits
      particles.forEach((p, index) => {
        // Move particles in angular paths
        p.x += p.speed * p.dirX;
        p.y += p.speed * p.dirY;

        if (p.x < 0 || p.x > width) p.dirX *= -1;
        if (p.y < 0 || p.y > height) p.dirY *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();

        // Draw connecting lines to nearest particles
        for (let j = index + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(168,85,247,${1 - dist / 120})`;
            ctx.lineWidth = 1.2;
            ctx.shadowColor = "#a855f7";
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      {/* Circuit-style Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Hero Content */}
      <div className="z-10 p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black">
          <span className="text-purple-400 hover-techy">CodeUnCode</span> 2026
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-neutral-300 max-w-3xl mx-auto text-purple-500">
          Where innovation meets implementation.
        </p>
        <p className="text-lg md:text-2xl mt-2 text-neutral-300 max-w-3xl mx-auto">
          The ultimate 48-hour hackathon for creators, thinkers, and builders.
        </p>
        <div className="mt-10">
          <a
            href="#register"
            className="relative inline-block px-6 py-3 text-purple-400 font-bold border-2 border-purple-400 rounded hover:bg-purple-400 hover:text-black transition-all duration-300"
          >
            Join the Revolution
          </a>
        </div>
      </div>

      <style>{`
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
      `}</style>
    </section>
  );
}
