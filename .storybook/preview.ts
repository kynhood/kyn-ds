import type { Preview } from "@storybook/react"; // Import the global styles
import "../src/index.css"; // Import the main styles including font
import "../src/styles/designTokens.css";

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#FFFFFF',
        },
      ],
    },
    themes: {
      default: 'light',
    },
  },
};

export default preview;
