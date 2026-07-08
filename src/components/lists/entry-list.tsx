import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { ShowMore } from '#/components/common/show-more'
import { ListCard } from '#/components/lists/list-card'
import { useVisibleItems } from '#/hooks/use-visible-items'
import type { FC } from 'react'
import type { ListCardVariant } from '#/components/lists/list-card'
import type { HomeEntryItem } from '#/types/home'

type EntryListLayout = 'stack' | 'bento' | 'split'

const bentoSpanPattern = [6, 6, 8, 4, 4, 8] as const

const getBentoSpan = (index: number) => {
  if (index === 0) {
    return 12
  }

  return bentoSpanPattern[(index - 1) % bentoSpanPattern.length]
}

const getBentoVariant = (index: number): ListCardVariant => {
  const span = getBentoSpan(index)

  if (index === 0) {
    return 'featured'
  }

  if (span === 8) {
    return 'wide'
  }

  return 'standard'
}

export const EntryList: FC<{
  items: readonly HomeEntryItem[]
  layout?: EntryListLayout
  initialVisibleItems?: number
  visibleItemIncrement?: number
}> = (props) => {
  const { hiddenCount, nextVisibleCount, showMore, visibleItems } =
    useVisibleItems(props.items, {
      initialVisibleItems: props.initialVisibleItems,
      visibleItemIncrement: props.visibleItemIncrement,
    })

  if (props.layout === 'bento') {
    return (
      <Grid container spacing={3}>
        {visibleItems.map((item, index) => (
          <Grid key={item.key} size={{ xs: 12, md: getBentoSpan(index) }}>
            <ListCard
              index={String(index + 1).padStart(2, '0')}
              label={item.period}
              card={item.card}
              variant={getBentoVariant(index)}
              readMore={{
                article: item.detailed,
              }}
            />
          </Grid>
        ))}
        <Grid size={{ xs: 12 }}>
          <ShowMore
            hiddenCount={hiddenCount}
            nextVisibleCount={nextVisibleCount}
            onClick={showMore}
          />
        </Grid>
      </Grid>
    )
  }

  return (
    <Stack spacing={3} useFlexGap>
      {visibleItems.map((item, index) => (
        <ListCard
          key={item.key}
          index={String(index + 1).padStart(2, '0')}
          label={item.period}
          card={item.card}
          variant={props.layout === 'split' ? 'split' : 'standard'}
          readMore={{
            article: item.detailed,
          }}
        />
      ))}
      <ShowMore
        hiddenCount={hiddenCount}
        nextVisibleCount={nextVisibleCount}
        onClick={showMore}
      />
    </Stack>
  )
}
