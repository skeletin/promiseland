import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "./pl-badge";

type Story = StoryObj;

const meta = {
  title: "UI/PlBadge",
  component: "pl-badge",
  render: ({ variant }) =>
    html`<pl-badge variant=${variant}> ${variant} </pl-badge>`,
} satisfies Meta;

export default meta;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Beginner: Story = {
  args: {
    variant: "beginner",
  },
};

export const Intermediate: Story = {
  args: {
    variant: "intermediate",
  },
};

export const Advanced: Story = {
  args: {
    variant: "advanced",
  },
};

export const NotStarted: Story = {
  args: {
    variant: "not started",
  },
};

export const InProgress: Story = {
  args: {
    variant: "in progress",
  },
};
export const Completed: Story = {
  args: {
    variant: "completed",
  },
};

export const XP: Story = {
  args: {
    variant: "xp",
    slot: "+50 XP",
  },
  render: ({ variant, slot }) =>
    html`<pl-badge variant=${variant}>${slot}</pl-badge>`,
};

export const Locked: Story = {
  args: {
    variant: "locked",
  },
};
