import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { PlToggleProps } from "./PlToggle";
import { PlToggle } from "./PlToggle";

function ControlledToggle(props: PlToggleProps) {
  const [checked, setChecked] = useState(props.checked ?? props.defaultChecked ?? false);
  return (
    <PlToggle
      {...props}
      checked={checked}
      onCheckedChange={(v) => {
        setChecked(v);
        props.onCheckedChange?.(v);
      }}
    />
  );
}

const meta = {
  title: "UI/PlToggle",
  component: PlToggle,
  render: (args: PlToggleProps) => <ControlledToggle {...args} />,
  argTypes: {
    checked: { control: "boolean" },
    label: { control: "text" },
  },
} satisfies Meta<PlToggleProps>;

export default meta;
type Story = StoryObj<PlToggleProps>;

export const ToggleOn: Story = {
  args: { checked: true, label: "Notifications" },
};

export const ToggleOff: Story = {
  args: { checked: false, label: "Notifications" },
};
