import type { Meta, StoryObj } from "@storybook/react-vite";
import type { PlTestResultProps } from "./PlTestResult";
import { PlTestResult } from "./PlTestResult";

const meta = {
  title: "Common/PlTestResult",
  component: PlTestResult,
  render: (args: PlTestResultProps) => <PlTestResult {...args} />,
  argTypes: {
    status: { control: { type: "select" }, options: ["pass", "fail"] },
    durationMs: { control: "number" },
  },
} satisfies Meta<PlTestResultProps>;

export default meta;
type Story = StoryObj<PlTestResultProps>;

export const Pass: Story = {
  args: {
    status: "pass",
    label: "should resolve with correct data",
    durationMs: 12,
  },
};

export const Fail: Story = {
  args: {
    status: "fail",
    label: "should reject on network error",
    durationMs: 8,
  },
};
