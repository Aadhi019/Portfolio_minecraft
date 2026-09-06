export interface SkillItem {
  id: string;
  name: string;
  level: string; // Roman numeral, e.g. "V", "IV"
  powerLevel: number; // 0 - 100 for progress bar
  category: 'PROGRAMMING' | 'CORE' | 'WEB' | 'DATABASES' | 'TOOLS' | 'AI_ML';
  classification: string;
  enchantmentName: string;
  tooltipText: string;
}

export const skillsData: SkillItem[] = [
  // PROGRAMMING
  {
    id: "cpp",
    name: "C++",
    level: "V",
    powerLevel: 95,
    category: "PROGRAMMING",
    classification: "Developer Skill",
    enchantmentName: "Sharpness V",
    tooltipText: "High-performance systems programming. Core language for ESP32 firmware development, hardware drivers, and low-level algorithms in FallGuard."
  },
  {
    id: "c",
    name: "C",
    level: "V",
    powerLevel: 92,
    category: "PROGRAMMING",
    classification: "Developer Skill",
    enchantmentName: "Efficiency V",
    tooltipText: "Mastery of memory pointers, memory management, and structured coding. Recognized with HackerRank Bronze Badge."
  },
  {
    id: "python",
    name: "Python",
    level: "IV",
    powerLevel: 88,
    category: "PROGRAMMING",
    classification: "Developer Skill",
    enchantmentName: "Looting IV",
    tooltipText: "Primary backbone for AI and data services. Leveraged with LangGraph, Google API integrations, automation scripts, and ML prototyping."
  },
  {
    id: "java",
    name: "Java",
    level: "IV",
    powerLevel: 82,
    category: "PROGRAMMING",
    classification: "Developer Skill",
    enchantmentName: "Unbreaking IV",
    tooltipText: "Object-oriented software development, robust design patterns, and enterprise backend fundamentals."
  },

  // CORE
  {
    id: "oop",
    name: "OOP",
    level: "IV",
    powerLevel: 86,
    category: "CORE",
    classification: "Engineering Core",
    enchantmentName: "Protection IV",
    tooltipText: "Object-Oriented Programming principles: encapsulation, polymorphism, inheritance, and modular clean architecture across C++, Python, and Java."
  },
  {
    id: "dbms",
    name: "DBMS",
    level: "IV",
    powerLevel: 84,
    category: "CORE",
    classification: "Engineering Core",
    enchantmentName: "Fortune IV",
    tooltipText: "Database Management Systems: relational schema normalization, indexing, transaction integrity (ACID), and query optimization."
  },

  // WEB
  {
    id: "html",
    name: "HTML",
    level: "V",
    powerLevel: 94,
    category: "WEB",
    classification: "Frontend Craft",
    enchantmentName: "Feather Falling V",
    tooltipText: "Semantic HTML5, accessible screen reader layouts, responsive structuring, and modern web application scaffolding."
  },
  {
    id: "css",
    name: "CSS",
    level: "IV",
    powerLevel: 88,
    category: "WEB",
    classification: "Frontend Craft",
    enchantmentName: "Respiration IV",
    tooltipText: "Advanced styling, responsive Flexbox/Grid, transitions, custom animations, dark-mode themes, and voxel/pixel art interfaces."
  },
  {
    id: "javascript",
    name: "JavaScript",
    level: "IV",
    powerLevel: 89,
    category: "WEB",
    classification: "Developer Skill",
    enchantmentName: "Quick Charge IV",
    tooltipText: "Modern ES6+ asynchronous programming, Promises, DOM manipulation, WebSocket event listeners, and interactive UI logic."
  },

  // DATABASES
  {
    id: "mysql",
    name: "MySQL",
    level: "IV",
    powerLevel: 85,
    category: "DATABASES",
    classification: "Storage Enchantment",
    enchantmentName: "Infinity IV",
    tooltipText: "Relational database modeling, complex JOIN queries, structured tables, and data persistence for multi-tier web applications."
  },
  {
    id: "mongodb",
    name: "MongoDB",
    level: "IV",
    powerLevel: 82,
    category: "DATABASES",
    classification: "Storage Enchantment",
    enchantmentName: "Silk Touch IV",
    tooltipText: "NoSQL document storage, flexible JSON schemas, collection aggregation pipelines, and rapid application development."
  },

  // TOOLS
  {
    id: "github",
    name: "GitHub",
    level: "IV",
    powerLevel: 88,
    category: "TOOLS",
    classification: "Developer Armory",
    enchantmentName: "Loyalty IV",
    tooltipText: "Git version control, feature branches, pull requests, automated repository workflows, and open-source project management."
  },
  {
    id: "powerbi",
    name: "Power BI",
    level: "IV",
    powerLevel: 80,
    category: "TOOLS",
    classification: "Developer Armory",
    enchantmentName: "Piercing IV",
    tooltipText: "Business intelligence dashboards, KPI visualization, data transformations, and interactive analytical reporting."
  },
  {
    id: "excel",
    name: "Excel",
    level: "IV",
    powerLevel: 84,
    category: "TOOLS",
    classification: "Developer Armory",
    enchantmentName: "Smite IV",
    tooltipText: "Data structuring, mathematical formulas, pivot tables, statistical review, and spreadsheet management."
  },
  {
    id: "canva",
    name: "Canva",
    level: "IV",
    powerLevel: 86,
    category: "TOOLS",
    classification: "Developer Armory",
    enchantmentName: "Fire Aspect IV",
    tooltipText: "Visual design, presentation slide decks, UI mockups, hackathon pitch banners, and creative digital assets."
  },
  {
    id: "word",
    name: "Microsoft Word",
    level: "V",
    powerLevel: 90,
    category: "TOOLS",
    classification: "Developer Armory",
    enchantmentName: "Mending V",
    tooltipText: "Technical documentation, project engineering reports, academic writing, and publication formatting."
  },

  // AI / ML
  {
    id: "langgraph",
    name: "LangGraph",
    level: "IV",
    powerLevel: 92,
    category: "AI_ML",
    classification: "AI / Agent Development",
    enchantmentName: "Multishot IV",
    tooltipText: "Used in LifeOS to orchestrate specialized backend agents for travel planning, booking, budgeting, safety analysis, and calendar conflict resolution."
  },
  {
    id: "genai",
    name: "Generative AI",
    level: "IV",
    powerLevel: 89,
    category: "AI_ML",
    classification: "AI / Agent Development",
    enchantmentName: "Channeling IV",
    tooltipText: "LLM prompting, multi-agent reasoning loops, context augmentation, and autonomous workflow design. Certified by IBM."
  },
  {
    id: "ml",
    name: "Machine Learning",
    level: "IV",
    powerLevel: 85,
    category: "AI_ML",
    classification: "Intelligent Systems",
    enchantmentName: "Power IV",
    tooltipText: "Supervised and unsupervised learning, feature engineering, classification models, and predictive metrics. Certified by IIT Madras."
  },
  {
    id: "dl",
    name: "Deep Learning",
    level: "IV",
    powerLevel: 84,
    category: "AI_ML",
    classification: "Intelligent Systems",
    enchantmentName: "Blast Protection IV",
    tooltipText: "Neural network architectures, multi-layer perceptrons, backpropagation, and deep feature representations."
  },
  {
    id: "cv",
    name: "Computer Vision",
    level: "IV",
    powerLevel: 83,
    category: "AI_ML",
    classification: "Intelligent Systems",
    enchantmentName: "Night Vision IV",
    tooltipText: "Image processing, spatial filtering, object identification pipelines, and visual sensor analysis. Certified by IIT Madras."
  }
];
