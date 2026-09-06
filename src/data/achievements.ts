export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  completed: boolean;
  iconName: string;
  badgeType: 'Challenge' | 'Advancement' | 'Goal';
}

export const achievementsData: AchievementItem[] = [
  {
    id: "gen-ai-hackathon",
    title: "Gen AI Hackathon",
    subtitle: "Intercollege Hackathon Finalist",
    category: "Hackathon",
    year: "2025",
    description: "Reached the grand finals of an intensive intercollege generative AI hackathon, competing against top university teams with innovative AI agent architectures.",
    completed: true,
    iconName: "Zap",
    badgeType: "Advancement"
  },
  {
    id: "agentverse-hackathon",
    title: "Agentverse Hackathon",
    subtitle: "Intercollege Hackathon Finalist",
    category: "Hackathon",
    year: "2026",
    description: "Named finalist in an autonomous agent hackathon, demonstrating multi-agent orchestration, state persistence, and real-time execution capabilities.",
    completed: true,
    iconName: "Sparkles",
    badgeType: "Advancement"
  },
  {
    id: "leetcode-150",
    title: "150+ Problems",
    subtitle: "LeetCode Solved 150+ problems",
    category: "Problem Solving",
    year: "Active",
    description: "Consistent algorithmic combat tackling arrays, trees, dynamic programming, two pointers, and graph traversals on LeetCode.",
    completed: true,
    iconName: "Code",
    badgeType: "Challenge"
  },
  {
    id: "skillrack-1000",
    title: "1000+ Problems",
    subtitle: "Skill Rack Solved 1000+ problems",
    category: "Competitive Coding",
    year: "Active",
    description: "Crossed a milestone of over 1,000 algorithmic problems solved on Skill Rack across diverse data structures and competitive programming patterns.",
    completed: true,
    iconName: "Trophy",
    badgeType: "Challenge"
  },
  {
    id: "hackerrank-bronze",
    title: "Bronze Coder",
    subtitle: "HackerRank Bronze badge for C",
    category: "Language Mastery",
    year: "Achieved",
    description: "Awarded HackerRank Bronze badge for demonstrated proficiency in C programming, pointer arithmetic, and algorithmic logic.",
    completed: true,
    iconName: "Award",
    badgeType: "Goal"
  }
];
