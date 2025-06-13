import type { Meta, StoryObj } from "@storybook/react";
import './button.css';

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
    size: { control: 'radio', options: ['xsmall', 'small', 'large'] },
    disabled: { control: 'boolean' },
    leadingIcon: { control: 'boolean' },
    trailingIcon: { control: 'boolean' },
    theme: { control: 'radio', options: ['primary', 'accent', 'blur'] },
    variant: { control: 'radio', options: ['filled', 'outline', 'text'] },
    color: {
      control: { type: "select" },
      options: ["blue", "grey", "dark"],
      if: { arg: "theme", eq: "accent" },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
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
};
