import { useState, useEffect } from "react";
import { Menu, X, Shield, Terminal, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "cybersecurity", label: "Cybersecurity" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      id="navbar-system"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 ${
        scrolled
          ? "py-3"
          : "py-6"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 h-14 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "glass bg-white/5 border border-white/10 shadow-xl shadow-purple-500/5"
          : "bg-transparent border border-transparent"
      }`}>
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="group flex items-center space-x-2 text-white font-mono text-lg font-bold tracking-wider cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 p-[1px] group-hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center w-full h-full bg-[#0d091e] rounded-[7px]">
              <Shield size={16} className="text-purple-400 group-hover:text-blue-400 transition-colors duration-300" />
            </div>
            {/* Glow */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-100 via-white to-blue-200">
            ARUN<span className="text-purple-500 font-sans">.</span>DEV
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 font-mono text-xs font-medium tracking-wide transition-all duration-300 rounded-md cursor-pointer ${
                activeSection === item.id
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute inset-0 bg-white/5 rounded-md border border-purple-500/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                >
                  <span className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500" />
                </motion.div>
              )}
              {item.label}
            </button>
          ))}
          <a
            href="mailto:sriramulaarun249@gmail.com"
            className="ml-4 px-4 py-2 rounded-lg glass hover:bg-white/10 text-white font-mono text-xs font-semibold border border-white/10 transition-all duration-300 flex items-center space-x-1"
          >
            <span>Connect</span>
            <ArrowUpRight size={14} className="ml-1" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-all"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#0d0a21]/95 border-b border-purple-500/20 backdrop-blur-xl shadow-lg md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full py-2 px-4 text-left font-mono text-sm rounded-lg transition-all ${
                    activeSection === item.id
                      ? "text-white bg-purple-500/10 border-l-2 border-purple-500"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <hr className="border-purple-500/10 my-2" />
              <div className="flex justify-between items-center px-4 pt-2 text-xs font-mono text-slate-500">
                <span>sriramulaarun249@gmail.com</span>
                <span className="text-purple-400">Arun Portfolio</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
