import Box from '@mui/material/Box'
import { alpha, useTheme } from '@mui/material/styles'

import type { FC } from 'react'

export const ImageDisplay: FC<{
  label: string
  width?: number
  height?: number
}> = (props) => {
  const theme = useTheme()
  const imageWidth = props.width ?? 420
  const imageHeight = props.height ?? 260
  const backgroundColor = theme.palette.background.paper.replace('#', '')
  const foregroundColor = theme.palette.primary.main.replace('#', '')
  const src = `https://placehold.co/${imageWidth}x${imageHeight}/${backgroundColor}/${foregroundColor}?text=${encodeURIComponent(props.label)}`

  return (
    <Box
      component="img"
      src={src}
      alt={`Image for ${props.label}`}
      loading="lazy"
      sx={(muiTheme) => ({
        display: 'block',
        width: '100%',
        aspectRatio: `${imageWidth} / ${imageHeight}`,
        objectFit: 'cover',
        border: `1px solid ${muiTheme.palette.divider}`,
        borderRadius: 1,
        bgcolor: muiTheme.palette.background.paper,
        boxShadow: `0 18px 48px ${alpha(muiTheme.palette.primary.main, 0.14)}`,
      })}
    />
  )
}
