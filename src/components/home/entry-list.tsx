import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SectionLabel } from '#/components/common/section-label'
import { ShowMore } from '#/components/common/show-more'
import { ImageDisplay } from '#/components/media/image-display'
import { useVisibleItems } from '#/hooks/use-visible-items'
import type { FC } from 'react'
import type { HomeEntryItem } from '#/types/home'

export const EntryList: FC<{
  items: readonly HomeEntryItem[]
  initialVisibleItems?: number
  visibleItemIncrement?: number
}> = (props) => {
  const { hiddenCount, nextVisibleCount, showMore, visibleItems } =
    useVisibleItems(props.items, {
      initialVisibleItems: props.initialVisibleItems,
      visibleItemIncrement: props.visibleItemIncrement,
    })

  return (
    <Box sx={{ minInlineSize: 0 }}>
      <Stack divider={<Divider />} spacing={3} useFlexGap>
        {visibleItems.map((item) => (
          <Box key={item.title} sx={{ minInlineSize: 0 }}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={3}
              sx={{ inlineSize: '100%', minInlineSize: 0 }}
            >
              <Grid size={{ xs: 12, md: 8 }} sx={{ minInlineSize: 0 }}>
                <Stack spacing={1.5} useFlexGap>
                  <Box>
                    <Typography variant="siteTitle">{item.title}</Typography>
                    <SectionLabel>{item.period}</SectionLabel>
                  </Box>

                  <Typography variant="siteCopy">{item.intro}</Typography>

                  <Stack spacing={0.75} useFlexGap>
                    {item.notes.map((note) => (
                      <Typography
                        key={note}
                        variant="siteFine"
                        sx={(theme) => ({
                          color: theme.palette.text.secondary,
                        })}
                      >
                        {note}
                      </Typography>
                    ))}
                  </Stack>

                  <Box>
                    <Typography variant="siteMark">Stack</Typography>
                    <Typography
                      variant="siteFine"
                      sx={(theme) => ({
                        color: theme.palette.text.secondary,
                      })}
                    >
                      {item.tools}
                    </Typography>
                  </Box>

                  <Link
                    href={item.postmortem}
                    underline="always"
                    variant="siteLink"
                    sx={(theme) => ({
                      color: theme.palette.primary.main,
                    })}
                  >
                    Read postmortem
                  </Link>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }} sx={{ minInlineSize: 0 }}>
                <ImageDisplay label={item.title} src={item.imageSrc} />
              </Grid>
            </Grid>
          </Box>
        ))}
      </Stack>
      <ShowMore
        hiddenCount={hiddenCount}
        nextVisibleCount={nextVisibleCount}
        onClick={showMore}
      />
    </Box>
  )
}
