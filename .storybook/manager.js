import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'Kyn Design System',
  brandUrl: 'https://github.com/kynhood/kyn-ds',
  brandImage: './src/stories/assets/kynLogo.png',
  brandTarget: '_self',
  
  // UI colors
  appBg: '#f8f8f8',
  appContentBg: '#ffffff',
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 4,

  // Text colors
  textColor: '#333333',
  textInverseColor: '#ffffff',

  // Toolbar colors
  barTextColor: '#999999',
  barSelectedColor: '#1a73e8', 
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: 'rgba(0,0,0,.1)',
  inputTextColor: '#333333',
  inputBorderRadius: 4
});

addons.setConfig({ theme });