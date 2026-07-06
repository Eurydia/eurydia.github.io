import Box from '@mui/material/Box'
import type { FC } from 'react'

export const ImageDisplay: FC<{
  label: string
  src?: string
  width?: number
  height?: number
}> = (props) => {
  const imageWidth = props.width ?? 420
  const imageHeight = props.height ?? 260
  const fallbackSrc = `https://placehold.co/${imageWidth}x${imageHeight}?text=${encodeURIComponent(props.label)}`

  return (
    <Box
      component="img"
      src={props.src ?? fallbackSrc}
      alt={props.label}
      loading="lazy"
      sx={(theme) => ({
        display: 'block',
        objectFit: 'cover',
        bgcolor: theme.palette.background.paper,
        width: '100%',
      })}
    />
  )
}
