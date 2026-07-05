import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import type { FC, ReactNode } from 'react'

export const AppFooter: FC = () => {
  return (
    <Box
      component="footer"
      color="text.primary"
      sx={(theme) => ({
        bgcolor: alpha(theme.palette.primary.main, 0.06),
        borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
      })}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2.5, sm: 4 },
          py: { xs: 4, md: 5 },
        }}
      >
        <Stack spacing={3}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 2.5, md: 4 }}
            sx={{
              alignItems: { xs: 'flex-start', md: 'flex-end' },
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ maxWidth: 460 }}>
              <Typography
                component="p"
                color="primary"
                sx={{
                  fontSize: 12,
                  fontWeight: 760,
                  letterSpacing: 0,
                  textTransform: 'uppercase',
                }}
              >
                Thanakorn Phuttharaksa
              </Typography>
              <Typography
                color="text.secondary"
                sx={{
                  mt: 0.75,
                  fontSize: 15,
                  lineHeight: 1.65,
                }}
              >
                Portfolio and project notes.
              </Typography>
            </Box>

            <Stack
              direction="row"
              spacing={2}
              useFlexGap
              sx={{ flexWrap: 'wrap' }}
            >
              <FooterLink href="mailto:tphuttharaksabusiness@gmail.com">
                Email
              </FooterLink>
              <FooterLink
                href="https://github.com/Eurydia"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </FooterLink>
            </Stack>
          </Stack>

          <Box
            sx={(theme) => ({
              borderTop: `1px solid ${theme.palette.divider}`,
              pt: 2,
            })}
          >
            <Typography
              color="text.secondary"
              sx={{
                fontSize: 13,
              }}
            >
              {`© ${new Date().getFullYear()} Thanakorn Phuttharaksa`}
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

const FooterLink: FC<{
  href: string
  target?: string
  rel?: string
  children: ReactNode
}> = (props) => {
  return (
    <Link
      href={props.href}
      target={props.target}
      rel={props.rel}
      underline="always"
      color="text.primary"
      sx={{
        fontSize: 14,
        fontWeight: 700,
      }}
    >
      {props.children}
    </Link>
  )
}
