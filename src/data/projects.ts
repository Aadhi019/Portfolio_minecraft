export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  category: 'AI Application' | 'IoT / Real-Time System';
  description: string;
  stack: string[];
  technologies: string[];
  hardware?: string;
  communication?: string;
  frontend?: string;
  programming?: string;
  architecture: {
    type: string;
    flow: { title: string; desc: string; icon: string }[];
  };
  problem: string;
  solution: string;
  features: string[];
  githubUrl: string;
  demoUrl: string;
  accentColor: string;
  chestIcon: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "lifeos",
    title: "LifeOS",
    subtitle: "Personal Chief of Staff",
    type: "AI Application",
    category: "AI Application",
    description: "AI-powered travel planning and personal coordination application using LangGraph to orchestrate specialized backend agents.",
    stack: ["React", "Vite", "Tailwind CSS", "LangGraph", "Python", "Google APIs"],
    technologies: ["React", "Vite", "Tailwind CSS", "LangGraph", "Python", "Google APIs", "Google Calendar", "Gmail API"],
    architecture: {
      type: "Multi-Agent System",
      flow: [
        {
          title: "User Intent Input",
          desc: "Natural language travel goals, dates, and budget limits entered by user",
          icon: "MessageSquare"
        },
        {
          title: "LangGraph Supervisor",
          desc: "Orchestrates sub-agent state transitions, checkpoints, and routing graph",
          icon: "Cpu"
        },
        {
          title: "Specialized Agents",
          desc: "Travel & Flight Agent • Hotel & Budget Agent • Safety Analyzer • Conflict Resolver",
          icon: "Users"
        },
        {
          title: "Persistent State Memory",
          desc: "Context store maintaining traveller preferences and past interaction states",
          icon: "Database"
        },
        {
          title: "Google Workspace Sync",
          desc: "Automated Gmail itinerary drafts and direct Google Calendar conflict-free booking",
          icon: "Calendar"
        }
      ]
    },
    problem: "Travel planning and schedule management currently force users into fragmented tabs, tedious manual price cross-referencing, unexpected calendar overlap conflicts, and disjointed email booking confirmations with zero unified safety or budget oversight.",
    solution: "LifeOS acts as an autonomous Personal Chief of Staff. Powered by LangGraph's multi-agent graph orchestration, it decomposes complex travel requirements into distinct sub-tasks handled in parallel by specialized agents, verifying budget constraints, inspecting real-time safety advisories, resolving calendar conflicts, and persisting memory across interactions.",
    features: [
      "AI Travel Planning: Multi-day custom itinerary synthesis based on preferences",
      "Flight Booking Assistance: Route optimization and scheduling options",
      "Hotel Selection: Curated accommodations filtered by price and proximity",
      "Budget Tracking: Real-time cost estimation and granular budget caps",
      "Safety Analysis: Automated destination safety metrics and travel advisories",
      "Calendar Conflict Resolution: Instant scan of personal events to prevent overlaps",
      "Persistent User Memory: Remembers past habits, seat preferences, and dietary restrictions",
      "Google Calendar Integration: Seamless two-way calendar sync for booked schedules",
      "Gmail Integration: Automated draft generation for reservation confirmations",
      "Itinerary Scheduling: Dynamic daily timeline with activity coordinates",
      "Email Drafting: Instant exportable summaries for companions or business teams",
      "Live Progress Tracking: Visual agent deliberation status and workflow logs",
      "Budget Controls: Configurable threshold alerts before committing decisions",
      "Travel Filters: Filter by duration, budget tiers, safety thresholds, and pacing"
    ],
    githubUrl: "https://github.com/Aadhi019/LifeOS",
    demoUrl: "#",
    accentColor: "#a855f7",
    chestIcon: "BookOpen"
  },
  {
    id: "fallguard",
    title: "FallGuard",
    subtitle: "Real-Time IoT Fall Detection System",
    type: "IoT / Real-Time System",
    category: "IoT / Real-Time System",
    description: "IoT wearable system using ESP32 and a 6-axis IMU sensor for real-time fall detection with a 4-stage confirmation algorithm.",
    stack: ["ESP32", "C++", "MPU6050", "Node.js", "WebSockets", "React", "Flutter", "Wokwi"],
    technologies: ["ESP32", "C++", "MPU6050", "Node.js", "WebSockets", "React", "Flutter", "Wokwi"],
    hardware: "ESP32 + MPU6050 (6-Axis IMU)",
    communication: "WebSockets (10 Hz data streaming)",
    frontend: "React Dashboard + Flutter Mobile App",
    programming: "C++ (Firmware) + Node.js (Gateway)",
    architecture: {
      type: "Hardware-to-Cloud Real-Time Pipeline",
      flow: [
        {
          title: "MPU6050 6-Axis IMU",
          desc: "Captures 3-axis accelerometer and 3-axis gyroscope raw motion vectors",
          icon: "Activity"
        },
        {
          title: "ESP32 Microcontroller",
          desc: "Runs high-frequency sensor reading and embedded digital filtering in C++",
          icon: "Cpu"
        },
        {
          title: "4-Stage Fall Algorithm",
          desc: "Free-fall check → Impact spike detection → Orientation change → Post-fall inactivity",
          icon: "ShieldAlert"
        },
        {
          title: "WebSocket Server (10 Hz)",
          desc: "Ultra-low latency bidirectional telemetry streaming via Node.js gateway",
          icon: "Wifi"
        },
        {
          title: "React Web & Flutter App",
          desc: "Live telemetry HUD displaying pitch, roll, acceleration curves and instant alerts",
          icon: "Smartphone"
        },
        {
          title: "Emergency Alerting",
          desc: "Triggers loud acoustic buzzer, caregiver notifications, and distress beacons",
          icon: "BellRing"
        }
      ]
    },
    problem: "Elderly individuals and solitary industrial workers face critical health risks when unexpected falls occur without witnesses. Traditional panic buttons require manual user activation (often impossible during injury or unconsciousness), while rudimentary single-threshold detectors trigger intolerable false alarms during ordinary sitting or running.",
    solution: "FallGuard deploys a wearable ESP32 device paired with an MPU6050 6-axis inertial measurement unit. It uses a specialized 4-stage confirmation algorithm that analyzes free-fall weightlessness, impact acceleration threshold, body orientation alteration, and subsequent immobility, streaming 10 Hz telemetry over WebSockets to both a React dashboard and Flutter mobile app with zero false alarm overhead.",
    features: [
      "Real-Time Fall Detection: Autonomous impact detection without user intervention",
      "4-Stage Confirmation Algorithm: Rigorous multi-phase kinematic verification",
      "False Alarm Reduction: Discriminates deliberate lying down, sitting, or jogging",
      "Live Motion Telemetry: Continuous 3-axis acceleration and angular pitch/roll readouts",
      "10 Hz Data Streaming: High-frequency WebSocket communication for sub-100ms response",
      "WebSocket Gateway: Scalable event dispatching for multiple connected care stations",
      "React Dashboard: Comprehensive web monitoring center for clinicians and supervisors",
      "Flutter Mobile App: Push notifications and emergency distress sirens on mobile devices",
      "Emergency Alerting: Automated caregiver notifications with audible distress prompts",
      "Wokwi Hardware Simulation: Complete virtualized circuit testing and firmware benchmarking"
    ],
    githubUrl: "https://github.com/Aadhi019/FallGuard",
    demoUrl: "#",
    accentColor: "#06b6d4",
    chestIcon: "Activity"
  }
];
