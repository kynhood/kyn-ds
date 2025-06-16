// Storybook story for the Chips component
// Only UI controls and documentation, no business logic is changed
import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import './chips.css';
import Chips from './Chips';

// Storybook metadata and controls for Chips
const meta = {
  title: 'Components/Chips', // Storybook sidebar title
  component: Chips, // The component to document
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    // Disabled state for the chip
    disabled: { control: 'boolean', description: 'Disable the chip' },
  },
} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inactive: Story = {
  args: {
    label: 'Kyn Events',
    disabled: false,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByText(args.label ?? '');
    await expect(chip).toBeInTheDocument();
  },
};

export const Active: Story = {
  args: {
    label: 'Active Chip',
    disabled: false,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByText(args.label ?? '');
    await expect(chip).toBeInTheDocument();
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Chip',
    disabled: true,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByText(args.label ?? '');
    await expect(chip).toBeInTheDocument();
  },
};