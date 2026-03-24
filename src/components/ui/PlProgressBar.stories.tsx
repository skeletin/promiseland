import type { Meta, StoryObj } from "@storybook/react-vite";
import type { PlProgressBarProps } from "./PlProgressBar";
import { PlProgressBar } from "./PlProgressBar";

const meta = {
  title: "UI/PlProgressBar",
  component: PlProgressBar,
  render: (args: PlProgressBarProps) => <PlProgressBar {...args} />,
  argTypes: { progress: { control: { type: "range", min: 0, max: 100 } } },
} satisfies Meta<PlProgressBarProps>;

export default meta;
type Story = StoryObj<PlProgressBarProps>;

export const Default: Story = {
  args: { progress: 40 },
};
