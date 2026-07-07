import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { FC } from 'react'
import { RouterLink } from '#/components/router/router-link'

const navItems = [
  {
    hash: 'maintained',
    label: 'Works',
  },
  {
    hash: 'research',
    label: 'Research',
  },
  {
    hash: 'education',
    label: 'Background',
  },
] as const

export const AppHeader: FC = () => {
  return (
    <Stack
      direction={{
        xs: 'column',
        sm: 'row',
      }}
      spacing={{
        xs: 1.5,
        sm: 3.5,
      }}
      useFlexGap
      sx={(theme) => ({
        alignItems: {
          xs: 'flex-start',
          sm: 'baseline',
        },
        justifyContent: 'space-between',
        borderBottom: `1px solid ${theme.palette.divider}`,
        paddingBottom: theme.spacing(1.5),
      })}
    >
      <Typography variant="siteCopy" color="textPrimary">
        Thanakorn Phuttharaksa
      </Typography>
      <Stack direction="row" spacing={3.5} useFlexGap>
        {navItems.map((item) => (
          <RouterLink
            to="."
            hash={() => item.hash}
            key={item.hash}
            underline="always"
            variant="siteSmall"
            color="textSecondary"
            sx={(theme) => ({
              textTransform: 'uppercase',
              transition: theme.transitions.create(['color']),
              ':hover': {
                color: theme.palette.primary.main,
              },
            })}
          >
            {item.label}
          </RouterLink>
        ))}
      </Stack>
    </Stack>
  )
}
