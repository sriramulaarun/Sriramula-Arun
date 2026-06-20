import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS, Project } from "../data";
import { Github, ExternalLink, Code2, ShieldAlert, Sparkles, X, ChevronRight, Download, Terminal } from "lucide-react";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="font-mono text-xs font-bold text-purple-500 uppercase tracking-widest bg-purple-500/5 px-3 py-1 rounded-full border border-purple-500/10">
            03 . CREATIVE PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </div>

        {/* Project Layout - Modern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((proj, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              key={proj.id}
              className="glass border border-white/10 overflow-hidden hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Card visual banner block */}
              <div className="relative h-44 bg-gradient-to-br from-[#110c2e] to-[#0d1637] flex items-center justify-center p-6 border-b border-purple-500/10 overflow-hidden">
                {/* Abstract geometric stars backings */}
                <div className="absolute inset-0 bg-[radial-gradient(#201633_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-40" />
                
                {/* Giant faint floating icon based on product */}
                {proj.id === "max-ai" ? (
                  <Sparkles size={80} className="text-purple-500/10 absolute -right-6 -bottom-4 rotate-12" />
                ) : proj.id === "community-hub" ? (
                  <Code2 size={80} className="text-blue-500/10 absolute -right-6 -bottom-4 rotate-12" />
                ) : proj.id === "mediahub-downloader" ? (
                  <Download size={80} className="text-pink-500/10 absolute -right-6 -bottom-4 rotate-12" />
                ) : (
                  <ShieldAlert size={80} className="text-violet-500/10 absolute -right-6 -bottom-4 rotate-12" />
                )}

                {/* Simulated high-tech project tag */}
                <div className="absolute top-4 left-4 bg-[#0a071d]/85 px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-widest text-[#a855f7] border border-purple-500/20 uppercase">
                  {proj.category}
                </div>

                <div className="relative p-3 rounded-2xl bg-white/5 border border-purple-500/20 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {proj.id === "max-ai" ? (
                    <Sparkles size={32} className="text-purple-400" />
                  ) : proj.id === "community-hub" ? (
                    <Code2 size={32} className="text-blue-400" />
                  ) : proj.id === "mediahub-downloader" ? (
                    <Download size={32} className="text-pink-400" />
                  ) : (
                    <ShieldAlert size={32} className="text-violet-400" />
                  )}
                </div>
              </div>

              {/* Card info block */}
              <div className="p-6 flex flex-col justify-between flex-grow text-left space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed min-h-[50px]">
                    {proj.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Tech stack badge row */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-purple-950/20 text-purple-300 font-mono text-[9px] font-semibold border border-purple-500/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-purple-500/10">
                    <button
                      onClick={() => setActiveProject(proj)}
                      className="text-xs font-mono font-bold text-slate-300 hover:text-white flex items-center space-x-1 outline-none group/btn cursor-pointer"
                    >
                      <span>System Log</span>
                      <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center space-x-2">
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-white border border-purple-500/10 transition-colors"
                          title="View GitHub Repository"
                        >
                          <Github size={14} />
                        </a>
                      )}

                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 text-blue-300 hover:text-white transition-colors"
                          title="View Live Demo"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                      
                      <button
                        onClick={() => setActiveProject(proj)}
                        className="p-2 rounded-lg bg-purple-600/10 hover:bg-purple-600/20 border border-purple-500/20 text-purple-300 hover:text-white transition-colors cursor-pointer"
                        title="Display Details"
                      >
                        <Terminal size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Project Technical Logs Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-[#060410]/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl glass border border-white/20 bg-slate-950/80 overflow-hidden shadow-2xl z-20 flex flex-col p-6 text-left"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-purple-500/15 pb-4 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <Code2 size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-sans">
                      {activeProject.title}
                    </h3>
                    <p className="font-mono text-[9px] text-purple-400 tracking-widest uppercase">
                      PROJECT SYSTEM MANIFEST
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Content / System specifications */}
              <div className="space-y-4 overflow-y-auto max-h-[360px] pr-2">
                <div className="bg-[#05030f]/60 p-4 rounded-xl border border-purple-500/10 font-mono text-xs text-slate-300 space-y-2">
                  <div className="text-purple-400 border-b border-purple-500/5 pb-1 mb-2 uppercase font-bold text-[10px] tracking-wider">
                    [ SYSTEM SUMMARY ]
                  </div>
                  <p className="leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#05030f]/60 p-4 rounded-xl border border-purple-500/10 space-y-2">
                    <div className="font-mono text-purple-400 border-b border-purple-500/5 pb-1 mb-2 uppercase font-bold text-[10px] tracking-wider">
                      [ TECHNOLOGY STACK ]
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-lg bg-purple-950/20 text-purple-300 font-mono text-[10px] border border-purple-500/15">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#05030f]/60 p-4 rounded-xl border border-purple-500/10 space-y-2">
                    <div className="font-mono text-blue-400 border-b border-purple-500/5 pb-1 mb-2 uppercase font-bold text-[10px] tracking-wider">
                      [ SYSTEM ATTRIBUTES ]
                    </div>
                    <ul className="space-y-1 font-mono text-[10px] text-slate-400">
                      <li>• Category: <span className="text-white">{activeProject.category}</span></li>
                      <li>• Status: <span className="text-emerald-400 font-bold font-sans">DEPLOYED [✓]</span></li>
                      <li>• Architecture: <span className="text-white">Multi-tier</span></li>
                      <li>• Year: <span className="text-white">2023 - 2024</span></li>
                    </ul>
                  </div>
                </div>

                {/* Extended description/mock parameters */}
                <div className="space-y-2 text-xs">
                  <h4 className="text-white font-semibold font-sans">Architectural Highlights</h4>
                  {activeProject.id === "max-ai" && (
                    <p className="text-slate-400 leading-relaxed">
                      Features a pipeline including automated speech-to-text processing, conversational memory retention pools, and smart OS level automation scripts built entirely in Flask microservices and integrated with private LLM reasoning clients.
                    </p>
                  )}
                  {activeProject.id === "community-hub" && (
                    <p className="text-slate-400 leading-relaxed">
                      Utilizes Firebase Firestore database listeners for state updates across multiple collaboration boards. Features secured OAuth endpoints protecting user spaces, private messaging forums, and community dynamic lists.
                    </p>
                  )}
                  {activeProject.id === "mediahub-downloader" && (
                    <p className="text-slate-400 leading-relaxed">
                      Engineered with an asynchronous worker pipeline designed to parse incoming URL media feeds, extract secure direct audio/video streaming streams, and assemble complete download assets instantly while showing accurate transfer status updates.
                    </p>
                  )}
                  {activeProject.id === "timetable" && (
                    <p className="text-slate-400 leading-relaxed">
                      Engineered backplane algorithm to dynamically align slots across classes, teachers, and student groups, resolving scheduling overlaps through constraint satisfaction models and SQLite query caching.
                    </p>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-purple-500/15 flex justify-end space-x-3">
                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-950 hover:bg-slate-900 border border-purple-500/25 rounded-xl font-mono text-xs text-slate-300 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <Github size={14} />
                    <span>View Repository</span>
                  </a>
                )}
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#0d1637]/80 hover:bg-[#111e4c] border border-blue-500/35 rounded-xl font-mono text-xs text-blue-300 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <ExternalLink size={14} />
                    <span>Visit Live Demo</span>
                  </a>
                )}
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-mono text-xs font-semibold text-white hover:from-purple-500 hover:to-blue-500 transition-all"
                >
                  Close Log
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
