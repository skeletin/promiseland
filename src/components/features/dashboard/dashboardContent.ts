import type { PlChallengeCardProps } from "../../common/PlChallengeCard";

export type DashboardStatItem = {
  label: string;
  valueTone?: "default" | "warn" | "primary";
};

export type ContinueProgress = {
  eyebrow: string;
  title: string;
  progressPercent: number;
};

export function getTimeGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

export const DASHBOARD_STATS: readonly DashboardStatItem[] = [
  { label: "Total XP", valueTone: "default" },
  { label: "Challenges Done", valueTone: "default" },
  { label: "Current Streak", valueTone: "warn" },
];

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
