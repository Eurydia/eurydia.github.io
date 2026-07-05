import Box from '@mui/material/Box'
import { alpha } from '@mui/material/styles'

import type { FC, ReactNode } from 'react'

export const GridBackground: FC<{ children: ReactNode }> = (props) => {
  return (
    <Box
      color="text.primary"
      sx={(theme) => ({
        minHeight: '100dvh',
        bgcolor: theme.palette.background.default,
        backgroundImage: [
          `linear-gradient(${alpha(theme.palette.primary.main, 0.08)} 1px, ${alpha(theme.palette.primary.main, 0)} 1px)`,
          `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.08)} 1px, ${alpha(theme.palette.primary.main, 0)} 1px)`,
        ].join(', '),
        backgroundPosition: 'center top',
        backgroundSize: '32px 32px',
      })}
    >
      {props.children}
    </Box>
  )
}
