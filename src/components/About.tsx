import { motion } from "motion/react";
import { GraduationCap, Award, Target, Rocket } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: GraduationCap,
      title: "Academic Path",
      desc: "B.Tech Computer Science Engineering student actively diving deep into Artificial Intelligence frameworks and security architectures.",
      color: "border-purple-500/20 text-purple-400 group-hover:border-purple-500/50"
    },
    {
      icon: Award,
      title: "Achievements",
      desc: "Earned 8+ certified credentials from enterprise giants like IBM, Microsoft, and Walmart simulator labs.",
      color: "border-blue-500/20 text-blue-400 group-hover:border-blue-500/50"
    },
    {
      icon: Target,
      title: "Primary Mission",
      desc: "To engineer secure, smart, and scalable digital solutions that bridge the gap between AI automation and safety.",
      color: "border-purple-500/20 text-violet-400 group-hover:border-purple-500/50"
    }
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="font-mono text-xs font-bold text-purple-500 uppercase tracking-widest bg-purple-500/5 px-3 py-1 rounded-full border border-purple-500/10">
            01 . BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Premium Storytelling
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </div>

        {/* Narrative & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Detailed Paragraph Text (Story) */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed text-left">
            <h3 className="text-lg font-mono font-bold text-white flex items-center space-x-2">
              <Rocket size={18} className="text-purple-400" />
              <span>Who is Sriramula Arun?</span>
            </h3>
            
            <p className="border-l-2 border-purple-500/40 pl-4 py-1">
              I am a B.Tech Computer Science Engineering student passionate about the synergy of <strong className="text-white font-medium">Artificial Intelligence</strong>, <strong className="text-white font-medium">Cybersecurity</strong>, and <strong className="text-white font-medium">Full Stack Development</strong>.
            </p>
            
            <p>
              Rather than sticking purely to theory, I enjoy building operational physical and virtual applications. I've designed and launched intelligent virtual assistants that leverage speech-to-text APIs, robust college management tools, and collaborative student spaces backed by real-time sync engines.
            </p>

            <p>
              My ultimate mission is to become a highly skilled software engineer capable of delivering innovative technology solutions while maintaining exceptional standards of code quality and architectural cybersecurity.
            </p>

            {/* Micro stats banner */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="glass border border-white/10 p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">
                  3+
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider block mt-1">
                  Core Apps
                </span>
              </div>
              <div className="glass border border-white/10 p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                  8+
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider block mt-1">
                  Certifications
                </span>
              </div>
              <div className="glass border border-white/10 p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                  10+
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider block mt-1">
                  Tech Stack
                </span>
              </div>
            </div>
          </div>

          {/* Feature Grid / Cards Column */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className={`group p-5 rounded-2xl glass border border-white/10 transition-all duration-300 hover:bg-white/10 flex items-start space-x-4 text-left`}
                >
                  <div className="p-3 rounded-xl bg-purple-500/5 group-hover:bg-purple-500/10 border border-purple-500/10 transition-colors duration-300">
                    <Icon size={20} className="stroke-[2px] text-purple-400" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-white text-sm font-semibold tracking-wide">
                      {card.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
