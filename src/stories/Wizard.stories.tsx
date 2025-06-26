import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import Wizard from './Wizard';

const meta: Meta<typeof Wizard> = {
  title: 'Components/Wizard', 
  component: Wizard, 
  argTypes: {
    currentStep: {
      control: { type: 'number', min: 0, max: 1 },
      description: 'The active step index (0-1)',
      defaultValue: 0,
    },
    steps: {
      control: 'object',
      description: 'Array of step labels',
      defaultValue: ['Step 1', 'Step 2'],
    },
    onStepChange: { 
      action: 'step changed', 
      description: 'Callback when step changes' 
    },
    isDisabled: { 
      control: 'boolean', 
      description: 'Disable navigation', 
      defaultValue: false 
    },
    showLabels: { 
      control: 'boolean', 
      description: 'Show/hide step labels', 
      defaultValue: true 
    },
    maxSteps: {
      control: { type: 'number', min: 1, max: 4 },
      description: 'Maximum number of steps to show',
      defaultValue: 2
    }
  },
};

export default meta;

export const Default: StoryObj<typeof Wizard> = {
  args: {
    currentStep: 0,
    steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
    isDisabled: false,
    showLabels: true,
    maxSteps: 3
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const displaySteps = args.steps?.slice(0, args.maxSteps ?? 2) || [];
    
    if (args.showLabels) {
      displaySteps.forEach(label => {
        if (label) expect(canvas.getByText(label)).toBeInTheDocument();
      });
    }
    
    displaySteps.forEach((_, idx) => {
      expect(canvas.getByText(String(idx + 1))).toBeInTheDocument();
    });
  },
  parameters: {
    controls: {
      exclude: ['currentStep']
    }
  }
};