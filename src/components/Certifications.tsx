import { useState, useRef } from "react";
import { CERTIFICATIONS, Certification } from "../data";
import { Award, ShieldCheck, ChevronLeft, ChevronRight, CheckCircle2, Calendar } from "lucide-react";
import { motion } from "motion/react";

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [verifiedCert, setVerifiedCert] = useState<Certification | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? CERTIFICATIONS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === CERTIFICATIONS.length - 1 ? 0 : prev + 1));
  };

  const getIssuerStyle = (type: string) => {
    switch (type) {
      case "microsoft":
        return {
          bg: "bg-blue-600/10 border-blue-500/30",
          text: "text-blue-400",
          glow: "shadow-blue-500/5",
          dot: "bg-blue-500"
        };
      case "ibm":
        return {
          bg: "bg-cyan-600/10 border-cyan-500/30",
          text: "text-cyan-400",
          glow: "shadow-cyan-500/5",
          dot: "bg-cyan-500"
        };
      case "walmart":
        return {
          bg: "bg-amber-600/10 border-amber-500/30",
          text: "text-amber-450 text-yellow-450",
          glow: "shadow-amber-500/5",
          dot: "bg-amber-505 bg-yellow-500"
        };
      case "cyber":
        return {
          bg: "bg-red-600/10 border-red-500/30",
          text: "text-red-400",
          glow: "shadow-red-500/5",
          dot: "bg-red-500"
        };
      default:
        return {
          bg: "bg-purple-600/10 border-purple-500/30",
          text: "text-purple-400",
          glow: "shadow-purple-500/5",
          dot: "bg-purple-500"
        };
    }
  };

  return (
    <section
      id="certifications"
      className="relative py-24 px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="font-mono text-xs font-bold text-purple-500 uppercase tracking-widest bg-purple-500/5 px-3 py-1 rounded-full border border-purple-500/10">
            04 . CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </div>

        {/* Certificate Deck presentation */}
        <div className="relative max-w-4xl mx-auto items-center px-4 md:px-12">
          {/* Main active item presentation card */}
          <div className="glass border border-white/15 p-6 md:p-8 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl transition-all duration-300">
            {/* Ambient Background Grid pattern */}
            <div className="absolute inset-0 bg-[#0d0a2d]/10 bg-[linear-gradient(rgba(147,51,234,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

            {/* Issuer Badge block (Left column on wide) */}
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl glass bg-slate-950/40 border border-white/10 w-40 h-40 relative z-10 shrink-0">
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <Award size={36} className="text-purple-400 mb-3" />
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">
                ISSUER ID
              </span>
              <span className="text-sm font-semibold text-white mt-1">
                {CERTIFICATIONS[currentIndex].issuer}
              </span>
            </div>

            {/* Certificate info block (Right on wide) */}
            <div className="flex-grow text-center md:text-left space-y-4 relative z-10">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-bold tracking-widest uppercase ${
                  getIssuerStyle(CERTIFICATIONS[currentIndex].badgeType).bg
                } ${getIssuerStyle(CERTIFICATIONS[currentIndex].badgeType).text}`}>
                  {CERTIFICATIONS[currentIndex].issuer} OFFICIAL
                </span>
                <span className="bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-widest flex items-center space-x-1">
                  <ShieldCheck size={11} />
                  <span>SECURE VERIFIED</span>
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white leading-tight">
                {CERTIFICATIONS[currentIndex].title}
              </h3>

              <div className="flex items-center justify-center md:justify-start space-x-4 font-mono text-slate-400 text-xs">
                <span className="flex items-center">
                  <Calendar size={13} className="mr-1.5 text-purple-400" />
                  Date Verified: {CERTIFICATIONS[currentIndex].year}
                </span>
                <span>•</span>
                <span className="text-slate-500">Node: CR-{currentIndex + 2038}</span>
              </div>

              <div className="pt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                <button
                  onClick={() => setVerifiedCert(CERTIFICATIONS[currentIndex])}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 rounded-xl font-mono text-xs font-bold tracking-wide shadow-md shadow-purple-500/15 cursor-pointer"
                >
                  Retrieve System Audit
                </button>
              </div>
            </div>
          </div>

          {/* Nav system buttons - Floating at edge or clean spacing side-by-side */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex space-x-1.5 font-mono text-[10px] text-slate-500">
              <span>RECORD</span>
              <span className="text-purple-400 font-bold">{currentIndex + 1}</span>
              <span>OF</span>
              <span>{CERTIFICATIONS.length}</span>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-xl bg-[#09071c] hover:bg-[#12102f] text-slate-400 hover:text-white border border-purple-500/20 transition-all cursor-pointer"
                title="Previous Certificate"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={nextSlide}
                className="p-2.5 rounded-xl bg-[#09071c] hover:bg-[#12102f] text-slate-400 hover:text-white border border-purple-500/20 transition-all cursor-pointer"
                title="Next Certificate"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Credentials Stack Carousel indicators below */}
        <div className="flex justify-center flex-wrap gap-2 mt-8 max-w-2xl mx-auto">
          {CERTIFICATIONS.map((cert, idx) => (
            <button
              key={cert.title}
              onClick={() => setCurrentIndex(idx)}
              className={`text-[9px] font-mono px-3 py-1 rounded-full border transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "bg-purple-600/20 text-white border-purple-500 shadow-md"
                  : "bg-[#09071c]/40 text-slate-500 border-purple-500/5 hover:text-slate-300"
              }`}
            >
              C-{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Verification Audit Modal Popover */}
      {verifiedCert && (
        <div className="fixed inset-0 z-101 flex items-center justify-center p-4">
          <div
            onClick={() => setVerifiedCert(null)}
            className="absolute inset-0 bg-[#060411]/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative bg-[#050311] border border-emerald-500/40 p-6 rounded-2xl max-w-md w-full shadow-2xl z-20 text-left font-mono"
          >
            <div className="flex items-center space-x-2.5 text-emerald-400 border-b border-emerald-500/15 pb-3 mb-4">
              <CheckCircle2 size={18} />
              <span className="font-bold tracking-wider text-xs uppercase">
                CREDENTIAL AUDIT OK
              </span>
            </div>

            <div className="space-y-3.5 text-slate-300 text-xs leading-relaxed">
              <div className="bg-slate-950/80 p-3 rounded-lg border border-emerald-500/10 space-y-1">
                <span className="text-slate-500 uppercase text-[9px] block">ORGANIZATION</span>
                <span className="text-white font-bold">{verifiedCert.issuer}</span>
              </div>

              <div className="bg-slate-950/80 p-3 rounded-lg border border-emerald-500/10 space-y-1">
                <span className="text-slate-500 uppercase text-[9px] block">CREDENTIAL VALUE</span>
                <span className="text-white text-[11px] block">{verifiedCert.title}</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-950/80 p-3 rounded-lg border border-emerald-500/10 space-y-1">
                  <span className="text-slate-500 uppercase text-[9px] block">SECURITY HASH</span>
                  <span className="text-emerald-400 text-[10px] block">SHA256-{verifiedCert.year}AF</span>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-lg border border-emerald-500/10 space-y-1">
                  <span className="text-slate-500 uppercase text-[9px] block">COMPLIANCE</span>
                  <span className="text-white text-[10px] block">SEC-ISO-27001</span>
                </div>
              </div>

              <p className="text-[10px] text-slate-500 italic mt-4">
                * This document serves as digital verification of competency. Authenticated cryptographically via institutional secure servers. Let the compiler trace compile verified nodes intact.
              </p>
            </div>

            <button
              onClick={() => setVerifiedCert(null)}
              className="mt-6 w-full py-2.5 bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/35 hover:border-emerald-500 text-emerald-300 hover:text-white rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer text-center"
            >
              Release Verification Stack
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
