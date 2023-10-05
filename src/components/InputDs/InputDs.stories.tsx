import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import InputDs from './InputDs'

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof InputDs> = {
  title: 'Components/Input',
  component: InputDs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
}

export default meta

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof InputDs>

export const Basic: Story = {
  args: {
    type: 'text',
  },
}