import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Terminal, Shield, Library, Cpu, Database, Flame, Brain, Code2, Coffee, Github
} from "lucide-react";

interface SkillNode {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  desc: string;
  glowColor: string;
}

export default function Orbit() {
  const [hoveredSkill, setHoveredSkill] = useState<SkillNode | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);

  // Map of orbiting skills with corresponding icons, gradients, and descriptors
  const skills: SkillNode[] = [
    { 
      name: "Python", 
      icon: Code2, 
      color: "from-blue-500 to-yellow-500", 
      glowColor: "rgba(59, 130, 246, 0.4)",
      desc: "Primary language used for AI integration, intelligent agents (Jarvis), and custom scripting."
    },
    { 
      name: "Java", 
      icon: Coffee, 
      color: "from-orange-500 to-red-600", 
      glowColor: "rgba(249, 115, 22, 0.4)",
      desc: "Robust object-oriented programming for core software engineering paradigms and database projects."
    },
    { 
      name: "JavaScript", 
      icon: Terminal, 
      color: "from-yellow-400 to-amber-500", 
      glowColor: "rgba(234, 179, 8, 0.4)",
      desc: "Dynamic scripting powering asynchronous rendering, interactive DOM logic, and web integrations." 
    },
    { 
      name: "React", 
      icon: Library, 
      color: "from-cyan-400 to-blue-600", 
      glowColor: "rgba(34, 211, 238, 0.4)",
      desc: "Building highly interactive responsive frontends, state management engines, and modular portfolios."
    },
    { 
      name: "Flask", 
      icon: Flame, 
      color: "from-emerald-400 to-teal-600", 
      glowColor: "rgba(52, 211, 153, 0.4)",
      desc: "Lightweight and modular backend microframework hosting REST APIs, DB models, and chatbot proxies."
    },
    { 
      name: "AI", 
      icon: Brain, 
      color: "from-purple-500 to-pink-500", 
      glowColor: "rgba(168, 85, 247, 0.4)",
      desc: "Fusing Generative AI, smart prompt architectures, and local models to automate user workflows."
    },
    { 
      name: "Linux", 
      icon: Cpu, 
      color: "from-gray-300 to-slate-500", 
      glowColor: "rgba(203, 213, 225, 0.4)",
      desc: "Hacker-style terminal administration, bash automation, security hardening, and secure environment setups."
    },
    { 
      name: "Cybersecurity", 
      icon: Shield, 
      color: "from-red-500 to-rose-600", 
      glowColor: "rgba(239, 68, 68, 0.4)",
      desc: "Ethical hacking, active capture the flag (CTF) challenges, system audits, and cryptographic models."
    },
    { 
      name: "GitHub", 
      icon: Github, 
      color: "from-indigo-600 to-slate-900", 
      glowColor: "rgba(79, 70, 229, 0.4)",
      desc: "Full source version controls, continuous automated integrations, and hosting student collaboration resources."
    },
    { 
      name: "Firebase", 
      icon: Database, 
      color: "from-amber-500 to-orange-500", 
      glowColor: "rgba(245, 158, 11, 0.4)",
      desc: "Real-time key-value storages, database listeners, secure auth endpoints, and quick application hostings."
    }
  ];

  // Continuous background rotation loop
  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000; // seconds
      // Rate of rotation (degrees per second): slower on hover to make clicking easy
      const rate = hoveredSkill ? 3 : 10;
      setRotationAngle((prev) => (prev + rate * delta) % 360);
      lastTime = time;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [hoveredSkill]);

  return (
    <div className="relative flex items-center justify-center w-full min-h-[460px] md:min-h-[500px]">
      {/* Planetary Orbit Rings background */}
      <div className="absolute w-[240px] h-[240px] orbit-ring pointer-events-none" />
      <div className="absolute w-[360px] h-[360px] orbit-ring pointer-events-none" />
      <div className="absolute w-[440px] h-[440px] orbit-ring pointer-events-none" />

      {/* Central Star Core / Node */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.div
          animate={{
            scale: hoveredSkill ? 1.05 : 1,
            boxShadow: hoveredSkill 
              ? `0 0 40px ${hoveredSkill.glowColor}` 
              : "0 0 25px rgba(139, 92, 246, 0.25)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-32 h-32 rounded-full bg-slate-950/90 border-2 border-purple-500/50 flex flex-col items-center justify-center p-4 text-center cursor-help shadow-lg"
        >
          {hoveredSkill ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center"
            >
              <hoveredSkill.icon size={26} className="text-purple-400 mb-1" />
              <span className="text-xs font-mono font-bold text-white tracking-wider block">
                {hoveredSkill.name}
              </span>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <div className="relative flex items-center justify-center mb-1">
                {/* Visual pulse */}
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-purple-400 opacity-75" />
                <Brain size={28} className="text-purple-400 relative" />
              </div>
              <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-widest leading-normal">
                Hover Tech
              </span>
            </div>
          )}
        </motion.div>

        {/* Floating tech descriptions directly beneath or inside the core */}
        <div className="absolute top-36 w-[260px] md:w-[320px] text-center pointer-events-none min-h-[70px]">
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            key={hoveredSkill ? hoveredSkill.name : "default"}
            className="text-xs text-slate-300 leading-relaxed font-sans bg-[#0c0a21]/80 backdrop-blur-md border border-purple-500/20 px-3 py-2 rounded-xl shadow-lg"
          >
            {hoveredSkill 
              ? hoveredSkill.desc 
              : "Explore my key languages, frameworks, and domains in the interactive solar orbit! Hover over any node to inspect usage."}
          </motion.p>
        </div>
      </div>

      {/* Orbiting Satellite Tech Badges */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {skills.map((skill, index) => {
          const count = skills.length;
          // Distribute planets evenly in degrees
          const angleOffset = (360 / count) * index;
          // Current total angle of rotation
          const currentAngle = rotationAngle + angleOffset;
          // Convert to radians
          const r = currentAngle * (Math.PI / 180);
          
          // Radius of orbits (inner and outer variation)
          const radiusX = index % 2 === 0 ? 175 : 215;
          const radiusY = index % 2 === 0 ? 150 : 185;

          // Trig coordinates
          const x = radiusX * Math.cos(r);
          const y = radiusY * Math.sin(r);

          const IconComponent = skill.icon;

          return (
            <motion.div
              key={skill.name}
              className="absolute pointer-events-auto"
              style={{
                x: x,
                y: y,
              }}
              whileHover={{ scale: 1.25, zIndex: 30 }}
              onHoverStart={() => setHoveredSkill(skill)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <div
                className={`relative flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[#090616]/95 border border-purple-500/30 cursor-crosshair group shadow-md hover:shadow-cyan-500/20`}
                style={{
                  boxShadow: hoveredSkill?.name === skill.name ? `0 0 15px ${skill.glowColor}` : "none"
                }}
              >
                {/* Tech node glow dot */}
                <span className={`absolute -top-[1.5px] -right-[1.5px] w-2.5 h-2.5 rounded-full bg-gradient-to-r ${skill.color} shadow-sm shadow-[#0a0815]`} />

                <IconComponent 
                  size={20} 
                  className="text-slate-300 group-hover:text-white transition-colors duration-200" 
                />

                {/* Satellite Tooltip for mobile or mini visualization */}
                <div className="absolute top-[110%] bg-slate-950/90 text-white font-mono text-[9px] px-2 py-0.5 rounded border border-purple-500/20 shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {skill.name}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
