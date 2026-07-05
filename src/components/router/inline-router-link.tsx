import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { RouterLink } from './router-link'
import type { ComponentProps, FC, ReactNode } from 'react'

export const InlineRouterLink: FC<
  Omit<ComponentProps<typeof RouterLink>, 'children' | 'color' | 'sx'> & {
    children: ReactNode
  }
> = (props) => {
  return (
    <RouterLink
      {...props}
      underline={props.underline ?? 'always'}
      sx={(theme) => ({
        color: theme.palette.primary.main,
      })}
    >
      {props.children} <ArrowForwardIcon fontSize="inherit" />
    </RouterLink>
  )
}
