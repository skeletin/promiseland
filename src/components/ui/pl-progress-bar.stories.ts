import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "./pl-progress-bar";

type Story = StoryObj;

const meta = {
  title: "UI/PlProgressBar",
  component: "pl-progress-bar",
  render: ({ progress }) => html`
    <pl-progress-bar progress=${progress}> </pl-progress-bar>
  `,
} satisfies Meta;

export default meta;

export const ZeroPercentProgress: Story = {
  args: {
    progress: 0,
  },
};

export const FiftyPercentProgress: Story = {
  args: {
    progress: 50,
  },
};

export const OneHundredPercentProgress: Story = {
  args: {
    progress: 100,
  },
};
