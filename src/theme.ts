import { createTheme, responsiveFontSizes } from '@mui/material/styles'

export const theme = responsiveFontSizes(
  createTheme({
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
  }),
)
