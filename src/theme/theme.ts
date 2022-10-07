import { createMuiTheme, ThemeOptions } from '@material-ui/core'

export const paletteColorsDark = {
  primary: '#547cd7',
  text: {
    primary: '#fff',
    secondary: '#717982',
    dark: '#b0bcc6',
  },
  divider: '#fff',
  background: {
    paper: '#15202b',
    default: '#15202b',
  },
}

const options = (): ThemeOptions => {
  const paletteColors = paletteColorsDark
  return {
    palette: {
      type: 'dark',
      primary: {
        main: paletteColors.primary,
      },
      text: paletteColors.text,
      divider: paletteColors.divider,
      background: paletteColors.background,
    },
    typography: {
      fontFamily: 'Lato, Helvetica, Arial, sans-serif',
      body1: {
        fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
      },
      body2: {
        fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            height: '100%',
            padding: 0,
            margin: 0,
            width: '100vw',
          },
          body: {
            height: '100%',
            padding: 0,
            margin: 0,
            width: '100vw',
            overflowX: 'hidden',
          },
          a: {
            textDecoration: 'none',
            color: paletteColors.text.primary,
          },
        },
      },
    },
  }
}

export const dark = createMuiTheme(options())
export const light = createMuiTheme(options())

export default dark
