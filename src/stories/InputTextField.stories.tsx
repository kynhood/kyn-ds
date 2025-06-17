// Storybook story for the InputTextField component
// Only UI controls and documentation, no business logic is changed
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import InputTextField from './InputTextField';

// Storybook metadata and controls for InputTextField
const meta = {
  title: 'Components/Input Text Field', // Storybook sidebar title
  component: InputTextField, // The component to document
  tags: ['autodocs'],
  argTypes: {
    // State of the input text field
    state: {
      options: ['inactive', 'active', 'disabled', 'error'],
      control: { type: 'radio' },
      description: 'The state of the input text field.',
    },
    // Main heading/label for the input field
    heading: { control: 'text', description: 'The main heading/label for the input field.' },
    // Optional help text
    helpText: { control: 'text', description: 'Optional help text displayed below the input field.' },
    // Optional character counter
    counter: { control: 'text', description: 'Optional character counter displayed below the input field.' },
    // Current value of the input field
    value: { control: 'text', description: 'The current value of the input field.' },
    // Callback for value change
    onChange: { action: 'changed', description: 'Callback function triggered when the input value changes.' },
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
  render: (args) => {
    const [value, setValue] = useState(args.value);
    
    return (
      <InputTextField 
        {...args} 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
};

export const Active: Story = {
  args: {
    state: 'active',
    heading: 'Heading',
    helpText: 'Help Text',
    counter: '0/100',
    value: '',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    
    return (
      <InputTextField 
        {...args} 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
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