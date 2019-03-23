import React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import { NIGHT } from './colors'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    type: 'dark',
    primary: {
      // light: '#757ce8',
      // main: '#008542',
      main: '#822433',
      contrastText: '#fff',
    },
    secondary: {
      // light: '#ff7961',
      main: '#D0103A',
      dark: '#822433',
      contrastText: '#fff',
    },
    grey: {
      '200': '#212121',
    },
  },
})

const Theme = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={NIGHT}>{children}</ThemeProvider>
  </MuiThemeProvider>
)

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Theme
