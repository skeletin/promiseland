import type { PlChallengeCardProps } from "../../common/PlChallengeCard";

export function getTimeGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

export type DashboardStatItem = {
  label: string;
  value: string;
  valueTone?: "default" | "warn" | "primary";
};

export const DASHBOARD_STATS: readonly DashboardStatItem[] = [
  { label: "Total XP", value: "1,240", valueTone: "default" },
  { label: "Challenges Done", value: "12 / 36", valueTone: "default" },
  { label: "Current Streak", value: "7 days", valueTone: "warn" },
  { label: "Global Rank", value: "#42", valueTone: "primary" },
];

export type ContinueProgress = {
  eyebrow: string;
  title: string;
  progressPercent: number;
};

export const DASHBOARD_CONTINUE: ContinueProgress = {
  eyebrow: "Continue where you left off",
  title: ".then() & .catch() Chaining — Challenge 4",
  progressPercent: 50,
};

export const DASHBOARD_RECOMMENDED: readonly PlChallengeCardProps[] = [
  {
    title: "Promise basics — Challenge 2",
    difficulty: "beginner",
    xp: 120,
    progress: 0,
    status: "not started",
    attempts: 0,
  },
  {
    title: "Async error boundaries",
    difficulty: "intermediate",
    xp: 200,
    progress: 62,
    status: "in progress",
    attempts: 3,
  },
  {
    title: "Fetch + retry patterns",
    difficulty: "advanced",
    xp: 280,
    progress: 100,
    status: "completed",
    attempts: 5,
  },
];
