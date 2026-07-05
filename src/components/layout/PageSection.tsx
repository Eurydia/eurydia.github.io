import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import type { FC, ReactNode } from 'react'

export const PageSection: FC<{
  id: string
  title: string
  body: string
  children: ReactNode
}> = (props) => {
  return (
    <Stack
      id={props.id}
      component="section"
      spacing={3}
      sx={{
        maxWidth: 980,
        scrollMarginTop: 96,
      }}
    >
      <Stack spacing={1} sx={{ maxWidth: 760 }}>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: 30, md: 38 },
            fontWeight: 760,
            lineHeight: 1.05,
            letterSpacing: 0,
          }}
        >
          {props.title}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{
            fontSize: 16,
            lineHeight: 1.7,
          }}
        >
          {props.body}
        </Typography>
      </Stack>
      {props.children}
    </Stack>
  )
}
