import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { FC } from 'react'

export const MarkdownArticle: FC<{ content: string }> = (props) => {
  return (
    <Stack spacing={2} useFlexGap>
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
          h2: (markdownProps) => (
            <Typography variant="siteTitle" color="textPrimary">
              {markdownProps.children}
            </Typography>
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
                variant="siteFine"
                color="textSecondary"
              >
                {markdownProps.children}
              </Typography>
            </Box>
          ),
          p: (markdownProps) => (
            <Typography variant="siteCopy" color="textSecondary">
              {markdownProps.children}
            </Typography>
          ),
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
              spacing={1}
              useFlexGap
              sx={(theme) => ({
                margin: 0,
                paddingInlineStart: theme.spacing(2.5),
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
