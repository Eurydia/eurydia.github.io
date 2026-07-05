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
      sx={(theme) => ({
        gap: theme.spacing(4),
      })}
    >
      <Stack
        sx={(theme) => ({
          gap: theme.spacing(1),
        })}
      >
        <Typography variant="h2" component="h2">
          {props.title}
        </Typography>
        <Typography
          variant="body1"
          sx={(theme) => ({
            color: theme.palette.text.secondary,
          })}
        >
          {props.body}
        </Typography>
      </Stack>
      {props.children}
    </Stack>
  )
}
