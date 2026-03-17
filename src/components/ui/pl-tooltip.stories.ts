import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "./pl-tooltip";

type Story = StoryObj;

const meta = {
  title: "UI/PlTooltip",
  component: "pl-progress-bar",
  render: () => html` <pl-tooltip>Complete Lesson 2 to unlock</pl-tooltip> `,
} satisfies Meta;

export default meta;

export const Default: Story = {};
