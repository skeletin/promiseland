import type { Meta, StoryObj } from "@storybook/react-vite";
import type { PlLevelPillProps } from "./PlLevelPill";
import { PlLevelPill } from "./PlLevelPill";

const meta = {
  title: "UI/PlLevelPill",
  component: PlLevelPill,
  render: (args: PlLevelPillProps) => <PlLevelPill {...args} />,
} satisfies Meta<PlLevelPillProps>;

export default meta;
type Story = StoryObj<PlLevelPillProps>;

export const Default: Story = {
  args: { level: 4, xp: 1240 },
};
