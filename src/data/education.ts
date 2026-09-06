export interface EducationMilestone {
  id: string;
  period: string;
  degree: string;
  institution: string;
  score: string;
  scoreType: string;
  description: string;
  craftingRecipe: {
    slot1: { name: string; icon: string; tooltip: string };
    slot2: { name: string; icon: string; tooltip: string };
    slot3: { name: string; icon: string; tooltip: string };
    result: { name: string; icon: string; rarity: string };
  };
  highlights: string[];
}

export const educationData: EducationMilestone[] = [
  {
    id: "btech",
    period: "2025 — 2028",
    degree: "B.Tech CSBS",
    institution: "Sri Eshwar College of Engineering",
    score: "7.08%",
    scoreType: "CGPA / Percentage",
    description: "Bachelor of Technology in Computer Science & Business Systems. Focused on core computer science foundations, AI agents, IoT systems, full-stack development, and enterprise applications.",
    craftingRecipe: {
      slot1: { name: "Book & Quill", icon: "BookOpen", tooltip: "CSBS Core Curriculum & Business Systems" },
      slot2: { name: "Redstone Dust", icon: "Zap", tooltip: "AI Agent Orchestration & IoT Hardware" },
      slot3: { name: "Diamond Ingot", icon: "Gem", tooltip: "Sri Eshwar College of Engineering" },
      result: { name: "B.Tech CSBS", icon: "GraduationCap", rarity: "Legendary" }
    },
    highlights: [
      "Specializing in AI-driven multi-agent workflows and real-time embedded systems",
      "Intercollegiate hackathon finalist representing the institution",
      "Active competitive coder on LeetCode and Skill Rack"
    ]
  },
  {
    id: "diploma",
    period: "2022 — 2025",
    degree: "DIPLOMA",
    institution: "Nachimuthu Polytechnic College",
    score: "80.5%",
    scoreType: "Percentage",
    description: "Diploma in Engineering. Built intensive hands-on mastery in programming basics, C/C++, electrical systems, hardware interfacing, and structured software development.",
    craftingRecipe: {
      slot1: { name: "Iron Ingot", icon: "Shield", tooltip: "Practical Engineering Fundamentals" },
      slot2: { name: "Compass", icon: "Compass", tooltip: "Nachimuthu Polytechnic Technical Focus" },
      slot3: { name: "Redstone Repeater", icon: "Repeat", tooltip: "Hands-on Lab Experiments & Systems" },
      result: { name: "Diploma (80.5%)", icon: "Award", rarity: "Epic" }
    },
    highlights: [
      "Graduated with distinction: 80.5% aggregate",
      "Solidified C and C++ programming fundamentals with low-level memory control",
      "Conducted multiple hardware lab projects and microcontroller prototyping"
    ]
  },
  {
    id: "sslc",
    period: "2021 — 2022",
    degree: "SSLC",
    institution: "Government Boys Higher Secondary School",
    score: "71.2%",
    scoreType: "Percentage",
    description: "Secondary School Leaving Certificate. Strong analytical foundation in mathematics, science, logical reasoning, and computer basics.",
    craftingRecipe: {
      slot1: { name: "Paper Scroll", icon: "Scroll", tooltip: "Secondary School Foundation" },
      slot2: { name: "Feather", icon: "Feather", tooltip: "Govt Boys Higher Secondary School" },
      slot3: { name: "Ink Sac", icon: "PenTool", tooltip: "State Board Examination" },
      result: { name: "SSLC (71.2%)", icon: "CheckCircle", rarity: "Rare" }
    },
    highlights: [
      "Achieved 71.2% in State Board Examinations",
      "Developed a passion for computing, electronics, and problem solving"
    ]
  }
];
