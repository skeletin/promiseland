import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "./pl-avatar";

type Story = StoryObj;

const meta = {
  title: "UI/PlAvatar",
  component: "pl-avatar",
  render: ({ size }) => html`<pl-avatar size=${size}>JS</pl-avatar>`,
} satisfies Meta;

export default meta;

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};
