// This file is not needed. Storybook theming should be handled in preview.ts or via parameters.
// File intentionally left blank to avoid import errors.

import { create } from 'storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'My custom Storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',
});
