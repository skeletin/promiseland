import type { Meta, StoryObj } from "@storybook/react-vite";
import Auth from "./Auth";

const meta = {
  title: "Features/Auth",
  component: Auth,
  /** Full-bleed canvas for page-like features (see `.storybook/preview.tsx` decorator). */
  parameters: {
    layout: "fullscreen",
  },
  render: () => <Auth />,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Login: Story = {};
export const SignUp: Story = {};
