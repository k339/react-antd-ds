import React from 'react';
import crmTheme from '../styles';
interface CustomThemeProviderProps {
    theme?: typeof crmTheme;
    children: React.ReactNode;
}
declare const CustomThemeProvider: ({ theme, children }: CustomThemeProviderProps) => React.JSX.Element;
export default CustomThemeProvider;
