import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { FC } from 'react'

export const ImageDisplay: FC<{
  label: string
  src?: string
  variant?: 'article' | 'card' | 'featured'
  width?: number
  height?: number
}> = (props) => {
  const imageWidth = props.width ?? 960
  const imageHeight = props.height ?? 540
  const fallbackSrc = `https://placehold.co/${imageWidth}x${imageHeight}?text=${encodeURIComponent(props.label)}`
  const isCardImage = props.variant === 'card'
  const isFeaturedImage = props.variant === 'featured'
  const shouldHideCaption = isCardImage || isFeaturedImage

  return (
    <Stack
      component="figure"
      spacing={1}
      useFlexGap
      sx={(theme) => ({
        alignSelf: isCardImage || isFeaturedImage ? 'flex-start' : undefined,
        inlineSize: isCardImage
          ? theme.spacing(12)
          : isFeaturedImage
            ? {
                xs: '100%',
                md: theme.spacing(32),
              }
            : undefined,
        margin: 0,
        padding: isCardImage ? theme.spacing(0.5) : theme.spacing(1),
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.default,
      })}
    >
      <Box
        component="img"
        src={props.src || fallbackSrc}
        alt={props.label}
        loading="lazy"
        sx={(theme) => ({
          display: 'block',
          objectFit: 'cover',
          width: '100%',
          height: isCardImage
            ? theme.spacing(8)
            : isFeaturedImage
              ? theme.spacing(20)
              : undefined,
        })}
      />
      <Typography
        variant="siteSmall"
        color="textSecondary"
        sx={{
          display: shouldHideCaption ? 'none' : undefined,
        }}
      >
        {props.label}
      </Typography>
    </Stack>
  )
}
