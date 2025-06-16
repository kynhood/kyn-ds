// Storybook story for the Banner component
// Only UI controls and documentation, no business logic is changed
import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import '../styles/designTokens.css';
import './banner.css';
import Banner from './Banner';

// Storybook metadata and controls for Banner
const meta = {
  title: 'Components/Banner', // Storybook sidebar title
  component: Banner, // The component to document
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    // Banner type (color/intent)
    type: {
      control: { type: 'select' },
      options: ['error', 'warning', 'success', 'info'],
      description: 'Banner type (error, warning, success, info)',
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
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Remove newlines for getByText match
    const msg = (args.message ?? '').replace(/\n/g, ' ');
    const banner = canvas.getByText(msg);
    await expect(banner).toBeInTheDocument();
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: "This is a dummy text used in the\nbanner component",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const msg = (args.message ?? '').replace(/\n/g, ' ');
    const banner = canvas.getByText(msg);
    await expect(banner).toBeInTheDocument();
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    message: "This is a dummy text used in the \nbanner component",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const msg = (args.message ?? '').replace(/\n/g, ' ');
    const banner = canvas.getByText(msg);
    await expect(banner).toBeInTheDocument();
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    message: "This is a dummy text used in the \nbanner component",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const msg = (args.message ?? '').replace(/\n/g, ' ');
    const banner = canvas.getByText(msg);
    await expect(banner).toBeInTheDocument();
  },
};