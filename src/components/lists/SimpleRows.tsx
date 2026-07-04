import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { ShowMore } from '#/components/common/ShowMore'
import { ImageDisplay } from '#/components/media/ImageDisplay'
import { useVisibleItems } from '#/hooks/useVisibleItems'

import type { FC } from 'react'
import type { SimpleRowItem } from '#/types/content'

export const SimpleRows: FC<{
  items: readonly SimpleRowItem[]
  initialVisibleItems?: number
  visibleItemIncrement?: number
}> = (props) => {
  const { hiddenCount, nextVisibleCount, showMore, visibleItems } =
    useVisibleItems(props.items, {
      initialVisibleItems: props.initialVisibleItems,
      visibleItemIncrement: props.visibleItemIncrement,
    })

  return (
    <Stack spacing={2.5}>
      <Stack
        divider={
          <Divider sx={(theme) => ({ borderColor: theme.palette.divider })} />
        }
      >
        {visibleItems.map((item) => (
          <Box key={item.title} sx={{ maxWidth: 980, py: 2.5 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) 240px' },
                gap: { xs: 2, md: 3 },
                alignItems: 'start',
              }}
            >
              <Stack spacing={0.75}>
                <Typography
                  component="h3"
                  sx={{ fontSize: 20, fontWeight: 760, lineHeight: 1.25 }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={(theme) => ({
                    color: theme.palette.text.secondary,
                    fontSize: 15,
                    lineHeight: 1.65,
                  })}
                >
                  {item.body}
                </Typography>
              </Stack>
              <ImageDisplay label={item.title} width={320} height={200} />
            </Box>
          </Box>
        ))}
      </Stack>
      <ShowMore
        hiddenCount={hiddenCount}
        nextVisibleCount={nextVisibleCount}
        onClick={showMore}
      />
    </Stack>
  )
}
