import type { Meta, StoryObj } from "@storybook/react-vite";
import { PlLoader } from "./PlLoader";

const meta = {
  title: "UI/PlLoader",
  component: PlLoader,
  render: () => <PlLoader />,
} satisfies Meta<typeof PlLoader>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {},
};
