import type { Meta, StoryObj } from "@storybook/react-vite";
import type { PlTabBarProps } from "./PlTabBar";
import { PlTabBar } from "./PlTabBar";

const meta = {
  title: "Common/PlTabBar",
  component: PlTabBar,
  render: (args: PlTabBarProps) => <PlTabBar {...args} />,
  argTypes: {
    activeIndex: { control: "number" },
    tabs: { control: "object" },
  },
} satisfies Meta<PlTabBarProps>;

export default meta;
type Story = StoryObj<PlTabBarProps>;

export const Default: Story = {
  args: { tabs: ["Instructions", "Hints", "Solution"], activeIndex: 0 },
};

export const HintsActive: Story = {
  args: { tabs: ["Instructions", "Hints", "Solution"], activeIndex: 1 },
};
