import { motion } from "motion/react";
import { Sparkles, Activity } from "lucide-react";

export default function BlackHole() {
  return (
    <div id="cosmic-blackhole" className="absolute top-12 md:top-14 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] pointer-events-none -z-10 flex items-center justify-center overflow-visible select-none opacity-85">
      {/* Heavy Gravity Warp Ambient Glow */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,rgba(59,130,246,0.06)_40%,transparent_70%)] blur-3xl" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.08)_0%,rgba(6,182,212,0.04)_50%,transparent_70%)] blur-2xl animate-pulse" />

      {/* Relativistic Accretion Disk (Horizontal Lens) */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: -12 }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute w-[450px] sm:w-[600px] md:w-[750px] h-16 rounded-full bg-gradient-to-r from-transparent via-purple-500/25 via-pink-500/35 via-cyan-500/25 to-transparent blur-md rotate-[-12deg] z-10 opacity-70 scale-y-[0.35]"
      />

      {/* Primary Event Horizon Outer Disk (Tilted Ring) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
        className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-purple-500/30 opacity-60 flex items-center justify-center"
      >
        <span className="absolute w-2 h-2 rounded-full bg-purple-400 top-10 left-10 blur-[1px]" />
        <span className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400 bottom-12 right-12 blur-[1px]" />
      </motion.div>

      {/* Secondary Orbiting dust particles (Middle Ring) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
        className="absolute w-[240px] h-[240px] rounded-full border border-double border-cyan-500/20 opacity-50 flex items-center justify-center"
      >
        <span className="absolute w-1.5 h-1.5 rounded-full bg-blue-300 top-1/2 left-0 blur-[1px]" />
        <span className="absolute w-1 h-1 rounded-full bg-pink-400 bottom-6 left-1/3" />
      </motion.div>

      {/* High-speed Photon Ring (Inner hot boundary) */}
      <motion.div
        animate={{ rotate: 360, scale: [0.98, 1.02, 0.98] }}
        transition={{
          rotate: { repeat: Infinity, duration: 6, ease: "linear" },
          scale: { repeat: Infinity, duration: 3, ease: "easeInOut" }
        }}
        className="absolute w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] rounded-full border-2 border-t-pink-500/60 border-l-purple-500/50 border-r-cyan-400/60 border-b-transparent blur-[2px] z-15"
      />
      <div className="absolute w-[156px] h-[156px] sm:w-[176px] sm:h-[176px] rounded-full bg-transparent border border-white/10 blur-[1px]" />

      {/* Gravitational Singularity (The pitch black center mass) */}
      <div className="relative w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] rounded-full bg-[#02000c] shadow-[inset_0_0_25px_rgba(0,0,0,1),0_0_45px_rgba(168,85,247,0.45)] border border-purple-500/30 flex items-center justify-center z-20">
        {/* Core Event Horizon micro light bending effect */}
        <div className="absolute inset-2 rounded-full bg-black shadow-[inset_0_0_15px_rgba(139,92,246,0.3)] flex items-center justify-center">
          <Activity size={18} className="text-purple-500/25 animate-pulse" />
        </div>
      </div>

      {/* Gravity metrics coordinates overlays */}
      <div className="absolute top-2 left-6 md:left-12 font-mono text-[9px] text-slate-500/70 tracking-widest uppercase select-none flex items-center space-x-1.5">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500/40 animate-ping" />
        <span>GRAV_SINGULARITY: REG_01</span>
      </div>

      <div className="absolute bottom-2 right-6 md:right-12 font-mono text-[9px] text-slate-500/70 tracking-widest uppercase select-none flex items-center space-x-1.5">
        <Sparkles size={10} className="text-cyan-500/40 animate-spin" />
        <span>MASS: 4.3×10^6 M☉ | SPIN: 0.982</span>
      </div>
    </div>
  );
}
