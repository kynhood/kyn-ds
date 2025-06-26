import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { action } from '@storybook/addon-actions';
import { Avatar } from './Avatar';
import './avatar.css';
const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    controls: { 
      expanded: true,
      sort: 'requiredFirst',
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      description: {
        component: 'Displays a user avatar with different size options.',
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'image-alt',
            enabled: true,
            selector: 'img',
          },
        ],
      },
    },
    chromatic: { 
      disableSnapshot: false,
      viewports: [320, 768, 1024],
    },
  },
  tags: ['autodocs', 'components'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'extra-large'],
      description: 'Controls the size of the avatar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback when avatar is clicked',
      table: {
        type: { summary: '() => void' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for custom styling',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
        category: 'Styling',
      },
    },
  },
  args: {
    size: 'medium',
  },
} satisfies Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof Avatar>;
export const Default: Story = {
  args: {
    onClick: action('avatar-clicked'),
  },
  parameters: {
    chromatic: { disableSnapshot: false },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const avatar = canvas.getByRole('img');
    await step('Should render with default size', async () => {
      await expect(avatar).toBeInTheDocument();
      await expect(avatar).toHaveClass('avatar-medium');
    });
    await step('Should be accessible', async () => {
      await expect(avatar).toHaveAttribute('aria-label', 'User avatar');
      await expect(avatar).toHaveAttribute('role', 'img');
    });
  },
};
export const Small: Story = {
  args: {
    size: 'small',
  },
  parameters: {
    chromatic: { disableSnapshot: false },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const avatar = canvas.getByRole('img');
    await step('Should render with small size class', async () => {
      await expect(avatar).toHaveClass('avatar-small');
    });
  },
};
export const Large: Story = {
  args: {
    size: 'large',
  },
  parameters: {
    chromatic: { disableSnapshot: false },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const avatar = canvas.getByRole('img');
    await step('Should render with large size class', async () => {
      await expect(avatar).toHaveClass('avatar-large');
    });
  },
};
export const ExtraLarge: Story = {
  args: {
    size: 'extra-large',
  },
  parameters: {
    chromatic: { disableSnapshot: false },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const avatar = canvas.getByRole('img');
    await step('Should render with extra-large size class', async () => {
      await expect(avatar).toHaveClass('avatar-extra-large');
    });
  },
};