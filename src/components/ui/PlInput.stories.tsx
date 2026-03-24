import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { PlInputProps } from "./PlInput";
import { PlInput } from "./PlInput";

function ControlledInput(props: PlInputProps) {
  const [value, setValue] = useState(props.value ?? props.defaultValue ?? "");
  return (
    <PlInput
      {...props}
      value={value}
      onChange={(v) => {
        setValue(v);
        props.onChange?.(v);
      }}
    />
  );
}

const meta = {
  title: "UI/PlInput",
  component: PlInput,
  render: (args: PlInputProps) => <ControlledInput {...args} />,
  argTypes: { invalid: { control: "boolean" } },
} satisfies Meta<PlInputProps>;

export default meta;
type Story = StoryObj<PlInputProps>;

export const Default: Story = {
  args: {
    name: "Email",
    value: "",
    type: "email",
    placeholder: "you@example.com",
    invalid: false,
    errorMessage: "",
  },
};

export const Focused: Story = {
  args: {
    name: "Email",
    value: "dev@example.com",
    type: "email",
    placeholder: "you@example.com",
    invalid: false,
    errorMessage: "",
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector("input");
    input?.focus();
  },
};

export const Error: Story = {
  args: {
    name: "Email",
    value: "dev@example",
    type: "email",
    placeholder: "you@example.com",
    invalid: true,
    errorMessage: "Please enter a valid email address.",
  },
};
