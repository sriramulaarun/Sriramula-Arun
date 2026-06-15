import { GitFork, Star, Github, Award, ExternalLink, ShieldCheck, Flame, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { GITHUB_REPOS, PERSONAL_INFO } from "../data";

export default function GithubCredly() {
  // Mock contribution grid weeks (53 weeks * 7 days)
  const contributionGrid = Array.from({ length: 112 }, () => Math.floor(Math.random() * 4));

  return (
    <section
      id="github-credly"
      className="relative py-24 px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* GitHub Section */}
          <div className="space-y-8 text-left">
            {/* Section Header */}
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-500/5 px-3 py-1 rounded-full border border-purple-500/10">
                06 . SOURCE CODE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center space-x-2.5">
                <Github className="text-purple-400" />
                <span>GitHub Development Stats</span>
              </h2>
              <div className="w-12 h-1 bg-purple-500 rounded-full" />
            </div>

            {/* Profile Stats card */}
            <div className="glass border border-white/10 p-6 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-purple-500/30 bg-slate-900">
                  <img
                    src="https://github.com/sriramulaarun.png"
                    alt="GitHub avatar fallback"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-mono">@sriramulaarun</h4>
                  <p className="text-[10px] font-mono text-purple-400">Arun Sriramula | Active Contributor</p>
                </div>
              </div>

              {/* GitHub Contribution pixel graph simulation */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                  Contributions Year Grid (Simulated Live)
                </span>
                
                <div className="bg-slate-950 p-4 rounded-xl border border-purple-500/10 overflow-x-auto">
                  {/* Visual contribution blocks */}
                  <div className="flex flex-wrap gap-[3px] min-w-[280px]">
                    {contributionGrid.map((val, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-[1.5px] ${
                          val === 0
                            ? "bg-purple-950/15"
                            : val === 1
                            ? "bg-purple-800/40"
                            : val === 2
                            ? "bg-purple-600/70"
                            : "bg-purple-400"
                        }`}
                        title={`${val} commits verified`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-3 text-[9px] font-mono text-slate-500">
                    <span>Less</span>
                    <div className="flex space-x-1 items-center">
                      <div className="w-2 h-2 bg-purple-950/20 rounded-[1px]" />
                      <div className="w-2 h-2 bg-purple-800/40 rounded-[1px]" />
                      <div className="w-2 h-2 bg-purple-600/70 rounded-[1px]" />
                      <div className="w-2 h-2 bg-purple-400 rounded-[1px]" />
                    </div>
                    <span>More</span>
                  </div>
                </div>
              </div>

              {/* Languages & Repo summary indicators */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950/60 p-4 rounded-xl border border-purple-500/10 space-y-2 font-mono text-xs">
                  <span className="text-purple-400 font-bold block uppercase tracking-wider text-[10px]">
                    TOP LANGUAGES
                  </span>
                  <ul className="space-y-1.5 text-slate-400">
                    <li className="flex justify-between">• Python <span className="text-white">45%</span></li>
                    <li className="flex justify-between">• React/JS <span className="text-white">35%</span></li>
                    <li className="flex justify-between">• SQLite/SQL <span className="text-white">12%</span></li>
                    <li className="flex justify-between">• Shell <span className="text-white">8%</span></li>
                  </ul>
                </div>

                <div className="bg-slate-950/60 p-4 rounded-xl border border-purple-500/10 space-y-3 font-mono text-xs flex flex-col justify-center">
                  <div className="flex items-center space-x-2 text-indigo-400">
                    <Star size={14} />
                    <span>Stars Earned: 30+</span>
                  </div>
                  <div className="flex items-center space-x-2 text-purple-400">
                    <GitFork size={14} />
                    <span>Total Forks: 11+</span>
                  </div>
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <BookOpen size={14} className="text-cyan-400" />
                    <span>Public Repos: 6+</span>
                  </div>
                </div>
              </div>

              {/* Repos lists */}
              <div className="space-y-3.5">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                  Core Repositories
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {GITHUB_REPOS.map((repo) => (
                    <a
                      key={repo.name}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-xl bg-slate-950/50 border border-purple-500/10 hover:border-purple-500/35 hover:bg-purple-950/5 transition-all text-left space-y-2 group"
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-mono text-xs font-bold text-white group-hover:text-purple-300">
                          {repo.name}
                        </span>
                        <ExternalLink size={12} className="text-slate-500 group-hover:text-purple-400" />
                      </div>
                      <p className="text-[10px] text-slate-400 leading-normal min-h-[30px]">
                        {repo.description}
                      </p>
                      <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 pt-1">
                        <div className="flex space-x-1">
                          {repo.languages.map(l => (
                            <span key={l} className="text-purple-400">#{l}</span>
                          ))}
                        </div>
                        <div className="flex items-center space-x-1.5 text-xs text-yellow-500">
                          <Star size={10} />
                          <span>{repo.stars}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Credly Section */}
          <div className="space-y-8 text-left">
            {/* Section Header */}
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-500/5 px-3 py-1 rounded-full border border-purple-500/10">
                07 . BADGES PROFILE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center space-x-2.5">
                <Award className="text-purple-400 animate-pulse" />
                <span>Credly Verified Badges</span>
              </h2>
              <div className="w-12 h-1 bg-purple-500 rounded-full" />
            </div>

            {/* Badges showcase panel */}
            <div className="glass border border-white/15 p-6 space-y-6 flex flex-col justify-between h-full lg:min-h-[580px]">
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-4">
                  Verified Badge Showcase
                </span>

                <div className="grid grid-cols-2 gap-4">
                  {/* Blue Chip badging */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-blue-500/15 flex flex-col items-center text-center space-y-2 group shadow-lg shadow-blue-500/2">
                    <div className="p-3 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                      <Award size={24} />
                    </div>
                    <span className="text-xs font-bold text-white font-sans">Microsoft Certified</span>
                    <span className="text-[9px] font-mono text-blue-400 uppercase tracking-wider">Generative AI Dev</span>
                  </div>

                  {/* IBM Badging */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/15 flex flex-col items-center text-center space-y-2 group shadow-lg shadow-cyan-500/2">
                    <div className="p-3 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Award size={24} />
                    </div>
                    <span className="text-xs font-bold text-white font-sans">IBM Certified</span>
                    <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-wider">Software Engineer</span>
                  </div>
                </div>

                {/* Achievement Timeline lists */}
                <div className="space-y-4 mt-6">
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                    Achievement Verification Timeline
                  </span>

                  <div className="relative border-l border-purple-500/20 pl-4 space-y-5 py-2">
                    {/* Item 1 */}
                    <div className="relative">
                      <span className="absolute -left-[20.5px] top-1.5 w-3 h-3 rounded-full bg-purple-500 border-2 border-[#09061c]" />
                      <div className="font-mono text-[10px] text-purple-400">2024 / Q2 Verification</div>
                      <h4 className="text-xs font-bold text-white mt-1">Microsoft Generative AI Specialist</h4>
                      <p className="text-[10px] text-slate-400">Verified badge representing secure automation, reasoning models, and NLP frameworks competence.</p>
                    </div>

                    {/* Item 2 */}
                    <div className="relative">
                      <span className="absolute -left-[20.5px] top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#09061c]" />
                      <div className="font-mono text-[10px] text-blue-400">2023 / Q4 Verification</div>
                      <h4 className="text-xs font-bold text-white mt-1">IBM Software Architect Paradigm</h4>
                      <p className="text-[10px] text-slate-400">Formal programming paradigms, structured query libraries, database setups, and agile methods audit.</p>
                    </div>

                    {/* Item 3 */}
                    <div className="relative">
                      <span className="absolute -left-[20.5px] top-1.5 w-3 h-3 rounded-full bg-cyan-500 border-2 border-[#09061c]" />
                      <div className="font-mono text-[10px] text-cyan-400">2023 / Q2 Verification</div>
                      <h4 className="text-xs font-bold text-white mt-1">Walmart Advanced Job Simulator</h4>
                      <p className="text-[10px] text-slate-400">Simulating large-scale memory architectures, system performance caches, and container structures.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Credlink */}
              <div className="pt-6 border-t border-purple-500/10">
                <a
                  href={PERSONAL_INFO.credly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 rounded-xl glass hover:bg-white/10 border border-white/10 text-white font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 text-center flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <ShieldCheck size={14} className="text-purple-450" />
                  <span>Verify Credentials on Credly</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
