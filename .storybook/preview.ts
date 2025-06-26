import type { Preview } from "@storybook/react";

// Import global styles
import "../src/index.css";
import "../src/styles/designTokens.css";

const preview: Preview = {
  parameters: {
    // Remove actions.argTypesRegex and configure actions manually in stories
    actions: {},
    controls: {
      expanded: true,
      sort: 'requiredFirst',
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Introduction', 'Components', 'Pages', '*'],
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#1E1E1E' },
      ],
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'image-alt',
            enabled: true,
            selector: 'img',
          },
        ],
      },
    },
    docs: {
      toc: true,
    },
  },
};

export default preview;
