import type { Meta, StoryObj } from "@storybook/react-vite";
import Onboarding from "./Onboarding";

const meta = {
  title: "Features/Onboarding",
  component: Onboarding,
  /** Full-bleed canvas for page-like features (see `.storybook/preview.tsx` decorator). */
  parameters: {
    layout: "fullscreen",
  },
  render: () => <Onboarding />,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const ExperienceSelection: Story = {};
