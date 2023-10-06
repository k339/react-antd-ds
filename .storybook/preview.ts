import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';
import crmTheme from '../src/themes';
import GlobalStyles from '../src/styles';

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

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
}