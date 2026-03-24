import type { Meta, StoryObj } from "@storybook/react-vite";
import type { PlChallengeCardProps } from "./PlChallengeCard";
import { PlChallengeCard } from "./PlChallengeCard";

const meta = {
  title: "Common/PlChallengeCard",
  component: PlChallengeCard,
  render: (args: PlChallengeCardProps) => <PlChallengeCard {...args} />,
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
    xp: 0,
    progress: 100,
    status: "completed",
    attempts: 0,
  },
};

export const Locked: Story = {
  args: {
    title: "Thenables",
    difficulty: "beginner",
    xp: 0,
    progress: 0,
    status: "locked",
    attempts: 0,
  },
};

export const NotStarted: Story = {
  args: {
    title: "Catching Errors",
    difficulty: "beginner",
    xp: 0,
    progress: 0,
    status: "not started",
    attempts: 0,
  },
};
