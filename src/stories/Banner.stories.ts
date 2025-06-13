import type { Meta, StoryObj } from '@storybook/react';
import '../styles/designTokens.css';
import './banner.css';

import Banner from './Banner';

const meta = {
  title: 'Example/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['error', 'warning', 'success', 'info'],
    },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error: Story = {
  args: {
    type: 'error',
    message: "This is a dummy text used in the\nbanner component",
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: "This is a dummy text used in the\nbanner component",
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    message: "This is a dummy text used in the \nbanner component",
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    message: "This is a dummy text used in the \nbanner component",
  },
};