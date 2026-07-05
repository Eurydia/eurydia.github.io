import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import { SectionLabel } from '#/components/common/section-label'
import { ShowMore } from '#/components/common/show-more'
import { ImageDisplay } from '#/components/media/image-display'
import { useVisibleItems } from '#/hooks/use-visible-items'
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
    <Box>
      <List disablePadding>
        {visibleItems.map((item, index) => (
          <ListItem
            key={item.title}
            alignItems="flex-start"
            divider={index < visibleItems.length - 1}
          >
            <Grid container>
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography variant="h3" component="h3">
                  {item.title}
                </Typography>
                <SectionLabel>{item.period}</SectionLabel>

                <Typography variant="body1" component="p">
                  {item.organization}
                </Typography>

                <Box component="ul">
                  {item.details.map((detail) => (
                    <Typography
                      key={detail}
                      component="li"
                      variant="body2"
                      sx={(theme) => ({
                        color: theme.palette.text.secondary,
                      })}
                    >
                      {detail}
                    </Typography>
                  ))}
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <ImageDisplay label={item.title} src={item.imageSrc} />
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
      <ShowMore
        hiddenCount={hiddenCount}
        nextVisibleCount={nextVisibleCount}
        onClick={showMore}
      />
    </Box>
  )
}
