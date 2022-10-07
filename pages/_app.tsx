import '../styles/globals.css'

import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import type { AppProps } from 'next/app'
import React from 'react'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#547cd7',
      contrastText: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: '#fff5',
    },
    success: {
      main: '#fcfdfe',
      dark: '#0005',
    },
    info: { main: '#538c9a' },
    secondary: {
      main: '#fff5',
      contrastText: '#fff',
    },
    background: {
      default: '#212934',
    },
  },
})
export const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
