import type { Meta, StoryObj } from "@storybook/react-vite";
import type { PlSubmissionBannerProps } from "./PlSubmissionBanner";
import { PlSubmissionBanner } from "./PlSubmissionBanner";

const meta = {
  title: "Common/PlSubmissionBanner",
  component: PlSubmissionBanner,
  render: (args: PlSubmissionBannerProps) => <PlSubmissionBanner {...args} />,
  argTypes: {
    status: {
      control: { type: "select" },
      options: ["pending", "passed", "failed"],
    },
  },
} satisfies Meta<PlSubmissionBannerProps>;

export default meta;
type Story = StoryObj<PlSubmissionBannerProps>;

export const Pending: Story = { args: { status: "pending" } };
export const Passed: Story = { args: { status: "passed" } };
export const Failed: Story = { args: { status: "failed" } };
