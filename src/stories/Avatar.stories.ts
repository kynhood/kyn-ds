import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import Avatar from './Avatar';
import './avatar.css';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['small', 'medium', 'large', 'extra-large'],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatar = canvas.getByRole('img'); // Assuming the Avatar component renders an img or has an appropriate role
    await expect(avatar).toBeInTheDocument();
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatar = canvas.getByRole('img');
    await expect(avatar).toBeInTheDocument();
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatar = canvas.getByRole('img');
    await expect(avatar).toBeInTheDocument();
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'extra-large',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatar = canvas.getByRole('img');
    await expect(avatar).toBeInTheDocument();
  },
};
