import React from 'react'
import crmTheme from '../../themes/themes'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../styles/global-style'

interface CustomThemeProviderProps {
  theme?: typeof crmTheme
  children: React.ReactNode
}

const CustomThemeProvider = ({ theme = crmTheme, children }: CustomThemeProviderProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default CustomThemeProvider