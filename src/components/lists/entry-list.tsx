import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SectionLabel } from '#/components/common/section-label'
import { ShowMore } from '#/components/common/show-more'
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
    <Stack spacing={6} useFlexGap>
      {visibleItems.map((item) => (
        <Paper
          variant="outlined"
          key={item.title}
          sx={{
            padding: 4,
            backgroundColor: (t) => t.palette.background.default,
          }}
        >
          <Stack spacing={3} useFlexGap>
            <Stack spacing={1} useFlexGap>
              <Typography variant="siteTitle">{item.title}</Typography>
              <SectionLabel>{item.period}</SectionLabel>
            </Stack>
            <Typography variant="siteCopy">{item.intro}</Typography>
            <Stack spacing={3} useFlexGap>
              {item.notes.map((note) => (
                <Typography key={note} variant="siteFine" color="textSecondary">
                  {note}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Paper>
      ))}
      <ShowMore
        hiddenCount={hiddenCount}
        nextVisibleCount={nextVisibleCount}
        onClick={showMore}
      />
    </Stack>
  )
}
