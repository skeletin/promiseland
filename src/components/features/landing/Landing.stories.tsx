import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import Landing from "./Landing";

const meta = {
  title: "Features/Landing",
  component: Landing,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Landing>;

export default meta;
type Story = StoryObj<typeof Landing>;

/** Full marketing landing (desktop-first responsive layout). */
export const Default: Story = {};

/** Narrow canvas to preview stacked hero and single-column sections. */
export const MobileWidth: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          margin: "0 auto",
          maxWidth: 390,
          minHeight: "100vh",
          overflow: "auto",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
