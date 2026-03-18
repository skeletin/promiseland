import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "./pl-challenge-card";
import type { PlChallengeCardProps } from "./pl-challenge-card";

const meta = {
  title: "UI/PlChallengeCard",
  component: "pl-challenge-card",
  render: (args: PlChallengeCardProps) => html`
    <pl-challenge-card
      .title=${args.title}
      .difficulty=${args.difficulty}
      .xp=${args.xp}
      .progress=${args.progress}
      .status=${args.status}
      .attempts=${args.attempts}
    ></pl-challenge-card>
  `,
} satisfies Meta<PlChallengeCardProps>;

export default meta;
type Story = StoryObj<PlChallengeCardProps>;

export const InProgress: Story = {
  args: {
    title: "Basic Promise Chain",
    difficulty: "beginner",
    xp: 120,
    progress: 76,
    status: "in progress",
    attempts: 3,
  },
};

export const Completed: Story = {
  args: {
    title: "Error Handling Basics",
    difficulty: "intermediate",
    progress: 100,
    status: "completed",
  },
};

export const Locked: Story = {
  args: {
    title: "Thenables",
    difficulty: "beginner",
    progress: 0,
    status: "locked",
  },
};

export const NotStarted: Story = {
  args: {
    title: "Catching Errors",
    difficulty: "beginner",
    progress: 0,
    status: "not started",
  },
};
