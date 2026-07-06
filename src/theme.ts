import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import type { CSSProperties } from 'react'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    siteCopy: CSSProperties
    siteDisplay: CSSProperties
    siteFine: CSSProperties
    siteLink: CSSProperties
    siteMark: CSSProperties
    siteSection: CSSProperties
    siteSmall: CSSProperties
    siteTitle: CSSProperties
  }

  interface TypographyVariantsOptions {
    siteCopy?: CSSProperties
    siteDisplay?: CSSProperties
    siteFine?: CSSProperties
    siteLink?: CSSProperties
    siteMark?: CSSProperties
    siteSection?: CSSProperties
    siteSmall?: CSSProperties
    siteTitle?: CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    siteCopy: true
    siteDisplay: true
    siteFine: true
    siteLink: true
    siteMark: true
    siteSection: true
    siteSmall: true
    siteTitle: true
  }
}

const documentFontFamily =
  '"STIX Two Text Variable", "STIX Two Text", Georgia, "Times New Roman", serif'

const uiFontFamily =
  '"Inter Variable", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
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
          text: {
            primary: '#4a3429',
            secondary: '#7c6a5f',
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
      fontFamily: documentFontFamily,
      fontWeightBold: 700,
      siteCopy: {
        fontFamily: documentFontFamily,
        letterSpacing: 0,
        lineHeight: 1.7,
      },
      siteDisplay: {
        fontFamily: documentFontFamily,
        fontSize: '3.5rem',
        fontWeight: 700,
        letterSpacing: 0,
        lineHeight: 1,
      },
      siteFine: {
        fontFamily: documentFontFamily,
        fontSize: '0.875rem',
        letterSpacing: 0,
        lineHeight: 1.65,
      },
      siteLink: {
        fontFamily: documentFontFamily,
        fontWeight: 700,
        letterSpacing: 0,
        lineHeight: 1.4,
      },
      siteMark: {
        fontFamily: documentFontFamily,
        fontSize: '0.75rem',
        fontWeight: 700,
        letterSpacing: 0,
        lineHeight: 1.6,
        textTransform: 'uppercase',
      },
      siteSection: {
        fontFamily: documentFontFamily,
        fontSize: '2rem',
        fontWeight: 700,
        letterSpacing: 0,
        lineHeight: 1.12,
      },
      siteSmall: {
        fontFamily: documentFontFamily,
        fontSize: '0.75rem',
        letterSpacing: 0,
        lineHeight: 1.6,
      },
      siteTitle: {
        fontFamily: documentFontFamily,
        fontSize: '1.25rem',
        fontWeight: 700,
        letterSpacing: 0,
        lineHeight: 1.2,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: uiFontFamily,
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontFamily: uiFontFamily,
          },
        },
      },
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
  {
    variants: [
      'siteDisplay',
      'siteFine',
      'siteMark',
      'siteSection',
      'siteSmall',
      'siteTitle',
    ],
  },
)
