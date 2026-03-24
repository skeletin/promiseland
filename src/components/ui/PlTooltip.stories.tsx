import type { Meta, StoryObj } from "@storybook/react-vite";
import type { PlTooltipProps } from "./PlTooltip";
import { PlTooltip } from "./PlTooltip";

const meta = {
  title: "UI/PlTooltip",
  component: PlTooltip,
  render: (args: PlTooltipProps) => <PlTooltip>{args.children}</PlTooltip>,
} satisfies Meta<PlTooltipProps>;

export default meta;
type Story = StoryObj<PlTooltipProps>;

export const Default: Story = {
  args: {
    children: "Complete Lesson 2 to unlock",
  },
};
