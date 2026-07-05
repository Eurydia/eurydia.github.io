import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { SectionLabel } from '#/components/common/SectionLabel'
import { ShowMore } from '#/components/common/ShowMore'
import { ImageDisplay } from '#/components/media/ImageDisplay'
import { useVisibleItems } from '#/hooks/useVisibleItems'

import type { FC } from 'react'
import type { HomeExperienceItem } from '#/types/home'

export const ExperienceList: FC<{
  items: readonly HomeExperienceItem[]
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
          <Box key={item.title} sx={{ maxWidth: 1080, py: 2.75 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) 280px' },
                gap: { xs: 2.5, md: 4 },
                alignItems: 'start',
              }}
            >
              <Stack spacing={1.25}>
                <Box>
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: 21,
                      fontWeight: 760,
                      lineHeight: 1.2,
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
                    fontSize: 15,
                    lineHeight: 1.65,
                  }}
                >
                  {item.organization}
                </Typography>

                <Stack component="ul" spacing={0.75} sx={{ m: 0, pl: 2 }}>
                  {item.details.map((detail) => (
                    <Typography
                    key={detail}
                    component="li"
                    color="text.secondary"
                    sx={{
                      fontSize: 14,
                      lineHeight: 1.65,
                    }}
                  >
                      {detail}
                    </Typography>
                  ))}
                </Stack>
              </Stack>
              <ImageDisplay label={item.title} width={360} height={220} />
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
