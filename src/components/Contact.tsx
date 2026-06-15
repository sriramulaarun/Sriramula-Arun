import React, { useState } from "react";
import { Mail, Phone, Github, Linkedin, Award, Skull, Send, CheckCircle2, RefreshCw, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO } from "../data";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate high-tech socket upload transfer sequence
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormState({ name: "", email: "", message: "" });
    setIsSuccess(false);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="font-mono text-xs font-bold text-purple-500 uppercase tracking-widest bg-purple-500/5 px-3 py-1 rounded-full border border-purple-500/10">
            08 . CONNECTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Initiate Contact
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </div>

        {/* Form and info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Left panel: Info Hub */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left glass border border-white/10 p-6 md:p-8">
            <div className="space-y-6">
              <h3 className="text-base font-mono font-bold text-white uppercase tracking-wider">
                Direct Communication
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Have a project matching AI assistants, need system penetration tests, or want to collaborate on new web platforms? Let's trace sub-routers and get connected!
              </p>

              <div className="space-y-4">
                {/* Email block */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center space-x-3.5 group p-3 rounded-xl bg-slate-950/40 border border-purple-500/10 hover:border-purple-500/30 transition-all"
                >
                  <div className="p-2 sm:p-2.5 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">EMAIL REGISTRY</span>
                    <span className="text-xs sm:text-sm font-semibold text-white tracking-wide block">{PERSONAL_INFO.email}</span>
                  </div>
                </a>

                {/* Phone block */}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center space-x-3.5 group p-3 rounded-xl bg-slate-950/40 border border-purple-500/10 hover:border-purple-500/30 transition-all"
                >
                  <div className="p-2 sm:p-2.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">PHONE SECURE</span>
                    <span className="text-xs sm:text-sm font-semibold text-white tracking-wide block">+91 {PERSONAL_INFO.phone}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Social channels bottom buttons */}
            <div className="space-y-4 pt-4 border-t border-purple-500/10">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                SECURED NETWORKS
              </span>
              
              <div className="grid grid-cols-2 gap-2.5">
                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 rounded-xl glass border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white font-mono text-[10px] font-bold tracking-wider uppercase transition-all flex items-center justify-center space-x-1.5"
                >
                  <Linkedin size={13} className="text-blue-450" />
                  <span>LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 rounded-xl glass border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white font-mono text-[10px] font-bold tracking-wider uppercase transition-all flex items-center justify-center space-x-1.5"
                >
                  <Github size={13} />
                  <span>GitHub</span>
                </a>

                {/* HTB */}
                <a
                  href={PERSONAL_INFO.hackthebox}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 rounded-xl glass border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white font-mono text-[10px] font-bold tracking-wider uppercase transition-all flex items-center justify-center space-x-1.5"
                >
                  <Skull size={13} className="text-red-400" />
                  <span>HTB Shell</span>
                </a>

                {/* Credly */}
                <a
                  href={PERSONAL_INFO.credly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 rounded-xl glass border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white font-mono text-[10px] font-bold tracking-wider uppercase transition-all flex items-center justify-center space-x-1.5"
                >
                  <Award size={13} className="text-purple-400" />
                  <span>Credly</span>
                </a>

                {/* Instagram */}
                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 px-3.5 py-2.5 rounded-xl glass border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white font-mono text-[10px] font-bold tracking-wider uppercase transition-all flex items-center justify-center space-x-1.5"
                >
                  <Instagram size={13} className="text-pink-500" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right panel: Active contact form */}
          <div className="lg:col-span-7 glass border border-white/10 p-6 md:p-8 relative overflow-hidden flex flex-col justify-center min-h-[380px]">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 text-left"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block pl-1">
                        HACKER / NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-950/40 text-white font-sans text-xs border border-white/10 focus:border-purple-500 rounded-xl px-4 py-3 focus:outline-none transition-colors placeholder-slate-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block pl-1">
                        SECURE EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-slate-950/40 text-white font-sans text-xs border border-white/10 focus:border-purple-500 rounded-xl px-4 py-3 focus:outline-none transition-colors placeholder-slate-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block pl-1">
                      MESSAGE ENVELOPE
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Transmission payload lines..."
                      className="w-full bg-slate-950/40 text-white font-sans text-xs border border-white/10 focus:border-purple-500 rounded-xl px-4 py-3 focus:outline-none resize-none transition-colors placeholder-slate-600"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 mt-4 glass hover:bg-white/15 border border-white/10 text-white font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw size={14} className="animate-spin" />
                        <span>TRANSFERRED SOCKET OVERLAY...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>SEND SECURED ENVELOPE</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center space-y-4 py-8"
                >
                  <div className="p-3.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 animate-pulse">
                    <CheckCircle2 size={36} />
                  </div>
                  <div className="space-y-1.5 font-mono">
                    <h4 className="text-white text-sm font-bold tracking-wider uppercase">
                      Transmission successful
                    </h4>
                    <p className="text-[10px] text-emerald-400">
                      SECURE OUTBOX STATUS: ENCRYPTED AND ASSIGNED
                    </p>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                    Arun's asynchronous sub-routers have safely recorded your packet trace. Our terminal listener will prioritize responding to your credentials soon.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 bg-slate-950 hover:bg-[#120f32] border border-purple-500/30 hover:border-purple-500 text-purple-300 hover:text-white rounded-xl font-mono text-[10px] transition-all cursor-pointer mt-4"
                  >
                    Transmit Another Packet
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
