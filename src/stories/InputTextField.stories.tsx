import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import InputTextField from './InputTextField';

const meta = {
  title: 'Components/Input Text Field',
  component: InputTextField,
  tags: ['autodocs'],
  argTypes: {
    state: {
      options: ['inactive', 'active', 'disabled', 'error'],
      control: { type: 'radio' },
      description: 'The state of the input text field.',
    },
    heading: {
      control: 'text',
      description: 'The main heading/label for the input field.',
    },
    helpText: {
      control: 'text',
      description: 'Optional help text displayed below the input field.',
    },
    counter: {
      control: 'text',
      description: 'Optional character counter displayed below the input field.',
    },
    value: {
      control: 'text',
      description: 'The current value of the input field.',
    },
    onChange: {
      action: 'changed',
      description: 'Callback function triggered when the input value changes.',
    },
  },
} satisfies Meta<typeof InputTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inactive: Story = {
  args: {
    state: 'inactive',
    heading: 'Heading',
    helpText: 'Help Text',
    counter: '0/100',
    value: '',
  },
};

export const Active: Story = {
  args: {
    state: 'active',
    heading: 'Heading',
    helpText: 'Help Text',
    counter: '0/100',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      args.onChange?.(event);
    };

    return <InputTextField {...args} value={value} onChange={handleChange} />;
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
    heading: 'Heading',
    helpText: 'Help Text',
    counter: '0/100',
    value: 'Disabled text',
  },
};

export const Error: Story = {
  args: {
    state: 'error',
    heading: 'Heading',
    helpText: 'This is an error message.',
    counter: '101/100',
    value: 'Error text',
  },
}; 