import type { Meta, StoryObj } from "@storybook/react-vite";
import type { PlBadgeProps } from "./PlBadge";
import { PlBadge } from "./PlBadge";

type StoryProps = PlBadgeProps;

const meta = {
  title: "UI/PlBadge",
  component: PlBadge,
  render: (args) => <PlBadge {...args} />,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "beginner",
        "intermediate",
        "advanced",
        "not started",
        "in progress",
        "completed",
        "locked",
        "xp",
      ],
    },
  },
} satisfies Meta<StoryProps>;

export default meta;
type Story = StoryObj<StoryProps>;

export const Beginner: Story = {
  args: { variant: "beginner" },
};
export const Intermediate: Story = {
  args: { variant: "intermediate" },
};
export const Advanced: Story = {
  args: { variant: "advanced" },
};
export const NotStarted: Story = {
  args: { variant: "not started" },
};
export const InProgress: Story = {
  args: { variant: "in progress" },
};
export const Completed: Story = {
  args: { variant: "completed" },
};
export const XP: Story = {
  args: { variant: "xp", xpAmount: 50 },
};
export const Locked: Story = {
  args: { variant: "locked" },
};
