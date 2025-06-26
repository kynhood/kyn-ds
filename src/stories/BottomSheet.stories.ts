import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import BottomSheet from './BottomSheet';
import '../styles/designTokens.css';
import './bottomSheet.css';
const meta = {
  title: 'Components/BottomSheet', 
  component: BottomSheet, 
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    headingText: { control: 'text', description: 'Heading text' },
    paragraphText: { control: 'text', description: 'Paragraph text' },
    buttonLabel: { control: 'text', description: 'Button label' },
    onButtonClick: { action: 'buttonClicked', description: 'Button click handler' },
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
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const heading = canvas.getByText(args.headingText ?? '');
    const paragraph = canvas.getByText(args.paragraphText ?? '');
    const button = canvas.getByRole('button', { name: args.buttonLabel ?? '' });
    await expect(heading).toBeInTheDocument();
    await expect(paragraph).toBeInTheDocument();
    await expect(button).toBeInTheDocument();
  },
};