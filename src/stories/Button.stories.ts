// Storybook story for the Button component
// Only UI controls and documentation, no business logic is changed
import type { Meta, StoryObj } from "@storybook/react";
import './button.css';
import { within, expect } from '@storybook/test';
import { Button } from "./Button";

// Storybook metadata and controls for Button
const meta = {
  title: "Components/Button", // Storybook sidebar title
  component: Button, // The component to document
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    // Button size
    size: { control: 'radio', options: ['xsmall', 'small', 'large'], description: 'Button size' },
    // Disabled state
    disabled: { control: 'boolean', description: 'Disable the button' },
    // Show leading icon
    leadingIcon: { control: 'boolean', description: 'Show leading icon' },
    // Show trailing icon
    trailingIcon: { control: 'boolean', description: 'Show trailing icon' },
    // Button theme
    theme: { control: 'radio', options: ['primary', 'accent', 'blur'], description: 'Button theme' },
    // Button variant
    variant: { control: 'radio', options: ['filled', 'outline', 'text'], description: 'Button variant' },
    // Button color (only for accent theme)
    color: {
      control: { type: "select" },
      options: ["blue", "grey", "dark"],
      if: { arg: "theme", eq: "accent" },
      description: 'Button color (for accent theme only)',
    },
  },
  args: { leadingIcon: true, color: "grey" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {
  args: {
    label: "Button",
    size: "large",
    disabled: false,
    theme: "primary",
    variant: "filled",
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Use label from args for robust test
    const button = canvas.getByRole('button', { name: args.label ?? '' });
    await expect(button).toBeInTheDocument();
  },
};

export const Accent: Story = {
  args: {
    label: "Button",
    size: "large",
    disabled: false,
    theme: "accent",
    variant: "filled",
    color: "grey",
  },
  parameters: {
    backgrounds: {
      default: 'Light',
      values: [
        { name: 'Light', value: '#ffffff' },
        { name: 'Dark', value: '#2e2e2e' },
        { name: 'Light Grey', value: '#f0f0f0' },
      ],
    },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: args.label ?? '' });
    await expect(button).toBeInTheDocument();
  },
};

export const Blur: Story = {
  args: {
    label: "Button",
    size: "large",
    disabled: false,
    theme: "blur",
    variant: "filled",
  },
  parameters: {
    backgrounds: {
      default: 'Dark Alpha',
      values: [
        { name: 'Dark Alpha', value: 'rgba(19,19,19,0.5)' },
        { name: 'Disabled Dark Alpha', value: 'rgba(19,19,19,0.5)' },
      ],
    },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: args.label ?? '' });
    await expect(button).toBeInTheDocument();
  },
};
