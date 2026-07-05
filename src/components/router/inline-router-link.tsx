import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { RouterLink } from './router-link'

import type { FC, ReactNode } from 'react'

export const InlineRouterLink: FC<{
  to: '/portfolio'
  children: ReactNode
}> = (props) => {
  return (
    <RouterLink
      to={props.to}
      underline="always"
      color="primary"
      sx={{
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: 0.35,
        fontWeight: 760,
      }}
    >
      {props.children}
      <ArrowForwardIcon
        sx={{ fontSize: '0.9em', transform: 'translateY(2px)' }}
      />
    </RouterLink>
  )
}
