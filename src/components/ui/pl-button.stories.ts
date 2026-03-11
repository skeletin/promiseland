import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "./pl-button";

type Story = StoryObj;

const meta = {
  title: "UI/PlButton",
  component: "pl-button",
  render: (args) => html`
    <pl-button
      size="${args.size}"
      variant="${args.variant}"
      ?disabled=${args.disabled}
      >Button</pl-button
    >
  `,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "ghost", "danger"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta;

export default meta;

export const Primary: Story = {
  args: {
    size: "medium",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    size: "medium",
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    size: "medium",
    variant: "danger",
  },
};

export const Disabled: Story = {
  args: {
    size: "medium",
    disabled: true,
    variant: "primary",
  },
};
