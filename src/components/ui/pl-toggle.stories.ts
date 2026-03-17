import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "./pl-toggle";

type Story = StoryObj;

const meta = {
  title: "UI/PlToggle",
  component: "pl-toggle",
  argTypes: {
    checked: { control: "boolean" },
  },
  render: (args) => html`<pl-toggle .checked=${args.checked}></pl-toggle>`,
} satisfies Meta;

export default meta;

export const ToggleOn: Story = {
  args: {
    checked: true,
  },
};

export const ToggleOff: Story = {
  args: {
    checked: false,
  },
};
