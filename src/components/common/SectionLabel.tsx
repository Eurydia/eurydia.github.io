import Typography from '@mui/material/Typography'

import type { FC, ReactNode } from 'react'

export const SectionLabel: FC<{ children: ReactNode }> = (props) => {
  return (
    <Typography
      color="primary"
      sx={{
        mt: 0.75,
        fontSize: 12,
        fontWeight: 760,
        letterSpacing: 0,
        textTransform: 'uppercase',
      }}
    >
      {props.children}
    </Typography>
  )
}
