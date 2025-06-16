// Storybook story for the Modal component
// Only UI controls and documentation, no business logic is changed
import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import './modal.css';
import Modal from './Modal';

// Storybook metadata and controls for Modal
const meta = {
  title: 'Components/Modal', // Storybook sidebar title
  component: Modal, // The component to document
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  // No argTypes defined for Modal
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headingText: "Modal Title",
    paragraphText: "This is the content of the modal.",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const heading = canvas.getByText(args.headingText ?? '');
    const paragraph = canvas.getByText(args.paragraphText ?? '');
    await expect(heading).toBeInTheDocument();
    await expect(paragraph).toBeInTheDocument();
  },
};