import { useState, useEffect } from "react";
import { ArrowDown, Mail, Download, ArrowRight, ShieldAlert, Cpu, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO } from "../data";
import BlackHole from "./BlackHole";

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  const handleDownloadCV = () => {
    // Generate simple text-based resume file and trigger download
    const cvContent = `
=========================================
SRIRAMULA ARUN
AI Developer | Cybersecurity Enthusiast | Full Stack Developer
sriramulaarun249@gmail.com | 8309174316
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}
Credly: ${PERSONAL_INFO.credly}
Hack The Box: ${PERSONAL_INFO.hackthebox}
Instagram: ${PERSONAL_INFO.instagram}
=========================================

SUMMARY:
Passionate Computer Science student focused on Artificial Intelligence, Cybersecurity, and Software Development. Building impactful products and continuously learning through hands-on projects and practical experience.

TECHNICAL SKILLS:
- Programming: Python, Java, C, JavaScript
- Frontend: HTML, CSS, React
- Backend: Flask, Firebase, SQLite
- Cybersecurity: Ethical Hacking, Linux, Network Security, Hack The Box
- AI: Generative AI, Prompt Engineering, AI Tools, ChatGPT

PROJECTS:
1. College Timetable Management System
   - Smart timetable generation platform for colleges with faculty, student, and admin modules.
   - Tech: Python, Flask, SQLite, JavaScript

2. Community Hub
   - Student collaboration platform for networking, discussions, resource sharing, and project collaboration.
   - Tech: React, Firebase, JavaScript

3. Max AI (Jarvis)
   - AI-powered virtual assistant with voice interaction, AI conversations, automation, and productivity features.
   - Tech: Python, Flask, AI APIs

CERTIFICATIONS:
- Microsoft Generative AI for Software Developers
- IBM Introduction to Software Engineering
- IBM Introduction to Software, Programming and Databases
- Walmart Advanced Software Engineering Job Simulation
- Cyber Defend Bootcamp
- Art of Hacking Workshop
- AI Tools Workshop
- HTML & CSS Bootcamp
`;

    const blob = new Blob([cvContent.trim()], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Sriramula_Arun_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 md:pt-32 lg:pt-36 pb-16 px-6 md:px-12 overflow-hidden"
    >
      {/* Dynamic Cosmic Blackhole Backdrop */}
      <BlackHole />

      {/* Decorative Blur Backdrops */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full w-fit">
            <Sparkles size={14} className="text-purple-400 animate-pulse" />
            <span className="font-mono text-xs font-semibold tracking-wider text-purple-300">
              WELCOME TO MY PORTFOLIO
            </span>
          </div>

          <div className="space-y-2">
            <p className="font-mono text-sm tracking-widest text-slate-400">
              HELLO, I'M
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-sans leading-none">
              SRIRAMULA ARUN
            </h1>

            {/* Dynamic Sliding Roles */}
            <div className="h-10 sm:h-12 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRoleIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 font-mono text-lg sm:text-2xl font-bold tracking-wide"
                >
                  {PERSONAL_INFO.roles[currentRoleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed max-w-xl text-sm sm:text-base">
            {PERSONAL_INFO.description}
          </p>

          {/* Call To Actions */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 rounded-xl glass neon-border-blue text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-blue-500/10 transition-all duration-300 flex items-center space-x-2 group cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 rounded-xl bg-white text-black hover:bg-gray-200 font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <Mail size={14} />
              <span>Get In Touch</span>
            </button>

            <button
              onClick={handleDownloadCV}
              className="px-6 py-3 rounded-xl glass border border-white/10 text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <Download size={14} />
              <span>Download CV</span>
            </button>
          </div>
        </div>

        {/* Right Side Photo Presentation */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] flex items-center justify-center">
            {/* Outer Rotating Cyber Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute inset-0 orbit-ring"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-dashed border-blue-500/20"
            />

            {/* Glowing Backdrop Circle */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 blur-2xl opacity-20 pointer-events-none" />

            {/* Circular Image Frame */}
            <div className="absolute inset-4 rounded-full bg-[#030014] border-4 border-purple-500/30 p-1 overflow-hidden shadow-2xl flex items-center justify-center z-10 group">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border border-purple-500/10">
                {/* Fallback pattern in case image host is blocked */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#110c2d] to-[#121c43] flex items-center justify-center pointer-events-none">
                  {/* Neon Tech Grid backing */}
                  <div className="absolute inset-0 bg-[radial-gradient(#2c1a4d_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                </div>

                <img
                  src="https://github.com/sriramulaarun.png"
                  alt="Sriramula Arun"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover relative z-10 filter brightness-95 contrast-105 group-hover:scale-105 transition-all duration-700"
                  onError={(e) => {
                    // Fallback to high tech avatar icon representation if loading fails
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* Ultimate high-tech visual overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e082c]/85 via-transparent to-transparent z-15" />
              </div>
            </div>

            {/* Floating Satellite Indicators/Icons */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-2 -right-2 z-20 flex items-center justify-center w-10 h-10 rounded-xl bg-slate-950/90 border border-purple-500/50 shadow-md shadow-purple-500/10 pointer-events-none"
            >
              <Cpu size={18} className="text-purple-400" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 left-6 z-20 flex items-center justify-center w-11 h-11 rounded-xl bg-slate-950/90 border border-blue-500/50 shadow-md shadow-blue-500/10 pointer-events-none"
            >
              <ShieldAlert size={18} className="text-blue-400" />
            </motion.div>

            {/* Orbital tech tags */}
            <div className="absolute -bottom-6 right-8 z-20 bg-[#09071c]/90 border border-purple-500/30 px-3 py-1 rounded-full text-[10px] font-mono text-purple-300 font-bold tracking-widest shadow-lg flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
              <span>AI INTEGRATED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bounce Down Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center space-y-1 group z-10 cursor-pointer"
      >
        <span className="font-mono text-[10px] tracking-widest text-slate-500 group-hover:text-purple-400 transition-colors uppercase">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-slate-500 group-hover:text-purple-400 transition-colors" />
        </motion.div>
      </button>
    </section>
  );
}
