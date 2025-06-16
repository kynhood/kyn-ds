// Storybook story for the Checkbox component
// Only UI controls and documentation, no business logic is changed
import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import './checkbox.css';
import Checkbox from './Checkbox';

// Storybook metadata and controls for Checkbox
const meta = {
  title: 'Components/Checkbox', // Storybook sidebar title
  component: Checkbox, // The component to document
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    // Initial checked state (active/inactive)
    initialChecked: {
      control: { type: 'radio' },
      options: ['active', 'inactive'],
      mapping: { active: true, inactive: false },
      description: 'Initial checked state',
    },
    // Disabled state
    disabled: {
      control: { type: 'radio' },
      options: ['active', 'disabled'],
      mapping: { active: false, inactive: true },
      description: 'Disabled state',
    },
    // Indeterminate state
    indeterminate: { control: 'boolean', description: 'Indeterminate state' },
    // Checkbox label
    label: { control: 'text', description: 'Checkbox label' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Checkbox',
    initialChecked: false,
    disabled: false,
    error: false,
    indeterminate: false,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Use label from args for robust test, fallback to empty string if undefined
    const checkbox = canvas.getByLabelText(args.label ?? '');
    await expect(checkbox).toBeInTheDocument();
  },
};