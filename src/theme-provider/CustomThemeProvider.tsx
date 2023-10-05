import React from 'react'
import { ThemeProvider } from 'styled-components'
import crmTheme from '../styles'

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