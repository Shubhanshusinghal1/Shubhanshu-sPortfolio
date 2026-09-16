export const METADATA = {
  author: "Shubhanshu Singhal",
  title: "Portfolio | Shubahnshu Singhal",
  description:
    "Shubhanshu Singhal is a Software Developer specializing in secure, scalable backend systems and full-stack web applications built with Node.js, Next.js, and MongoDB.",
  keywords: [
    "Shubahnshu Singhal",
    "Product Engineer",
    "Frontend Engineer",
    "Full Stack Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Code. Create. Innovate.",
  "Turning ideas into interactive web applications.",
  "Building modern, interactive web experiences.",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:Shubhanshusinghal77@gmial.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/shubhanshu-singhal-11bb0a291/",
  },
  {
    name: "github",
    url: "https://github.com/Shubhanshusinghal1",
  }
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "python",
    "cpp",
    "nodejs",
    "reactnative"
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "express",
    "RESTAPI",
    "fastapi",
    "prisma"
  ],
    aiAndLlms: [
    "openai",
    "gemini",
    "langchain",
    "huggingface",
    "vectorEmbeddings",
    "ollama"
  ],

  databases: [
  {
    name: "MongoDB",
    icon: "mongodb",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
  },
  {
    name: "MySQL",
    icon: "mysql",
  },
  {
    name: "Supabase",
    icon: "supabase",
  },
  {
    name: "ChromaDB",
    icon: "chromadb",
  },
],
  other: ["git", "github", "docker", "netlify", "vercel", "figma", "postman", "jira", "androidstudio"],
};

export const PROJECTS = [

  {
    name: "Finlytics",
    imageKey: "finlytics",
    description: "Track, Analyze, and Optimize Your Finances with AI 💰",
    gradient: ["#0F0C29", "#302B63"], // warm gold to fresh green
    url: "https://finlytics-xi.vercel.app/",
    tech: ["typescript", "react"]
  },
  {
    name: "Annovo",
    imageKey: "annovo",
    description: "Say What Matters, Anonymously 💬",
  gradient: ["#ffffff", "#f0f0f0"] , // dark brown to medium brown
    url: "https://anonovo2.vercel.app/",
    tech: [ "react"],
  },


];

export const WORK_CONTENTS = {
  KAABIL_FINANCE: [
    {
      title: "Kaabil Finance Pvt Ltd.",
      description:
        "I work as a Software Developer building fintech infrastructure — bulk payment gateways, encrypted bank integrations, and internal HR/IT platforms — on a Node.js, Express.js, and MongoDB stack.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Jaipur · Jan 2026 – Present
        </div>
      ),
    },
    {
      title: "Bulk Payment Gateway",
      description:
        "Integrated AU Small Finance Bank's CNB Payout REST API to orchestrate NEFT, RTGS, IMPS, and Internal Fund Transfer disbursements across batches of up to 500 transactions, secured via AES-256-CBC/PBKDF2 encryption and OAuth 2.0 client-credentials token caching, with a dual-collection schema for per-transaction fault isolation and bank reconciliation.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Node.js · Express.js · MongoDB
        </div>
      ),
    },
    {
      title: "HR & IT Platforms",
      description:
        "Architected three interconnected platforms secured by JWT with DB-revocable sessions and AES-encrypted payloads — an IT Support & Ticket Management System (extended to a React Native mobile app), an HR Announcement System with WhatsApp broadcast delivery, and an OTP-verified Policy Acknowledgement System.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          JWT · React Native · WhatsApp API
        </div>
      ),
    },
    {
      title: "IDFC FIRST Bank BBPS Integration",
      description:
        "Built Bill Fetch, Bill Validation, and Bill Payment REST APIs secured with a bank-isolated AES-256 encrypted protocol and idempotent payment processing to eliminate duplicate-transaction risk, certified through live UAT with the bank's implementation team.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          REST APIs · AES-256 · UAT Certified
        </div>
      ),
    },
    {
      title: "K-Memo & Employee Exit",
      description:
        "Engineered a memo and approval platform with a maker-checker resignation workflow, role-based notice-period calculation, and collision-safe ID generation — extended into a self-referential branch-hierarchy Employee Exit module with on-demand reporting.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Maker-Checker · Audit Trail
        </div>
      ),
    },
    {
      title: "Real-Time Sync",
      description:
        "Implemented WebSocket-based real-time synchronization with intelligent local storage caching of critical app settings, reducing redundant API calls and significantly improving responsiveness across both web and mobile platforms.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          WebSockets · Local Storage Cache
        </div>
      ),
    },
  ],
  GECS_LABS: [
    {
      title: "GECS Labs Limited.",
      description:
        "GECS Labs is a UK-registered technology and media company operating Orla3, an AI-driven booking and escrow platform connecting clients with vetted videographers across the UK, integrating AI and blockchain into media technologies.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Building AI-driven media technology
        </div>
      ),
    },
    {
      title: "Product Development",
      description:
        "Built and scaled applications using the MERN stack, Next.js, and Firebase, managing end-to-end software infrastructure. Developed key features like video search with location mapping and optimized sorting, improving load time.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          MERN · Next.js · Firebase
        </div>
      ),
    },
    {
      title: "Collaboration",
      description:
        "Conducted GitHub code reviews to ensure code quality and drove system reliability through continuous improvements, managing workflows and sprints via Jira.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Scotland, United Kingdom · Oct – Dec 2025
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
