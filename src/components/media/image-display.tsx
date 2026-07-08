import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { FC } from 'react'

export const ImageDisplay: FC<{
  label: string
  src?: string
  width?: number
  height?: number
}> = (props) => {
  const imageWidth = props.width ?? 960
  const imageHeight = props.height ?? 540
  const fallbackSrc = `https://placehold.co/${imageWidth}x${imageHeight}?text=${encodeURIComponent(props.label)}`

  return (
    <Stack
      component="figure"
      spacing={1}
      useFlexGap
      sx={(theme) => ({
        margin: 0,
        padding: theme.spacing(1),
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.default,
      })}
    >
      <Box
        component="img"
        src={props.src || fallbackSrc}
        alt={props.label}
        loading="lazy"
        sx={{
          display: 'block',
          objectFit: 'cover',
          width: '100%',
        }}
      />
      <Typography variant="siteSmall" color="textSecondary">
        {props.label}
      </Typography>
    </Stack>
  )
}
