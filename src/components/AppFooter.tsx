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
      sx={(theme) => ({
        bgcolor: alpha(theme.palette.primary.main, 0.06),
        borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
        color: theme.palette.text.primary,
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
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'flex-end' }}
          >
            <Box sx={{ maxWidth: 460 }}>
              <Typography
                component="p"
                sx={(theme) => ({
                  color: theme.palette.primary.main,
                  fontSize: 12,
                  fontWeight: 760,
                  letterSpacing: 0,
                  textTransform: 'uppercase',
                })}
              >
                Thanakorn Phuttharaksa
              </Typography>
              <Typography
                sx={(theme) => ({
                  mt: 0.75,
                  color: theme.palette.text.secondary,
                  fontSize: 15,
                  lineHeight: 1.65,
                })}
              >
                Portfolio and project notes.
              </Typography>
            </Box>

            <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
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
              sx={(theme) => ({
                color: theme.palette.text.secondary,
                fontSize: 13,
              })}
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
      sx={(theme) => ({
        color: theme.palette.text.primary,
        fontSize: 14,
        fontWeight: 700,
      })}
    >
      {props.children}
    </Link>
  )
}
