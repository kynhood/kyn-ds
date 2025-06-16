import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import './checkbox.css';

import Checkbox from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialChecked: {
      control: {
        type: 'radio',
      },
      options: ['active', 'inactive'],
      mapping: {
        active: true,
        inactive: false,
      },
    },
    disabled: {
      control: {
        type: 'radio',},
        options: ['active', 'disabled'],
      mapping: {
        active: false,
        inactive: true,
      },
    }, 
    indeterminate: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByLabelText('Checkbox');
    await expect(checkbox).toBeInTheDocument();
  },
};