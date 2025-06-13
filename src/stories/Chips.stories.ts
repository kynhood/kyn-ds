import type { Meta, StoryObj } from '@storybook/react';
import './chips.css';

import Chips from './Chips';

const meta = {
  title: 'Components/Chips',
  component: Chips,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inactive: Story = {
  args: {
    label: 'Kyn Events',
    disabled: false,
  },
};

export const Active: Story = {
  args: {
    label: 'Active Chip',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Chip',
    disabled: true,
  },
};