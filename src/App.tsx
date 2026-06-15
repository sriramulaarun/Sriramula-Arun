import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Orbit from "./components/Orbit";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Cybersecurity from "./components/Cybersecurity";
import GithubCredly from "./components/GithubCredly";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Terminal, ShieldCheck, Heart } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Establishing secure sockets...");

  // Loader Text cycle animation sequence
  useEffect(() => {
    const texts = [
      "Establishing secure sockets...",
      "Compiling Sriramula Arun Core Data...",
      "Decrypting credentials database...",
      "Configuring orbital constellations..."
    ];
    let idx = 0;
    const interval = setInterval(() => {
      if (idx < texts.length - 1) {
        idx++;
        setLoadingText(texts[idx]);
      }
    }, 600);

    const mainTimer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(mainTimer);
    };
  }, []);

  // Section Tracking via Intersection Observer
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "certifications", "cybersecurity", "contact"];
    const observers: IntersectionObserver[] = [];

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -40% 0px", // Trigger when section is in active viewing focus
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((secId) => {
      const el = document.getElementById(secId);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [loading]);

  return (
    <>
      {/* Absolute Background Layer */}
      <ParticlesBackground />

      <AnimatePresence mode="wait">
        {loading ? (
          /* High-Tech Premium Loading Screen */
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-1000 bg-[#03010b] flex flex-col items-center justify-center p-6 scanlines"
          >
            {/* Pulsing Core graphic */}
            <div className="relative flex items-center justify-center mb-8">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
                className="w-16 h-16 rounded-2xl border-2 border-purple-500/50 bg-[#0c0821]/80 flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.3)]"
              >
                <Cpu size={26} className="text-purple-400" />
              </motion.div>
              {/* Outer Orbit loop in preloader */}
              <div className="absolute w-24 h-24 rounded-full border border-dashed border-purple-500/20 animate-spin" style={{ animationDuration: '8s' }} />
            </div>

            {/* Title */}
            <div className="space-y-2 text-center mb-6">
              <h1 className="font-mono text-xs font-extrabold tracking-[0.3em] uppercase text-slate-500">
                Sriramula Arun
              </h1>
              <p className="font-mono text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white to-blue-400 tracking-wider">
                PORTFOLIO CORE ONLINE
              </p>
            </div>

            {/* Loaded status text */}
            <div className="w-64 space-y-2 text-center">
              <div className="font-mono text-[10px] text-[#a855f7] tracking-wider uppercase h-4">
                {loadingText}
              </div>
              
              {/* Progress bar line */}
              <div className="w-full h-[3px] bg-purple-950/40 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
                />
              </div>
            </div>
          </motion.div>
        ) : (
          /* Active Website Frame */
          <motion.div
            key="portal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-col min-h-screen text-slate-100 gradient-bg"
          >
            {/* Header / navbar */}
            <Navbar activeSection={activeSection} />

            {/* Main scroll sections content */}
            <main className="flex-grow">
              <Hero />

              {/* Integrated Orbit Stack Transition block */}
              <div className="relative py-12 max-w-7xl mx-auto overflow-hidden">
                <div className="text-center space-y-2 mb-8">
                  <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase block">ORBIT MATRIX</span>
                  <p className="text-xs text-slate-400 font-mono">Dynamic interaction maps representing my focal skillsets</p>
                </div>
                <Orbit />
              </div>

              <About />
              <Skills />
              <Projects />
              <Certifications />
              <Cybersecurity />
              <GithubCredly />
              <Contact />
            </main>

            {/* Cosmic Slate Footer */}
            <footer className="glass bg-white/2 border-t border-white/10 py-12 px-6 md:px-12 relative z-10 font-mono mt-12">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                
                {/* Copyright info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
                  <span className="text-white text-xs font-bold tracking-wider">
                    SRIRAMULA ARUN <span className="text-purple-500 font-sans">.</span> DEV
                  </span>
                  <span className="text-[10px] text-slate-500">
                    © 2026 Sriramula Arun. All security rights assigned.
                  </span>
                </div>

                {/* status indices */}
                <div className="flex items-center space-x-1.5 text-[10px] text-slate-500 bg-purple-500/5 border border-purple-500/10 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="uppercase font-semibold tracking-widest text-[9px] text-[#a855f7]">PORTFOLIO HOSTING OK</span>
                </div>

                {/* dedication */}
                <div className="flex items-center text-[10px] text-slate-500">
                  <span>Crafted with</span>
                  <Heart size={10} className="mx-1 text-purple-500 fill-purple-500" />
                  <span>using React & Motion</span>
                </div>

              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
