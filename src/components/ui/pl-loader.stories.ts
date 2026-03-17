import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "./pl-loader";

type Story = StoryObj;

const meta = {
  title: "UI/PlLoader",
  component: "pl-loader",
  render: () => html` <pl-loader></pl-loader> `,
} satisfies Meta;

export default meta;

export const Default: Story = {};
