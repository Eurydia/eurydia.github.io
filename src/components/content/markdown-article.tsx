import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ImageDisplay } from '#/components/media/image-display'
import { Children, isValidElement } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { FC, ReactNode } from 'react'

const isImageDisplayElement = (child: ReactNode) => {
  return isValidElement(child) && child.type === ImageDisplay
}

export const MarkdownArticle: FC<{
  content: string
  imageVariant?: 'article' | 'card' | 'featured'
  density?: 'article' | 'card'
}> = (props) => {
  const titleVariant = props.density === 'card' ? 'siteCardTitle' : 'siteTitle'
  const copyVariant = props.density === 'card' ? 'siteCardCopy' : 'siteCopy'
  const fineVariant = props.density === 'card' ? 'siteCardFine' : 'siteFine'

  return (
    <Stack spacing={props.density === 'card' ? 1.5 : 2} useFlexGap>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: (markdownProps) => (
            <Link
              href={markdownProps.href}
              underline="always"
              variant="siteLink"
              color="primary"
            >
              {markdownProps.children}
            </Link>
          ),
          code: (markdownProps) => (
            <Box
              component="code"
              sx={(theme) => ({
                backgroundColor: theme.palette.action.hover,
                color: theme.palette.text.primary,
                paddingInline: theme.spacing(0.5),
              })}
            >
              {markdownProps.children}
            </Box>
          ),
          h1: (markdownProps) => (
            <Typography variant={titleVariant} color="textPrimary">
              {markdownProps.children}
            </Typography>
          ),
          h2: (markdownProps) => (
            <Typography variant={titleVariant} color="textPrimary">
              {markdownProps.children}
            </Typography>
          ),
          h3: (markdownProps) => (
            <Typography variant={titleVariant} color="textPrimary">
              {markdownProps.children}
            </Typography>
          ),
          img: (markdownProps) => (
            <ImageDisplay
              label={markdownProps.alt ?? 'Image'}
              src={markdownProps.src}
              variant={props.imageVariant ?? 'article'}
            />
          ),
          li: (markdownProps) => (
            <Box
              component="li"
              sx={(theme) => ({
                paddingInlineStart: theme.spacing(0.5),
              })}
            >
              <Typography
                component="span"
                variant={fineVariant}
                color="textSecondary"
              >
                {markdownProps.children}
              </Typography>
            </Box>
          ),
          p: (markdownProps) => {
            const children = Children.toArray(markdownProps.children)

            if (children.some(isImageDisplayElement)) {
              return (
                <Stack spacing={2} useFlexGap>
                  {markdownProps.children}
                </Stack>
              )
            }

            return (
              <Typography variant={copyVariant} color="textSecondary">
                {markdownProps.children}
              </Typography>
            )
          },
          strong: (markdownProps) => (
            <Box
              component="strong"
              sx={(theme) => ({
                color: theme.palette.text.primary,
                fontWeight: theme.typography.fontWeightBold,
              })}
            >
              {markdownProps.children}
            </Box>
          ),
          ul: (markdownProps) => (
            <Stack
              component="ul"
              spacing={props.density === 'card' ? 0.5 : 1}
              useFlexGap
              sx={(theme) => ({
                margin: 0,
                paddingInlineStart: theme.spacing(2.25),
                color: theme.palette.text.secondary,
              })}
            >
              {markdownProps.children}
            </Stack>
          ),
        }}
      >
        {props.content}
      </ReactMarkdown>
    </Stack>
  )
}
