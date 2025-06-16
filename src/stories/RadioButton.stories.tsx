// Storybook story for the RadioButton component
// Only UI controls and documentation, no business logic is changed
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import RadioButton from './RadioButton';

// Storybook metadata and controls for RadioButton
const meta = {
  title: 'Components/Radio', // Storybook sidebar title
  component: RadioButton, // The component to document
  tags: ['autodocs'],
  argTypes: {
    // Visual category of the radio button
    category: {
      options: ['inactive', 'active', 'error'],
      control: { type: 'radio' },
      description: 'The visual category of the radio button (e.g., inactive, active, error).',
    },
    // Interactive state of the radio button
    state: {
      options: ['active', 'disabled'],
      control: { type: 'radio' },
      description: 'The interactive state of the radio button (e.g., active, disabled).',
    },
    // Callback for checked state change
    onChange: {
      action: 'changed',
      description: "Callback function triggered when the radio button's checked state changes.",
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    category: "inactive"
  },

  render: (args) => {
    const [checked, setChecked] = useState(false);
    const { ...restArgs } = args;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
      restArgs.onChange?.(event);
    };

    return (
      <RadioButton
        {...restArgs}
        onChange={handleChange}
      />
    );
  }
};