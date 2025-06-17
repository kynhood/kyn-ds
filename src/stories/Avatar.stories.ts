// Storybook story for the Avatar component
// Only UI controls and documentation, no business logic is changed
import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import Avatar from './Avatar';
import './avatar.css';

// Storybook metadata and controls for Avatar
const meta = {
  title: 'Components/Avatar', // Storybook sidebar title
  component: Avatar, // The component to document
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    // Avatar size
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large', 'extra-large'],
      description: 'Avatar size',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatar = canvas.getByTestId('avatar-component');
    await expect(avatar).toBeInTheDocument();
  },
};
