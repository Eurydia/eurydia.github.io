import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import type { FC, ReactNode } from 'react'

export const ExternalLink: FC<{
  href: string
  label: string
  target?: string
  rel?: string
  children: ReactNode
}> = (props) => {
  const shouldOpenInNewTab = props.href.startsWith('http')

  return (
    <Tooltip title={props.label}>
      <IconButton
        component="a"
        href={props.href}
        target={props.target ?? (shouldOpenInNewTab ? '_blank' : undefined)}
        rel={props.rel ?? (shouldOpenInNewTab ? 'noreferrer' : undefined)}
        color="primary"
        aria-label={props.label}
      >
        {props.children}
      </IconButton>
    </Tooltip>
  )
}
