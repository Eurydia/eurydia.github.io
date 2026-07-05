import Typography from '@mui/material/Typography'

import type { FC, ReactNode } from 'react'

export const SectionLabel: FC<{ children: ReactNode }> = (props) => {
  return (
    <Typography variant="overline" color="primary">
      {props.children}
    </Typography>
  )
}
