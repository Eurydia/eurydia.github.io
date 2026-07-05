import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import CssBaseline from '@mui/material/CssBaseline'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../theme'
import { AppFooter } from '#/components/app-footer'
import { GridBackground } from '#/components/layout/grid-background'
import type { ReactNode } from 'react'

const RootDocument = (props: { children: ReactNode }) => {
  return (
    <html lang={'en'} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <InitColorSchemeScript attribute="class" defaultMode="system" />
        <ThemeProvider theme={theme} defaultMode="light">
          <CssBaseline enableColorScheme />
          <GridBackground>
            {props.children}
            <AppFooter />
          </GridBackground>
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
  }),
  shellComponent: RootDocument,
})
