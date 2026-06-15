import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Slow drifting speed
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 2 + 0.5;
        this.alpha = Math.random() * 0.5 + 0.1;
        
        // Purple / Indigo / Cyberblue shades
        const colors = [
          "rgba(147, 51, 234, ", // Purple
          "rgba(59, 130, 246, ", // Blue
          "rgba(168, 85, 247, ", // Violet
          "rgba(6, 182, 212, "  // Cyan
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap boundaries
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color + this.alpha + ")";
        context.shadowBlur = this.size * 2;
        context.shadowColor = "rgba(147, 51, 234, 0.5)";
        context.fill();
        context.shadowBlur = 0; // reset
      }
    }

    const mouse = { x: -1000, y: -1000, radius: 140 };
    const numParticles = Math.min(Math.floor((width * height) / 12000), 120);
    const particlesArray: Particle[] = [];

    for (let i = 0; i < numParticles; i++) {
      particlesArray.push(new Particle());
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Radial mouse gradient flare
      if (mouse.x > -1000) {
        const outerGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          10,
          mouse.x,
          mouse.y,
          mouse.radius
        );
        outerGlow.addColorStop(0, "rgba(139, 92, 246, 0.08)");
        outerGlow.addColorStop(0.5, "rgba(59, 130, 246, 0.04)");
        outerGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fillStyle = outerGlow;
        ctx.fill();
      }

      // Draw and update particles
      particlesArray.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      // Connect particles and mouse
      for (let i = 0; i < particlesArray.length; i++) {
        const p1 = particlesArray[i];

        // Line to mouse if close
        if (mouse.x > -1000) {
          const dxMouse = p1.x - mouse.x;
          const dyMouse = p1.y - mouse.y;
          const distMouse = Math.hypot(dxMouse, dyMouse);
          if (distMouse < mouse.radius) {
            const progress = 1 - distMouse / mouse.radius;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${progress * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Standard connection lines between particles
        for (let j = i + 1; j < particlesArray.length; j++) {
          const p2 = particlesArray[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      id="particles-canvas"
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 bg-transparent"
    />
  );
}
