import type { Preview } from "@storybook/react-vite";
import "../src/index.css";
import React from "react";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "base",
      values: [
        { name: "base", value: "#0d0f14" },
        { name: "surface", value: "#13161e" },
        { name: "elevated", value: "#1c2030" },
      ],
    },
    a11y: {
      test: "todo",
    },
  },
  decorators: [
    (Story, context) => {
      const fullscreen = context.parameters.layout === "fullscreen";
      return (
        <div
          style={{
            color: "#f0f2ff",
            fontFamily: "inherit",
            ...(fullscreen
              ? {
                  minHeight: "100vh",
                  boxSizing: "border-box",
                }
              : { padding: "2rem" }),
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
