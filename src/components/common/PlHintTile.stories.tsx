import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import type { PlHintTileProps } from "./PlHintTile";
import { PlHintTile } from "./PlHintTile";

const meta = {
  title: "Common/PlHintTile",
  component: PlHintTile,
  render: (args: PlHintTileProps) => <PlHintTile {...args} />,
  argTypes: {
    revealed: { control: "boolean" },
    penaltyXp: { control: "number" },
  },
} satisfies Meta<PlHintTileProps>;

export default meta;
type Story = StoryObj<PlHintTileProps>;

export const Collapsed: Story = {
  args: {
    title: "Hint 1",
    penaltyXp: 10,
    content:
      "Try using .then() to chain the resolved value into the next async operation.",
    revealed: false,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole("paragraph")).toBeNull();
    await expect(canvas.getByText(args.title!)).toBeInTheDocument();
    await expect(canvas.getByText(`-${args.penaltyXp} XP`)).toBeInTheDocument();
  },
};

export const Revealed: Story = {
  args: {
    ...Collapsed.args,
    revealed: true,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(args.content!)).toBeInTheDocument();
  },
};
