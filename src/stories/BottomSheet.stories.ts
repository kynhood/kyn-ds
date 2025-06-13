import type { Meta, StoryObj } from '@storybook/react';
import './bottomSheet.css';

import BottomSheet from './BottomSheet';

const meta = {
  title: 'Example/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};