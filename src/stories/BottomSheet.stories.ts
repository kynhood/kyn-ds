import type { Meta, StoryObj } from '@storybook/react';
import BottomSheet from './BottomSheet';
import '../styles/designTokens.css';
import './bottomSheet.css';

const meta = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    headingText: { control: 'text' },
    paragraphText: { control: 'text' },
    buttonLabel: { control: 'text' },
    onButtonClick: { action: 'buttonClicked' },
  },
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headingText: 'Bottom Sheet Heading',
    paragraphText: 'This is a paragraph for the bottom sheet content.',
    buttonLabel: 'Action Button',
  },
}; 