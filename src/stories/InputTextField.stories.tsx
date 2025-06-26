import type { Meta, StoryObj } from '@storybook/react';
import InputTextField from './InputTextField';
export default {
  title: 'Components/InputTextField',
  component: InputTextField,
  args: {
    heading: 'Heading',
    helpText: 'This help text demonstrates the 50 character limit',
    maxLength: 100,
    showHelpText: true,
    showCounter: true,
    disabled: false
  },
  argTypes: {
    showHelpText: { control: 'boolean' },
    showCounter: { control: 'boolean' },
    disabled: { control: 'boolean' }
  }
} as Meta<typeof InputTextField>;
export const Default: StoryObj<typeof InputTextField> = {
  render: (args) => {
    return <InputTextField {...args} />;
  }
};