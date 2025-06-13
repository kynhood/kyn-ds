import type { Meta, StoryObj } from '@storybook/react';
import './modal.css';

import Modal from './Modal';

const meta = {
  title: 'Example/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headingText: "Modal Title",
    paragraphText: "This is the content of the modal.",
  },
};