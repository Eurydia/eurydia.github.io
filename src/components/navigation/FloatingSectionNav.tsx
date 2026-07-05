import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { alpha } from '@mui/material/styles'
import type { FC } from 'react'
import type { SectionNavItem } from '#/types/navigation'

export const FloatingSectionNav: FC<{
  items: readonly SectionNavItem[]
  label: string
}> = (props) => {
  return (
    <Box
      component="nav"
      aria-label={props.label}
      sx={{
        position: 'fixed',
        top: '50%',
        right: { md: 22, lg: 36 },
        zIndex: 10,
        display: { xs: 'none', md: 'flex' },
        transform: 'translateY(-50%)',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 1.35,
      }}
    >
      {props.items.map((item) => (
        <Link
          key={item.id}
          href={`#${item.id}`}
          title={item.label}
          aria-label={item.label}
          sx={(theme) => ({
            width: 42,
            height: 4,
            borderRadius: 999,
            bgcolor: alpha(theme.palette.text.primary, 0.32),
            transition: 'background-color 160ms ease, width 160ms ease',
            '&:hover': {
              width: 54,
              bgcolor: 'primary.main',
            },
          })}
        />
      ))}
    </Box>
  )
}
