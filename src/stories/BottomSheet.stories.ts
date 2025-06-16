import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const heading = canvas.getByText('Bottom Sheet Heading');
    const paragraph = canvas.getByText('This is a paragraph for the bottom sheet content.');
    const button = canvas.getByRole('button', { name: 'Action Button' });

    await expect(heading).toBeInTheDocument();
    await expect(paragraph).toBeInTheDocument();
    await expect(button).toBeInTheDocument();
  },
}; 