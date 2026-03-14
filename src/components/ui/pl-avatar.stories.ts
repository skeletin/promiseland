import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "./pl-avatar";

type Story = StoryObj;

const meta = {
  title: "UI/PlAvatar",
  component: "pl-avatar",
  render: ({ size, initials }) =>
    html`<pl-avatar size=${size} initials=${initials}></pl-avatar>`,
} satisfies Meta;

export default meta;

export const Small: Story = {
  args: {
    size: "small",
    initials: "JS",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    initials: "JS",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    initials: "JS",
  },
};
