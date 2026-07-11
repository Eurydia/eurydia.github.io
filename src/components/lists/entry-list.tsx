import Stack from '@mui/material/Stack'
import { ShowMore } from '#/components/common/show-more'
import { ListCard } from '#/components/lists/list-card'
import { useVisibleItems } from '#/hooks/use-visible-items'
import type { FC } from 'react'
import type { HomeEntryItem } from '#/types/home'
import Grid from '@mui/material/Grid'

export const EntryList: FC<{
  items: readonly HomeEntryItem[]
  initialVisibleItems?: number
  visibleItemIncrement?: number
  variant: 'stacked' | 'bento'
}> = (props) => {
  const { hiddenCount, nextVisibleCount, showMore, visibleItems } =
    useVisibleItems(props.items, {
      initialVisibleItems: props.initialVisibleItems,
      visibleItemIncrement: props.visibleItemIncrement,
    })

  return (
    <Stack spacing={3} useFlexGap>
      {props.variant === 'stacked' ? (
        <>
          {visibleItems.map((item, index) => (
            <ListCard
              key={item.key}
              index={String(index + 1).padStart(2, '0')}
              label={item.period}
              card={item.card}
              readMore={item.detailed ? { article: item.detailed } : undefined}
            />
          ))}
        </>
      ) : (
        <>
          {visibleItems.slice(0, 1).map((item, index) => (
            <ListCard
              key={item.key}
              index={String(index + 1).padStart(2, '0')}
              label={item.period}
              card={item.card}
              readMore={item.detailed ? { article: item.detailed } : undefined}
            />
          ))}
          <Grid container columns={2} spacing={3}>
            {visibleItems.slice(1).map((item, index) => (
              <Grid key={item.key} size={1}>
                <ListCard
                  index={String(index + 2).padStart(2, '0')}
                  label={item.period}
                  card={item.card}
                  readMore={
                    item.detailed ? { article: item.detailed } : undefined
                  }
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}

      <ShowMore
        hiddenCount={hiddenCount}
        nextVisibleCount={nextVisibleCount}
        onClick={showMore}
      />
    </Stack>
  )
}
