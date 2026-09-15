export const METADATA = {
  author: "Shubhanshu Singhal",
  title: "Portfolio | Shubahnshu Singhal",
  description:
    "Shubahnshu Singhal  is a passionate software Engineer, dedicated to developing aesthetic and modern apps that captivate and engage users.",
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
    "nodejs"
  ],
  librariesAndFrameworks: [
    
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "express",
    "RESTAPI"
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
],
  other: ["git", "github", "docker","netlify", "vercel", "supabase","prisma"],
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
      title: "IT Support System",
      description:
        "Architected and shipped a production-grade IT Support & Ticket Management System, serving 1000+ employees with real-time issue reporting, ticket lifecycle management, and cross-departmental workflow tracking.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          SDE Intern
        </div>
      ),
    },
    {
      title: "Collaboration",
      description:
        "Collaborated within a team of 7 developers, conducting GitHub code reviews, enforcing code quality standards, and managing end-to-end development workflows across the full project lifecycle.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Scotland, United Kingdom · 2025
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
