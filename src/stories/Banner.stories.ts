import type { Meta, StoryObj } from '@storybook/react';
import '../styles/designTokens.css';
import './banner.css';
import Banner from './Banner';
const meta = {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs', 'banner', 'notification', 'alert'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A banner component for displaying important messages to users with different visual styles based on the message type.',
      },
    },
  },
  argTypes: {
    type: {
      control: { 
        type: 'select',
        labels: {
          error: 'Error',
          warning: 'Warning',
          success: 'Success',
          info: 'Information'
        }
      },
      options: ['error', 'warning', 'success', 'info'],
      description: 'Determines the banner\'s visual style and icon',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    message: {
      control: 'text',
      description: 'The message to display in the banner',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    type: 'info',
    message: 'This is a default banner message',
  },
} satisfies Meta<typeof Banner>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Error: Story = {
  args: {
    type: 'error',
    message: 'Critical system error: Unable to save changes. Please try again or contact support if the problem persists.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use for critical errors that prevent the user from completing their task.',
      },
    },
  },
};
export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'Warning: System maintenance scheduled for tonight at 10 PM. Some features may be temporarily unavailable.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use for potential issues or important notices that don\'t block the user.',
      },
    },
  },
};
export const Success: Story = {
  args: {
    type: 'success',
    message: 'Success! Your changes have been saved successfully.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use to confirm successful completion of user actions.',
      },
    },
  },
};
export const Info: Story = {
  args: {
    type: 'info',
    message: 'Tip: You can use keyboard shortcuts to navigate faster. Press ? to see available shortcuts.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use for general information or helpful tips.',
      },
    },
  },
};
export const MultiLine: Story = {
  args: {
    type: 'info',
    message: 'This is a multi-line message.\nIt shows how the banner handles longer content that wraps to multiple lines.\nThe banner will automatically adjust its height to fit the content.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing how the banner handles multi-line messages.',
      },
    },
  },
};