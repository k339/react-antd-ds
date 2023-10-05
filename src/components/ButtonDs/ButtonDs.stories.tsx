import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ButtonDs from "./ButtonDs";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof ButtonDs> = {
  title: "Components/ButtonDs",
  component: ButtonDs
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof ButtonDs>;

export const Primary: Story = {
  args: {
    children: "Primary 😃",
    size: "large",
    type: "primary",
  },
};
