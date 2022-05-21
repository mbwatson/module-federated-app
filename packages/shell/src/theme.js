import React from 'react'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  useTheme as MuiUseTheme,
} from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#98d',
    },
    secondary: {
      main: '#d98',
    },
  },
  shape: {
    borderRadius: 2,
  },
})

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={ theme }>
      { children }
    </MuiThemeProvider>
  )
}

export const useTheme = MuiUseTheme
