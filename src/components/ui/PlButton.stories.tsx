import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { PlButton, type PlButtonProps } from "./PlButton";

type StoryProps = PlButtonProps & {
  buttonText: string;
};

const meta = {
  title: "UI/PlButton",
  component: PlButton,
  render: ({ buttonText, ...args }) => (
    <PlButton {...args}>{buttonText}</PlButton>
  ),
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md"],
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "ghost", "danger"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    buttonText: {
      control: { type: "text" },
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<StoryProps>;

export default meta;
type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    size: "sm",
    variant: "primary",
    disabled: false,
    buttonText: "Button",
  },
};

export const Secondary: Story = {
  args: {
    size: "sm",
    variant: "secondary",
    disabled: false,
    buttonText: "Button",
  },
};

export const Ghost: Story = {
  args: {
    size: "sm",
    variant: "ghost",
    disabled: false,
    buttonText: "Button",
  },
};

export const Danger: Story = {
  args: {
    size: "sm",
    variant: "danger",
    disabled: false,
    buttonText: "Button",
  },
};

export const Disabled: Story = {
  args: {
    size: "sm",
    variant: "primary",
    disabled: true,
    buttonText: "Button",
  },
};
