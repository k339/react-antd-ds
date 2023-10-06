import React from 'react'
import crmTheme from '../../themes/themes'
import { ThemeProvider } from 'styled-components'

interface CustomThemeProviderProps {
  theme?: typeof crmTheme
  children: React.ReactNode
}

const CustomThemeProvider = ({ theme = crmTheme, children }: CustomThemeProviderProps) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default CustomThemeProvider