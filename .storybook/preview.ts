import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';
import crmTheme from '../src/styles/themes';
import { GlobalStyles } from '../src/styles/global-style';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      crm: crmTheme,
    },
    defaultTheme: 'crm',
    Provider: ThemeProvider,
    GlobalStyles,
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
  },
};

export default preview;
