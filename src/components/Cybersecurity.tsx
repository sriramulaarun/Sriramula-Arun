import { useState, useEffect, useRef } from "react";
import { Terminal, ShieldAlert, Cpu, Check, Play, CornerDownLeft, Award, Skull } from "lucide-react";
import { motion } from "motion/react";
import { PERSONAL_INFO } from "../data";

interface TerminalLine {
  text: string;
  type: "cmd" | "output" | "success" | "error" | "system";
}

export default function Cybersecurity() {
  const [inputVal, setInputVal] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<TerminalLine[]>([
    { text: "Secured Port Connection Established. Initiating local decrypters...", type: "system" },
    { text: "Type 'help' or click any prompt below to audit security nodes.", type: "system" },
    { text: "arun-sec@localhost:~$ whoami", type: "cmd" },
    { text: "Sriramula Arun", type: "output" },
    { text: "arun-sec@localhost:~$ role", type: "cmd" },
    { text: "Cybersecurity Enthusiast | Penetration Tester", type: "output" }
  ]);
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditStep, setAuditStep] = useState(0);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory, isAuditing, auditStep]);

  const commandPresets = ["whoami", "role", "skills", "htb", "internship", "audit", "clear"];

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...terminalHistory, { text: `arun-sec@localhost:~$ ${cmdText}`, type: "cmd" as const }];

    switch (trimmed) {
      case "help":
        newHistory.push(
          { text: "Available System Directives:", type: "system" },
          { text: "  whoami     - Displays identity context", type: "output" },
          { text: "  role       - Highlights cybersecurity and developer roles", type: "output" },
          { text: "  skills     - Lists verified security frameworks & labs expertise", type: "output" },
          { text: "  htb        - Accesses Hack The Box profile indicators", type: "output" },
          { text: "  internship - Show details of CodeAlpha Cybersecurity Internship", type: "output" },
          { text: "  audit      - Runs full automated system security diagnostics", type: "output" },
          { text: "  clear      - Flush the terminal line registers", type: "output" }
        );
        break;
      case "whoami":
        newHistory.push(
          { text: "IDENT: Sriramula Arun", type: "output" },
          { text: "STATUS: Active Student Developer & Cybersecurity Intern", type: "output" },
          { text: "SECTOR: Artificial Intelligence & Network Security Integration", type: "output" }
        );
        break;
      case "role":
        newHistory.push(
          { text: "ROLE_A: Cybersecurity Enthusiast / Penetration Tester", type: "output" },
          { text: "ROLE_B: Generative AI Developer & Agent Architect", type: "output" },
          { text: "ROLE_C: Full-Stack Engineer [React | Flask | SQlite]", type: "output" }
        );
        break;
      case "skills":
        newHistory.push(
          { text: "Active Lab Toolsets:", type: "output" },
          { text: "  - Operating Systems: ARCH, DEBIAN, RHEL, Linux Hardening", type: "output" },
          { text: "  - Security Focus: Network Analysis, SQL Injection, Web Audits", type: "output" },
          { text: "  - Attack/Defense Labs: Hack The Box, Cyber Defend Labs", type: "output" }
        );
        break;
      case "htb":
        newHistory.push(
          { text: "RETRIEVING Hack The Box Profile...", type: "system" },
          { text: "USER ID: sriramulaarun [ID 019e9bc5-1306-73e4-8557]", type: "output" },
          { text: "RANK: Active Proving Grounds Enthusiast", type: "success" },
          { text: "VERIFICATION KEY: SHA512_HTB_ARUN_RESOLVED", type: "success" }
        );
        break;
      case "internship":
        newHistory.push(
          { text: "RETRIEVING Internship Nodes...", type: "system" },
          { text: "ROLE: Cybersecurity Research & Engineering Intern at CodeAlpha", type: "success" },
          { text: "CORE INITIATIVE: Network Traffic Auditing & Packet Inspection Systems", type: "output" },
          { text: "PROJECT CAPABILITY: Basic Network Sniffer [Python / Scapy]", type: "output" },
          { text: "REPOSITORY: https://github.com/sriramulaarun/CodeAlpha_BasicNetworkSniffer", type: "success" }
        );
        break;
      case "audit":
        newHistory.push({ text: "CRITICAL: Launching Automated System Security Audit...", type: "system" });
        setIsAuditing(true);
        setAuditStep(1);
        break;
      case "clear":
        setTerminalHistory([]);
        setInputVal("");
        return;
      default:
        newHistory.push({ text: `sh: command not found: '${cmdText}'. Type 'help' for layout instructions.`, type: "error" });
        break;
    }

    setTerminalHistory(newHistory);
    setInputVal("");
  };

  // Run a multi-step simulated audit animation when "audit" is triggered
  useEffect(() => {
    if (!isAuditing) return;

    if (auditStep === 1) {
      const timer = setTimeout(() => {
        setTerminalHistory((prev) => [...prev, { text: "[SYSTEM] Scanning open ports... 22/tcp, 80/tcp, 443/tcp, 3000/tcp detected.", type: "output" }]);
        setAuditStep(2);
      }, 1000);
      return () => clearTimeout(timer);
    }

    if (auditStep === 2) {
      const timer = setTimeout(() => {
        setTerminalHistory((prev) => [...prev, { text: "[SYSTEM] Testing SQL injection points inside Flask db registries... INJECTION BLOCKED.", type: "success" }]);
        setAuditStep(3);
      }, 1000);
      return () => clearTimeout(timer);
    }

    if (auditStep === 3) {
      const timer = setTimeout(() => {
        setTerminalHistory((prev) => [
          ...prev,
          { text: "[SYSTEM] Auditing Firebase Auth credentials... SECURED.", type: "success" },
          { text: "SYSTEM STATUS: SECURED AND HARDENED against CVE models.", type: "success" }
        ]);
        setIsAuditing(false);
        setAuditStep(0);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isAuditing, auditStep]);

  return (
    <section
      id="cybersecurity"
      className="relative py-24 px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="font-mono text-xs font-bold text-purple-500 uppercase tracking-widest bg-purple-500/5 px-3 py-1 rounded-full border border-purple-500/10">
            05 . CYBER SECURITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Offensive & Defensive Security
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </div>

        {/* Big terminal grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Interactive Shell (Hacker Terminal style) */}
          <div className="lg:col-span-7 flex flex-col glass border border-white/10 overflow-hidden shadow-2xl h-[420px]">
            {/* Terminal Window Header Bar */}
            <div className="bg-white/3 px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/40 border border-red-500/20" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/40 border border-yellow-500/20" />
                <span className="w-3 h-3 rounded-full bg-green-500/40 border border-green-500/20" />
              </div>
              <div className="flex items-center space-x-1.5 font-mono text-[10px] text-slate-400">
                <Terminal size={12} className="text-purple-400 animate-pulse" />
                <span>arun-sec@localhost: ~ (sh)</span>
              </div>
              <div className="w-4" /> {/* spacer */}
            </div>

            {/* Custom Terminal Content */}
            <div className="flex-grow p-4 overflow-y-auto block text-left font-mono text-[11px] space-y-2.5 max-h-[310px] bg-slate-950/60 custom-scrollbar">
              {terminalHistory.map((item, index) => (
                <div
                  key={index}
                  className={`leading-relaxed whitespace-pre-wrap ${
                    item.type === "cmd"
                      ? "text-purple-300"
                      : item.type === "success"
                      ? "text-emerald-400 font-bold"
                      : item.type === "error"
                      ? "text-red-400 font-bold"
                      : item.type === "system"
                      ? "text-cyan-400 font-medium"
                      : "text-slate-300"
                  }`}
                >
                  {item.text}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Terminal Input Line */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(inputVal);
              }}
              className="bg-[#080517] border-t border-purple-500/20 px-4 py-3 flex items-center space-x-2"
            >
              <span className="font-mono text-purple-400 text-xs font-semibold">arun-sec@~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type 'help' or click presets below..."
                className="flex-grow bg-transparent text-white font-mono text-xs focus:outline-none placeholder-slate-650"
                disabled={isAuditing}
              />
              <button
                type="submit"
                className="p-1 rounded bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 hover:text-white border border-purple-500/20 transition-all cursor-pointer"
                disabled={isAuditing}
              >
                <CornerDownLeft size={12} />
              </button>
            </form>
          </div>

          {/* Sriramula Arun's Hack The Box Platform Badge & Identity Widget */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 glass border border-white/15 text-left space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3.5 pb-3 border-b border-purple-500/10">
                <div className="p-2.5 rounded-xl bg-red-500/5 border border-red-500/15">
                  <Skull size={18} className="text-red-400 animate-bounce" />
                </div>
                <div>
                  <h3 className="text-sm font-mono font-bold text-white tracking-widest uppercase">
                    HACK THE BOX MATRIX
                  </h3>
                  <p className="text-[10px] font-mono text-purple-400">STATUS: AUDITING SYSTEM NODES</p>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Hack The Box serves as my active cybersecurityproving ground. I continuously exploit machines, reverse binaries, auditing firewalls, and hardening endpoints to reinforce defensive paradigms.
              </p>

              {/* Simulated HTB Stats Plate */}
              <div className="bg-[#050311] border border-red-500/15 p-4 rounded-xl space-y-3.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-red-400 font-bold uppercase tracking-wider">HACKER PROFILE</span>
                  <Award size={14} className="text-yellow-500 animate-pulse" />
                </div>
                
                <div className="grid grid-cols-2 gap-3.5 font-mono text-[10px]">
                  <div className="bg-slate-950 p-2.5 rounded-lg border border-red-500/5">
                    <span className="text-slate-500 uppercase block">codename</span>
                    <span className="text-white font-bold text-xs">sriramulaarun</span>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-lg border border-red-500/5">
                    <span className="text-slate-500 uppercase block">verification</span>
                    <span className="text-emerald-400 font-bold text-xs">RESOLVED</span>
                  </div>
                </div>

                {/* Progress parameters */}
                <div className="space-y-2 pt-1">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-slate-400">Ethical Audit Quotient</span>
                    <span className="text-[#a855f7] font-bold">85%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-500 via-red-500 to-purple-600 rounded-full" style={{ width: "85%" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Launch HTB Direct button */}
            <a
              href={PERSONAL_INFO.hackthebox}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-3 rounded-xl glass hover:bg-white/10 text-white border border-white/10 font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 text-center flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Skull size={15} />
              <span>Verify Hack The Box Account</span>
            </a>
          </div>
        </div>

        {/* Clickable Terminal Preset Prompt Labels */}
        <div className="mt-8 flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto">
          <span className="font-mono text-slate-500 text-[10px] sm:text-xs py-1 px-2 flex items-center select-none leading-normal">
            DIRECTIVES PRESETS:
          </span>
          {commandPresets.map((preset) => (
            <button
              key={preset}
              onClick={() => handleCommand(preset)}
              className="px-3.5 py-1.5 rounded-xl glass border border-white/10 text-[10px] sm:text-xs font-mono text-slate-300 hover:text-white cursor-pointer transition-all duration-300 uppercase tracking-wider shadow-sm"
              disabled={isAuditing}
            >
              $ {preset}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
