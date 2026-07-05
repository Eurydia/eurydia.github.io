import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { RouterLink } from './router-link'
import type { ComponentProps, FC, ReactNode } from 'react'

export const InlineRouterLink: FC<
  Omit<ComponentProps<typeof RouterLink>, 'children'> & {
    children: ReactNode
  }
> = (props) => {
  return (
    <RouterLink
      {...props}
      underline={props.underline ?? 'always'}
      color={props.color ?? 'primary'}
    >
      {props.children} <ArrowForwardIcon fontSize="inherit" />
    </RouterLink>
  )
}
