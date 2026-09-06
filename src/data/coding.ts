export interface CodingProfile {
  platform: string;
  badge: string;
  metric: string;
  metricLabel: string;
  progressPercent: number;
  color: string;
  profileUrl: string;
  description: string;
  icon: string;
}

export const codingData: CodingProfile[] = [
  {
    platform: "LEETCODE",
    badge: "Active Solver",
    metric: "150+ SOLVED",
    metricLabel: "Problems Cleared",
    progressPercent: 75,
    color: "#f59e0b",
    profileUrl: "https://leetcode.com",
    description: "Consistent practice across Arrays, Strings, Two Pointers, Dynamic Programming, Trees, and Hash Tables.",
    icon: "Code2"
  },
  {
    platform: "SKILL RACK",
    badge: "Centurion Solver",
    metric: "1000+ SOLVED",
    metricLabel: "Challenges Mastered",
    progressPercent: 95,
    color: "#10b981",
    profileUrl: "https://www.skillrack.com",
    description: "Extensive competitive milestone with over 1000 problems cleared in algorithmic problem solving and speed logic.",
    icon: "Terminal"
  },
  {
    platform: "HACKERRANK",
    badge: "Bronze Badge",
    metric: "C PROGRAMMING",
    metricLabel: "Language Proficiency",
    progressPercent: 70,
    color: "#06b6d4",
    profileUrl: "https://www.hackerrank.com",
    description: "Verified bronze rating in C programming, demonstrating core competency in pointers, structs, and recursion.",
    icon: "Shield"
  }
];
