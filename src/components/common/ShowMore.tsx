import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

import type { FC } from 'react'

export const ShowMore: FC<{
  hiddenCount: number
  nextVisibleCount: number
  onClick: () => void
}> = (props) => {
  if (props.hiddenCount <= 0) {
    return null
  }

  return (
    <Box>
      <Link
        component="button"
        type="button"
        underline="always"
        onClick={props.onClick}
        sx={(theme) => ({
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.4,
          p: 0,
          border: 0,
          color: theme.palette.primary.main,
          cursor: 'pointer',
          font: 'inherit',
          fontSize: 14,
          fontWeight: 760,
        })}
      >
        Show {props.nextVisibleCount} more
        <ExpandMoreIcon sx={{ fontSize: 18 }} />
      </Link>
    </Box>
  )
}
