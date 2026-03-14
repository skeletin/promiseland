import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "./pl-input";

type Story = StoryObj;

const meta = {
  title: "UI/PlInput",
  component: "pl-input",
  render: ({ name, value, type, placeholder, invalid, errorMessage }) => html`
    <pl-input
      name=${name}
      value=${value}
      type=${type}
      placeholder=${placeholder}
      ?invalid=${invalid}
      error-message=${errorMessage ?? ""}
    >
    </pl-input>
  `,
  argTypes: {
    invalid: { control: "boolean" },
  },
} satisfies Meta;

export default meta;

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
    const input = canvasElement
      .querySelector("pl-input")
      ?.shadowRoot?.querySelector("input");
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
