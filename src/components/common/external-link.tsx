import IconButton from '@mui/material/IconButton'
import type { FC, ReactNode } from 'react'

export const ExternalLink: FC<{
  href: string
  target?: string
  rel?: string
  children: ReactNode
}> = (props) => {
  return (
    <IconButton
      disableTouchRipple
      component="a"
      href={props.href}
      target={'_blank'}
      rel={'noreferrer'}
      color="primary"
    >
      {props.children}
    </IconButton>
  )
}
