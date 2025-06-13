import type { Meta, StoryObj } from '@storybook/react';
import '../styles/designTokens.css';
import './badge.css';

import Badge from './Badge';

const meta = {
  title: 'Example/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'radio',
      },
      options: ['error', 'warning', 'success', 'info'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error: Story = {
  args: {
    type: 'error',
    label: 'Error Badge',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    label: 'Warning Badge',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    label: 'Success Badge',
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    label: 'Info Badge',
  },
};