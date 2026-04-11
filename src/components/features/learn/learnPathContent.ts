export type LessonStatus = "locked" | "in_progress" | "completed";

export type LessonDifficulty = "beginner" | "intermediate" | "advanced";

/** Aligns with `design-system.pen` → frame “P0 / Core / Learning Path” (`lessonList`). */
export type LearnLesson = {
  id: string;
  title: string;
  challengesTotal: number;
  challengesCompleted: number;
  xp: number;
  status: LessonStatus;
  difficulty: LessonDifficulty;
};

export const LEARN_LESSONS: LearnLesson[] = [
  {
    id: "l1",
    title: "Lesson 1: Promise Fundamentals",
    challengesTotal: 6,
    challengesCompleted: 6,
    xp: 180,
    status: "completed",
    difficulty: "beginner",
  },
  {
    id: "l2",
    title: "Lesson 2: .then() & .catch() Chaining",
    challengesTotal: 6,
    challengesCompleted: 3,
    xp: 240,
    status: "in_progress",
    difficulty: "intermediate",
  },
  {
    id: "l3",
    title: "Lesson 3: Promise.all & Promise.race",
    challengesTotal: 6,
    challengesCompleted: 0,
    xp: 300,
    status: "locked",
    difficulty: "advanced",
  },
  {
    id: "l4",
    title: "Lesson 4: async/await",
    challengesTotal: 6,
    challengesCompleted: 0,
    xp: 360,
    status: "locked",
    difficulty: "advanced",
  },
  {
    id: "l5",
    title: "Lesson 5: Error Handling Patterns",
    challengesTotal: 6,
    challengesCompleted: 0,
    xp: 420,
    status: "locked",
    difficulty: "advanced",
  },
  {
    id: "l6",
    title: "Lesson 6: Real-world Patterns",
    challengesTotal: 6,
    challengesCompleted: 0,
    xp: 480,
    status: "locked",
    difficulty: "advanced",
  },
];

export function getLearnPathChallengeSummary(lessons: LearnLesson[]): {
  completedChallenges: number;
  totalChallenges: number;
  percent: number;
} {
  const totalChallenges = lessons.reduce((s, l) => s + l.challengesTotal, 0);
  const completedChallenges = lessons.reduce(
    (s, l) => s + Math.min(l.challengesCompleted, l.challengesTotal),
    0,
  );
  const percent = totalChallenges
    ? Math.round((completedChallenges / totalChallenges) * 100)
    : 0;
  return { completedChallenges, totalChallenges, percent };
}

export function getLessonMetaLine(lesson: LearnLesson): string {
  const n = lesson.challengesTotal;
  const parts = [`${n} challenges`, `${lesson.xp} XP`];
  if (lesson.status === "completed") {
    parts.push("Completed");
  } else if (lesson.status === "in_progress") {
    parts.push("In Progress");
  } else {
    parts.push("Locked");
  }
  return parts.join(" · ");
}
