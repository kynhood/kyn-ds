import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import './chips.css';
import Chips from './Chips';
const meta = {
  title: 'Components/Chips', 
  component: Chips, 
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
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