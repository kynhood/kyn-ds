// Storybook story for the Badge component
// Only UI controls and documentation, no business logic is changed
import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import '../styles/designTokens.css';
import './badge.css';
import Badge from './Badge';

// Storybook metadata and controls for Badge
const meta = {
  title: 'Components/Badge', // Storybook sidebar title
  component: Badge, // The component to document
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    // Badge type (color/intent)
    type: {
      control: { type: 'radio' },
      options: ['error', 'warning', 'success', 'info'],
      description: 'Badge type (error, warning, success, info)',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Error badge story
export const Error: Story = {
  args: {
    type: 'error',
    label: 'Error Badge',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText(args.label);
    await expect(badge).toBeInTheDocument();
  },
};

// Warning badge story
export const Warning: Story = {
  args: {
    type: 'warning',
    label: 'Warning Badge',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText(args.label);
    await expect(badge).toBeInTheDocument();
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    label: 'Success Badge',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText(args.label);
    await expect(badge).toBeInTheDocument();
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    label: 'Info Badge',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText(args.label);
    await expect(badge).toBeInTheDocument();
  },
};

export const NeutralLight: Story = {
  args: {
    type: 'neutral-light',
    label: 'Neutral Light Badge',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText('Neutral Light Badge');
    await expect(badge).toBeInTheDocument();
  },
};

export const NeutralDarkAlpha: Story = {
  args: {
    type: 'neutral-dark-alpha',
    label: 'Neutral Dark Alpha Badge',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText('Neutral Dark Alpha Badge');
    await expect(badge).toBeInTheDocument();
  },
};