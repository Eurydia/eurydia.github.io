import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import { MarkdownArticle } from '#/components/content/markdown-article'
import { useState } from 'react'
import type { FC } from 'react'

export type ListCardVariant = 'standard' | 'featured' | 'wide' | 'split'

export const ListCard: FC<{
  index: string
  label?: string
  card: string
  variant?: ListCardVariant
  readMore?: {
    article: string
  }
}> = (props) => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false)
  const cardVariant = props.variant ?? 'standard'
  const isFeatured = cardVariant === 'featured'
  const isWide = cardVariant === 'wide'
  const isSplit = cardVariant === 'split'

  const handleReadMoreOpen = () => {
    setIsReadMoreOpen(true)
  }

  const handleReadMoreClose = () => {
    setIsReadMoreOpen(false)
  }

  const handleDialogClose = (
    _event: object,
    reason: 'backdropClick' | 'escapeKeyDown',
  ) => {
    if (reason === 'backdropClick') {
      return
    }

    handleReadMoreClose()
  }

  return (
    <Paper
      variant="outlined"
      sx={(theme) => ({
        position: 'relative',
        overflow: 'visible',
        padding: {
          xs: theme.spacing(3),
          md:
            isFeatured || isSplit || isWide
              ? theme.spacing(4)
              : theme.spacing(3),
        },
        borderColor: theme.palette.divider,
        borderRadius: 0,
        borderBlockStart: isFeatured
          ? `3px solid ${theme.palette.primary.main}`
          : undefined,
        backgroundColor: theme.palette.background.paper,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '::before': isFeatured
          ? {
              content: 'none',
            }
          : {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: theme.spacing(1.5),
              height: theme.spacing(1.5),
              borderTop: `2px solid ${alpha(theme.palette.primary.main, 0.68)}`,
              borderLeft: `2px solid ${alpha(theme.palette.primary.main, 0.68)}`,
              transition: theme.transitions.create([
                'border-color',
                'width',
                'height',
              ]),
            },
        ':hover, :focus-within': {
          borderColor: isFeatured
            ? theme.palette.divider
            : alpha(theme.palette.primary.main, 0.72),
          boxShadow: isFeatured
            ? undefined
            : `${theme.spacing(0.5)} ${theme.spacing(0.5)} 0 ${theme.palette.primary.main}`,
        },
        ':hover::before, :focus-within::before': isFeatured
          ? undefined
          : {
              width: theme.spacing(2.5),
              height: theme.spacing(2.5),
              borderTopColor: theme.palette.primary.main,
              borderLeftColor: theme.palette.primary.main,
            },
      })}
    >
      <Stack spacing={3} useFlexGap>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="siteSmall" color="primary">
            {props.index}
          </Typography>
          <Box
            sx={(theme) => ({
              flex: 1,
              borderBlockStart: `1px solid ${theme.palette.divider}`,
            })}
          />
          {props.label && (
            <Typography variant="siteSmall" color="textSecondary">
              {props.label}
            </Typography>
          )}
        </Stack>
        <MarkdownArticle content={props.card} />
        {props.readMore && (
          <Box>
            <Button
              disableRipple
              variant="text"
              size="small"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              onClick={handleReadMoreOpen}
            >
              Read more
            </Button>
          </Box>
        )}
      </Stack>
      {props.readMore && (
        <Dialog
          open={isReadMoreOpen}
          onClose={handleDialogClose}
          fullWidth
          scroll="body"
          maxWidth={isFeatured || isSplit ? 'md' : 'sm'}
        >
          <IconButton
            disableRipple
            color="default"
            onClick={handleReadMoreClose}
            sx={(theme) => ({
              position: 'fixed',
              top: theme.spacing(2),
              left: theme.spacing(2),
              zIndex: theme.zIndex.modal + 1,
            })}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent>
            <MarkdownArticle content={props.readMore.article} />
          </DialogContent>
        </Dialog>
      )}
    </Paper>
  )
}
