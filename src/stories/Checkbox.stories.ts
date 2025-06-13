import type { Meta, StoryObj } from '@storybook/react';
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
      control: 'boolean',
    },
    error: {
      control: 'boolean',
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
};

export const Checked: Story = {
  args: {
    label: 'Checked Checkbox',
    initialChecked: true,
    disabled: false,
    error: false,
    indeterminate: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    initialChecked: false,
    disabled: true,
    error: false,
    indeterminate: false,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate Checkbox',
    initialChecked: false,
    disabled: false,
    error: false,
    indeterminate: true,
  },
};

export const CheckedAndDisabled: Story = {
  args: {
    label: 'Checked and Disabled',
    initialChecked: true,
    disabled: true,
    error: false,
    indeterminate: false,
  },
};

export const Error: Story = {
  args: {
    label: 'Error Checkbox',
    initialChecked: false,
    disabled: false,
    error: true,
    indeterminate: false,
  },
};