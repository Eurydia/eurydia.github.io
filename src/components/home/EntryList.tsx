import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { SectionLabel } from '#/components/common/SectionLabel'
import { ShowMore } from '#/components/common/ShowMore'
import { ImageDisplay } from '#/components/media/ImageDisplay'
import { useVisibleItems } from '#/hooks/useVisibleItems'

import type { FC } from 'react'
import type { HomeEntryItem } from '#/types/home'

export const EntryList: FC<{
  items: readonly HomeEntryItem[]
  initialVisibleItems: number
  visibleItemIncrement: number
}> = (props) => {
  const { hiddenCount, nextVisibleCount, showMore, visibleItems } =
    useVisibleItems(props.items, {
      initialVisibleItems: props.initialVisibleItems,
      visibleItemIncrement: props.visibleItemIncrement,
    })

  return (
    <Stack spacing={2.5}>
      <Stack
        divider={<Divider />}
      >
        {visibleItems.map((item) => (
          <Box
            key={item.title}
            sx={{
              maxWidth: 1080,
              py: { xs: 3, md: 3.5 },
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) 300px' },
                gap: { xs: 2.5, md: 4 },
                alignItems: 'start',
              }}
            >
              <Stack spacing={2}>
                <Box>
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: 22,
                      fontWeight: 760,
                      lineHeight: 1.15,
                      letterSpacing: 0,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <SectionLabel>{item.period}</SectionLabel>
                </Box>

                <Typography
                  color="text.primary"
                  sx={{
                    fontSize: 16,
                    lineHeight: 1.7,
                  }}
                >
                  {item.intro}
                </Typography>

                <Stack component="ul" spacing={0.8} sx={{ m: 0, pl: 2.25 }}>
                  {item.notes.map((note) => (
                    <Typography
                    key={note}
                    component="li"
                    color="text.secondary"
                    sx={{
                      fontSize: 15,
                      lineHeight: 1.65,
                      pl: 0.25,
                    }}
                  >
                      {note}
                    </Typography>
                  ))}
                </Stack>

                <Box>
                <Typography
                  color="text.primary"
                  sx={{
                    fontSize: 13,
                    fontWeight: 760,
                    letterSpacing: 0,
                    textTransform: 'uppercase',
                  }}
                >
                    Stack
                  </Typography>
                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 0.4,
                    fontSize: 14,
                    lineHeight: 1.6,
                  }}
                >
                    {item.tools}
                  </Typography>
                </Box>

                <Link
                  href={item.postmortem}
                  underline="always"
                  color="primary"
                  sx={{
                    fontSize: 14,
                    fontWeight: 760,
                    width: 'fit-content',
                  }}
                >
                  Read postmortem
                </Link>
              </Stack>
              <ImageDisplay label={item.title} />
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
