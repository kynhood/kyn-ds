import type { Meta, StoryObj } from '@storybook/react';
import '../styles/designTokens.css';
import './banner.css';
import Banner from './Banner';

/**
 * Banner component displays important messages to users with different visual styles
 * based on the message type (error, warning, success, info).
 */
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

/**
 * Error banner for critical issues that require immediate attention
 */
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

/**
 * Warning banner for potential issues that the user should be aware of
 */
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

/**
 * Success banner for confirming successful actions
 */
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

/**
 * Info banner for general information
 */
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

/**
 * Multi-line message example
 */
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

/**
 * Interactive example allowing users to test different banner types
 */
export const Interactive: Story = {
  args: {
    type: 'info',
    message: 'This is an interactive banner. Use the controls in the Storybook panel to change its type and message.',
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        story: 'Interactive example that allows you to test different banner types and messages using Storybook controls.',
      },
    },
  },
};