import type { Meta, StoryObj } from "@storybook/react";
import './button.css';
import { within, expect } from '@storybook/test';
import { Button } from "./Button";
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: 'radio', options: ['xsmall', 'small', 'large'], description: 'Button size' },
    disabled: { control: 'boolean', description: 'Disable the button' },
    leadingIcon: { control: 'boolean', description: 'Show leading icon' },
    trailingIcon: { control: 'boolean', description: 'Show trailing icon' },
    theme: { control: 'radio', options: ['primary', 'accent', 'blur'], description: 'Button theme' },
    variant: { control: 'radio', options: ['filled', 'outline', 'text'], description: 'Button variant' },
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