import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "./pl-code-block";

type Story = StoryObj;

const meta = {
  title: "UI/PlCodeBlock",
  component: "pl-code-block",
  render: ({ code }) => html`<pl-code-block>${code}</pl-code-block>`,
} satisfies Meta;

export default meta;

function codeBlock() {
  return `
    const getFilteredData = (items, minPrice) => {
      return items
        .filter((item) => item.price >= minPrice)
        .map((item) => ({
          ...item,
          discounted: item.price > 100 ? item.price * 0.9 : item.price,
        }))
        .sort((a, b) => b.discounted - a.discounted);
    };`;
}

export const CodeBlock: Story = {
  args: {
    code: codeBlock(),
  },
};
