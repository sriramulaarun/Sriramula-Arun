import { useState } from "react";
import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../data";
import { 
  Code, Eye, Database, ShieldCheck, Cpu, Play
} from "lucide-react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...SKILL_CATEGORIES.map(c => c.title)];

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Programming":
        return <Code size={18} className="text-purple-400" />;
      case "Frontend Development":
        return <Eye size={18} className="text-cyan-400" />;
      case "Backend & Database":
        return <Database size={18} className="text-blue-400" />;
      case "Cybersecurity":
        return <ShieldCheck size={18} className="text-emerald-400" />;
      case "Artificial Intelligence":
        return <Cpu size={18} className="text-pink-400" />;
      default:
        return <Code size={18} />;
    }
  };

  const filteredCategories = selectedCategory === "All" 
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.title === selectedCategory);

  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <span className="font-mono text-xs font-bold text-purple-500 uppercase tracking-widest bg-purple-500/5 px-3 py-1 rounded-full border border-purple-500/10">
            02 . EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Advanced Tech Stack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider border transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "glass bg-white/10 text-white border-purple-500/60 shadow-lg shadow-purple-500/10"
                  : "glass text-slate-400 border-white/10 hover:text-white hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, catIdx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              key={category.title}
              className="glass border border-white/10 p-6 transition-all duration-300 flex flex-col justify-between hover:border-purple-500/30"
            >
              <div>
                <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-purple-500/10">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1 text-left">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-purple-400 font-mono font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Advanced animated progress bar */}
                      <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full relative"
                        >
                          <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/40 blur-sm" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative detail */}
              <div className="mt-8 flex justify-between items-center text-[10px] font-mono text-slate-500">
                <span>SECURED & OPTIMIZED</span>
                <Play size={10} className="text-purple-500/50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
