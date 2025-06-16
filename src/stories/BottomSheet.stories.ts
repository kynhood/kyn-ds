// Storybook story for the BottomSheet component
// Only UI controls and documentation, no business logic is changed
import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import BottomSheet from './BottomSheet';
import '../styles/designTokens.css';
import './bottomSheet.css';

// Storybook metadata and controls for BottomSheet
const meta = {
  title: 'Components/BottomSheet', // Storybook sidebar title
  component: BottomSheet, // The component to document
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    // Heading text for the bottom sheet
    headingText: { control: 'text', description: 'Heading text' },
    // Paragraph text for the bottom sheet
    paragraphText: { control: 'text', description: 'Paragraph text' },
    // Button label for the bottom sheet
    buttonLabel: { control: 'text', description: 'Button label' },
    // Action for button click
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