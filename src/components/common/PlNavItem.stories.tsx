import type { Meta, StoryObj } from "@storybook/react-vite";
import type { PlNavItemProps } from "./PlNavItem";
import { PlNavItem } from "./PlNavItem";

const meta = {
  title: "Common/PlNavItem",
  component: PlNavItem,
  render: (args: PlNavItemProps) => <PlNavItem {...args} />,
  argTypes: {
    active: { control: "boolean" },
    icon: { control: "text" },
  },
} satisfies Meta<PlNavItemProps>;

export default meta;
type Story = StoryObj<PlNavItemProps>;

export const Default: Story = {
  args: { label: "Learning Path", icon: "book-open", active: false },
};

export const Active: Story = {
  args: { label: "Dashboard", icon: "layout-dashboard", active: true },
};
