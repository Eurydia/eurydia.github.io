import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

import type { FC } from 'react'

export const ImageDisplay: FC<{
  label: string
  src?: string
  width?: number
  height?: number
}> = (props) => {
  const theme = useTheme()
  const imageWidth = props.width ?? 420
  const imageHeight = props.height ?? 260
  const backgroundColor = theme.palette.background.paper.replace('#', '')
  const foregroundColor = theme.palette.primary.main.replace('#', '')
  const fallbackSrc = `https://placehold.co/${imageWidth}x${imageHeight}/${backgroundColor}/${foregroundColor}?text=${encodeURIComponent(props.label)}`

  return (
    <Box
      component="img"
      src={props.src ?? fallbackSrc}
      alt={props.label}
      loading="lazy"
      sx={(theme) => ({
        display: 'block',
        inlineSize: '100%',
        aspectRatio: `${imageWidth} / ${imageHeight}`,
        objectFit: 'cover',
        border: 1,
        borderColor: 'divider',
        borderRadius: theme.shape.borderRadius,
        bgcolor: 'background.paper',
      })}
    />
  )
}
