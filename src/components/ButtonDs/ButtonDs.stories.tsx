import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Button from './ButtonDs'

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export default meta

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof Button>

export const Basic: Story = {
  args: {
    children: 'Button',
    type: 'primary',
    size: 'middle',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    type: 'default',
    size: 'middle',
  },
}

export const Tertiary: Story = {
  args: {
    children: 'Tertiary',
    type: 'text',
    size: 'middle',
  },
}
