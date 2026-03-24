import type { Meta, StoryObj } from "@storybook/react-vite";
import type { PlCodeBlockProps } from "./PlCodeBlock";
import { PlCodeBlock } from "./PlCodeBlock";

type StoryProps = PlCodeBlockProps;

const sample = `const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('data'), 1000);
  });
};`;

const meta = {
  title: "UI/PlCodeBlock",
  component: PlCodeBlock,
  render: (args) => <PlCodeBlock>{args.children}</PlCodeBlock>,
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
} satisfies Meta<StoryProps>;

export default meta;
type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: sample,
  },
};
