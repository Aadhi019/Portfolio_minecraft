export interface PlayerProfileData {
  name: string;
  tagline: string;
  shortTagline: string;
  role: string;
  specialization: string;
  location: string;
  level: number;
  xpPoints: number;
  bio: string;
  combatStats: {
    label: string;
    value: number;
    max: number;
    category: string;
  }[];
  equipment: {
    slot: 'Helmet' | 'Chestplate' | 'Leggings' | 'Boots' | 'Mainhand' | 'Offhand';
    name: string;
    rarity: 'Rare' | 'Epic' | 'Legendary';
    description: string;
  }[];
}

export const profileData: PlayerProfileData = {
  name: "Bala Aadhityaa K",
  tagline: "Building intelligent systems, real-world applications and connected experiences.",
  shortTagline: "Code. Build. Experiment. Repeat.",
  role: "AI / Full-Stack Developer",
  specialization: "AI • Web Development • IoT",
  location: "Coimbatore, Tamil Nadu, India",
  level: 30,
  xpPoints: 95,
  bio: "Computer Science student and builder focused on developing AI-powered applications, real-time IoT systems and practical software products.",
  combatStats: [
    { label: "AI & LangGraph Agents", value: 88, max: 100, category: "AI / ML" },
    { label: "Full-Stack Web Dev", value: 85, max: 100, category: "Web" },
    { label: "IoT & Hardware (ESP32)", value: 82, max: 100, category: "IoT" },
    { label: "Problem Solving", value: 92, max: 100, category: "Logic" },
    { label: "Database Architecture", value: 80, max: 100, category: "Data" },
    { label: "Real-Time Telemetry", value: 84, max: 100, category: "Systems" }
  ],
  equipment: [
    {
      slot: "Helmet",
      name: "Neural Crown of Agents",
      rarity: "Legendary",
      description: "Infused with LangGraph multi-agent cognitive orchestration and generative intelligence."
    },
    {
      slot: "Chestplate",
      name: "Vite & React Carapace",
      rarity: "Epic",
      description: "Forged with responsive UI architecture, reactive state, and modern CSS crafting."
    },
    {
      slot: "Leggings",
      name: "ESP32 Sensor Greaves",
      rarity: "Epic",
      description: "Hardened against physical impacts with 6-axis MPU6050 fall detection telemetry."
    },
    {
      slot: "Boots",
      name: "Agile Hackathon Striders",
      rarity: "Rare",
      description: "Provides +50 sprint speed during 24-48hr hackathon sprints and live code demos."
    },
    {
      slot: "Mainhand",
      name: "Enchanted Sword of C++ & Python",
      rarity: "Legendary",
      description: "Sharpened across 1000+ Skill Rack challenges and 150+ LeetCode algorithmic battles."
    },
    {
      slot: "Offhand",
      name: "Totem of Continuous Integration",
      rarity: "Rare",
      description: "Prevents fatal production bugs through strict typing, OOP principles, and clean modular code."
    }
  ]
};
