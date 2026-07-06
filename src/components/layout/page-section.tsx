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
    <Stack id={props.id} spacing={4} useFlexGap>
      <Stack spacing={1} useFlexGap>
        <Typography variant="siteSection">{props.title}</Typography>
        <Typography variant="siteCopy" color="textSecondary">
          {props.body}
        </Typography>
      </Stack>
      {props.children}
    </Stack>
  )
}
