import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "./pl-level-pill";

type Story = StoryObj;

const meta = {
  title: "UI/PlLevelPill",
  component: "pl-level-pill",
  render: ({ level, xp }) => html`
    <pl-level-pill level=${level} xp=${xp}> </pl-level-pill>
  `,
} satisfies Meta;

export default meta;

export const Default: Story = {
  args: {
    level: 4,
    xp: 2333,
  },
};
