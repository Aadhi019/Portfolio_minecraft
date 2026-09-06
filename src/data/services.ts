export interface VillagerTradeItem {
  id: string;
  name: string;
  subtitle: string;
  emeralds: number;
  stock: 'In stock' | 'High Demand' | 'Custom';
  description: string;
  technologies: string[];
  icon: string;
}

export const servicesData: VillagerTradeItem[] = [
  {
    id: "web-dev",
    name: "Web Development",
    subtitle: "Modern, responsive, high-performance web applications",
    emeralds: 16,
    stock: "In stock",
    description: "End-to-end full-stack web applications featuring clean component architecture, responsive layouts, pixel-perfect UX, and rapid state management.",
    technologies: ["React", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Vite"],
    icon: "Layout"
  },
  {
    id: "ai-apps",
    name: "AI Applications",
    subtitle: "Agentic AI workflows & LLM-driven software",
    emeralds: 28,
    stock: "In stock",
    description: "Intelligent multi-agent systems and cognitive architectures leveraging LangGraph, Python, prompt engineering, and context-augmented autonomous agents.",
    technologies: ["Python", "LangGraph", "Generative AI", "Multi-Agent Systems"],
    icon: "Bot"
  },
  {
    id: "iot-systems",
    name: "IoT Systems",
    subtitle: "Connected hardware & real-time telemetry streaming",
    emeralds: 24,
    stock: "In stock",
    description: "Wearable and industrial IoT hardware systems built with ESP32 microcontrollers, IMU sensor processing (MPU6050), and low-latency WebSocket communication.",
    technologies: ["ESP32", "C++", "MPU6050", "WebSockets", "Wokwi"],
    icon: "Cpu"
  },
  {
    id: "dashboards",
    name: "Dashboards",
    subtitle: "Interactive telemetry & data analytics hubs",
    emeralds: 20,
    stock: "In stock",
    description: "Real-time monitoring dashboards, business intelligence reporting, and live data telemetry portals built for operations and diagnostic analytics.",
    technologies: ["React", "Node.js", "Power BI", "WebSockets"],
    icon: "BarChart3"
  },
  {
    id: "automation",
    name: "Automation",
    subtitle: "API-driven integrations & background workflows",
    emeralds: 18,
    stock: "Custom",
    description: "Automated pipelines connecting Google Workspace (Gmail, Google Calendar), backend triggers, data parsing, and autonomous scheduling tasks.",
    technologies: ["Python", "Google APIs", "LangGraph", "REST APIs"],
    icon: "Workflow"
  }
];

export const builderStats = {
  rank: "Master Builder • Level 5",
  builds: "10+ Builds",
  problems: "1150+ Solved",
  academic: "7.08% CGPA"
};
