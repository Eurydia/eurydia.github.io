import Typography from '@mui/material/Typography'
import type { FC, ReactNode } from 'react'

export const SectionLabel: FC<{ children: ReactNode }> = (props) => {
  return (
    <Typography variant="siteMark" color="textSecondary">
      {props.children}
    </Typography>
  )
}
