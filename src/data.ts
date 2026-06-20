export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  liveUrl?: string;
  category: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  badgeType: "microsoft" | "ibm" | "walmart" | "cyber" | "ai" | "web";
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

export const PERSONAL_INFO = {
  name: "Sriramula Arun",
  roles: ["AI Developer", "Cybersecurity Enthusiast", "Full Stack Developer"],
  tagline: "Building AI Assistants, Community Platforms, and Cybersecurity Solutions.",
  description: "Passionate Computer Science student focused on Artificial Intelligence, Cybersecurity, and Software Development. Building impactful products and continuously learning through hands-on projects and practical experience.",
  email: "sriramulaarun249@gmail.com",
  phone: "8309174316",
  github: "https://github.com/sriramulaarun",
  linkedin: "https://www.linkedin.com/in/arun-sriramula-5a543023a",
  credly: "https://www.credly.com/users/sriramula-arun",
  hackthebox: "https://profile.hackthebox.com/profile/019e9bc5-1306-73e4-8557-4b81a930c9cf",
  instagram: "https://www.instagram.com/arun_sky_bound?igsh=MWFtbHZ5N2ViczF5ag=="
};

export const ORBIT_SKILLS = [
  { name: "Python", color: "from-blue-500 to-yellow-500" },
  { name: "Java", color: "from-orange-500 to-red-600" },
  { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
  { name: "React", color: "from-cyan-400 to-blue-500" },
  { name: "Flask", color: "from-emerald-400 to-zinc-600" },
  { name: "AI", color: "from-purple-500 to-pink-500" },
  { name: "Linux", color: "from-gray-300 to-gray-600" },
  { name: "Cybersecurity", color: "from-red-500 to-purple-600" },
  { name: "GitHub", color: "from-slate-600 to-slate-900" },
  { name: "Firebase", color: "from-amber-500 to-orange-600" }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "C", level: 80 },
      { name: "JavaScript", level: 85 }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "React", level: 85 }
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Flask", level: 80 },
      { name: "Firebase", level: 85 },
      { name: "SQLite", level: 80 }
    ]
  },
  {
    title: "Cybersecurity",
    skills: [
      { name: "Ethical Hacking", level: 85 },
      { name: "Linux Administration", level: 90 },
      { name: "Network Security", level: 80 },
      { name: "Hack The Box", level: 75 }
    ]
  },
  {
    title: "Artificial Intelligence",
    skills: [
      { name: "Generative AI", level: 90 },
      { name: "Prompt Engineering", level: 95 },
      { name: "AI Tools & Integration", level: 88 },
      { name: "ChatGPT Ecosystem", level: 92 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "mediahub-downloader",
    title: "MediaHub Downloader",
    description: "A high-performance media compilation and downloading platform designed to seamlessly query, fetch, and download rich media metadata and direct assets from online video feeds.",
    tech: ["Python", "Flask", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/sriramulaarun/mediahub-downloader.git",
    liveUrl: "https://skillful-happiness-production-cfee.up.railway.app",
    category: "Full Stack"
  },
  {
    id: "timetable",
    title: "College Timetable Management System",
    description: "Smart timetable generation platform for colleges with dedicated faculty, student, and admin modules to optimize scheduling and prevent slot clashes.",
    tech: ["Python", "Flask", "SQLite", "JavaScript"],
    category: "Full Stack"
  },
  {
    id: "community-hub",
    title: "Community Hub",
    description: "Student collaboration platform for networking, online discussions, educational resource sharing, and real-time project collaboration.",
    tech: ["React", "Firebase", "JavaScript"],
    github: "https://github.com/sriramulaarun/smart-city-app",
    category: "Full Stack"
  },
  {
    id: "max-ai",
    title: "Max AI (Jarvis)",
    description: "AI-powered virtual assistant with voice interaction, active AI conversations, operating system automation, and tailored productivity features.",
    tech: ["Python", "Flask", "AI APIs"],
    github: "https://github.com/sriramulaarun/max--jarvis",
    category: "AI"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Generative AI for Software Developers",
    issuer: "Microsoft",
    year: "2024",
    badgeType: "microsoft"
  },
  {
    title: "Introduction to Software Engineering",
    issuer: "IBM",
    year: "2023",
    badgeType: "ibm"
  },
  {
    title: "Introduction to Software, Programming and Databases",
    issuer: "IBM",
    year: "2023",
    badgeType: "ibm"
  },
  {
    title: "Advanced Software Engineering Job Simulation",
    issuer: "Walmart",
    year: "2024",
    badgeType: "walmart"
  },
  {
    title: "Cyber Defend Bootcamp",
    issuer: "Cybersecurity Hub",
    year: "2023",
    badgeType: "cyber"
  },
  {
    title: "Art of Hacking Workshop",
    issuer: "Defense Labs",
    year: "2023",
    badgeType: "cyber"
  },
  {
    title: "AI Tools Workshop",
    issuer: "Tech Accelerators",
    year: "2024",
    badgeType: "ai"
  },
  {
    title: "HTML & CSS Bootcamp",
    issuer: "WebDev Alliance",
    year: "2022",
    badgeType: "web"
  }
];

export const GITHUB_REPOS = [
  {
    name: "mediahub-downloader",
    stars: 15,
    forks: 6,
    description: "Fast, versatile video/audio downloader suite built with Flask for streamlined offline media aggregation.",
    languages: ["Python", "HTML", "JavaScript"],
    url: "https://github.com/sriramulaarun/mediahub-downloader.git"
  },
  {
    name: "smart-city-app",
    stars: 12,
    forks: 4,
    description: "Student collaboration platform featuring real-time communities, chats, and asset sharing boards.",
    languages: ["React", "Firebase", "CSS"],
    url: "https://github.com/sriramulaarun/smart-city-app"
  },
  {
    name: "max--jarvis",
    stars: 18,
    forks: 7,
    description: "An AI agent companion featuring speech processing, local tool automation, and deep LLM reasoning integrations.",
    languages: ["Python", "Flask", "Shell"],
    url: "https://github.com/sriramulaarun/max--jarvis"
  }
];
