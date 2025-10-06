import React, { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ["#a855f7", "#4f46e5", "#f472b6", "#ffffff"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-grid-pattern relative overflow-hidden">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>

      {/* Original Hero Content */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0"></div>
      <div className="z-10 p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black">
          <span className="text-purple-400 hover-techy">CodeUnCode</span> 2026
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-neutral-300 max-w-3xl mx-auto">
          Where innovation meets implementation. The ultimate 48-hour hackathon for creators, thinkers, and builders.
        </p>
        <div className="mt-10">
          <a href="#register" className="text-purple-400 font-bold text-lg">
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
          transform: skewX(-3deg) translateY(-2px);
          background-position: 100% center;
        }
      `}</style>
    </section>
  );
}
