import type { Preview } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-styling';

import '../src/globals.css';

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
    attributeName: 'data-mode',
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'gray900',
      values: [
        { name: 'zinc900', value: '#18181b' },
        { name: 'zinc950', value: '#09090b' },
        { name: 'slate900', value: '#0f172a' },
        { name: 'slate950', value: '#020617' },
        { name: 'gray900', value: '#111827' },
        { name: 'gray950', value: '#030712' },
      ],
    },
  },
};

export default preview;
