// Storybook story for the Wizard component
// Only UI controls and documentation, no business logic is changed
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/test';
import Wizard from './Wizard';

// Storybook metadata and controls for Wizard
const meta: Meta<typeof Wizard> = {
  title: 'Components/Wizard', // Storybook sidebar title
  component: Wizard, // The component to document
  argTypes: {
    // Index of the currently active step
    currentStep: {
      control: { type: 'number', min: 0 },
      description: 'The active step index',
      defaultValue: 0,
    },
    // Array of step labels to display
    steps: {
      control: 'object',
      description: 'Array of step labels',
      defaultValue: ['Step 1', 'Step 2', 'Step 3'],
    },
    // Callback for when a step is changed (for Storybook actions panel)
    onStepChange: { action: 'step changed', description: 'Callback when step changes' },
    // Disable navigation between steps
    isDisabled: { control: 'boolean', description: 'Disable navigation', defaultValue: false },
    // Show or hide step labels
    showLabels: { control: 'boolean', description: 'Show/hide step labels', defaultValue: true },
  },
};

export default meta;

// Default story for Wizard with all controls exposed
export const Default: StoryObj<typeof Wizard> = {
  args: {
    currentStep: 0,
    steps: ['Step 1', 'Step 2', 'Step 3'],
    isDisabled: false,
    showLabels: true,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Check all step labels are present
    if (args.showLabels) {
      (args.steps ?? []).forEach(label => {
        if (label) expect(canvas.getByText(label)).toBeInTheDocument();
      });
    }
    // Check all step numbers are present
    (args.steps ?? []).forEach((_, idx) => {
      expect(canvas.getByText(String(idx + 1))).toBeInTheDocument();
    });
  },
};
