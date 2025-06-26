import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import '../styles/designTokens.css';
import './badge.css';
import Badge from './Badge';
const meta = {
  title: 'Components/Badge', 
  component: Badge, 
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['error', 'warning', 'success', 'info', 'neutral-light', 'neutral-dark-alpha'],
      description: 'Badge type',
    },
  },
} satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Error: Story = {
  args: {
    type: 'error',
    label: 'Error Badge',
  },
  parameters: {
    docs: {
      description: {
        story: 'A red badge used to indicate errors or critical issues that require attention.'
      }
    }
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText(args.label);
    await expect(badge).toBeInTheDocument();
  },
};
export const Warning: Story = {
  args: {
    type: 'warning',
    label: 'Warning Badge',
  },
  parameters: {
    docs: {
      description: {
        story: 'An orange badge used to indicate warnings or potential issues that need attention.'
      }
    }
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText(args.label);
    await expect(badge).toBeInTheDocument();
  },
};
export const Success: Story = {
  args: {
    type: 'success',
    label: 'Success Badge',
  },
  parameters: {
    docs: {
      description: {
        story: 'A green badge used to indicate successful operations or completed actions.'
      }
    }
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText(args.label);
    await expect(badge).toBeInTheDocument();
  },
};
export const Info: Story = {
  args: {
    type: 'info',
    label: 'Info Badge',
  },
  parameters: {
    docs: {
      description: {
        story: 'A blue badge used to provide informational messages or helpful tips.'
      }
    }
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText(args.label);
    await expect(badge).toBeInTheDocument();
  },
};
export const NeutralLight: Story = {
  args: {
    type: 'neutral-light',
    label: 'Neutral Light Badge',
  },
  parameters: {
    docs: {
      description: {
        story: 'A light gray badge for neutral or secondary information that doesn\'t require immediate attention.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText('Neutral Light Badge');
    await expect(badge).toBeInTheDocument();
  },
};
export const NeutralDarkAlpha: Story = {
  args: {
    type: 'neutral-dark-alpha',
    label: 'Neutral Dark Alpha Badge',
  },
  parameters: {
    docs: {
      description: {
        story: 'A semi-transparent dark badge with blur effect, ideal for overlays or when a subtle notification is needed.'
      },
      canvas: {
        style: {
          backgroundColor: '#f0f0f0',
          padding: '20px',
          borderRadius: '8px'
        }
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText('Neutral Dark Alpha Badge');
    await expect(badge).toBeInTheDocument();
  },
};