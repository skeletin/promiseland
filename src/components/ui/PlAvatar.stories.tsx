import type { Meta, StoryObj } from "@storybook/react-vite";
import type { PlAvatarProps } from "./PlAvatar";
import { PlAvatar } from "./PlAvatar";

type StoryProps = PlAvatarProps;

const meta = {
  title: "UI/PlAvatar",
  component: PlAvatar,
  render: (args) => <PlAvatar {...args} />,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<StoryProps>;

export default meta;
type Story = StoryObj<StoryProps>;

export const Small: Story = {
  args: { size: "sm", initials: "JS" },
};

export const Medium: Story = {
  args: { size: "md", initials: "JS" },
};

export const Large: Story = {
  args: { size: "lg", initials: "JS" },
};

export const EmptyInitials: Story = {
  args: { size: "md", initials: "" },
};
