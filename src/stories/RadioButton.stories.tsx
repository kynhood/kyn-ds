import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import RadioButton from './RadioButton';

const meta = {
  title: 'Components/Radio',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    category: {
      options: ['inactive', 'active', 'error'],
      control: { type: 'radio' },
      description: 'The visual category of the radio button (e.g., inactive, active, error).',
    },
    state: {
      options: ['active', 'disabled'],
      control: { type: 'radio' },
      description: 'The interactive state of the radio button (e.g., active, disabled).',
    },
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