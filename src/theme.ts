import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: '#fbfaf7',
          paper: '#ffffff',
        },
        primary: {
          main: '#7c3aed',
        },
        divider: 'rgba(124, 58, 237, 0.24)',
        text: {
          primary: '#1f1d24',
          secondary: '#6a6474',
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: '#111018',
          paper: '#191724',
        },
        primary: {
          main: '#d8b4fe',
        },
        divider: 'rgba(216, 180, 254, 0.26)',
        text: {
          primary: '#f5f3ff',
          secondary: '#c9c1dd',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 780,
      lineHeight: 1,
      letterSpacing: 0,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 760,
      lineHeight: 1.12,
      letterSpacing: 0,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 760,
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    subtitle1: {
      fontWeight: 700,
      lineHeight: 1.4,
      letterSpacing: 0,
    },
    subtitle2: {
      fontWeight: 760,
      lineHeight: 1.4,
      letterSpacing: 0,
    },
    body1: {
      lineHeight: 1.7,
      letterSpacing: 0,
    },
    body2: {
      lineHeight: 1.65,
      letterSpacing: 0,
    },
    caption: {
      letterSpacing: 0,
    },
    overline: {
      fontWeight: 760,
      lineHeight: 1.6,
      letterSpacing: 0,
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          minHeight: '100%',
        },
        body: {
          minHeight: '100%',
        },
        '#root': {
          minHeight: '100%',
        },
      },
    },
  },
})
