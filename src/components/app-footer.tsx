import GitHubIcon from '@mui/icons-material/GitHub'
import GoogleIcon from '@mui/icons-material/Google'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { CopyTextButton } from '#/components/common/copy-text-button'
import { ExternalLink } from '#/components/common/external-link'
import type { FC } from 'react'

export const AppFooter: FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={(theme) => ({
        px: {
          xs: theme.spacing(2.5),
          sm: theme.spacing(4),
        },
        pb: {
          xs: theme.spacing(4),
          md: theme.spacing(5),
        },
      })}
    >
      <Divider />
      <Stack spacing={2} useFlexGap sx={(theme) => ({ pt: theme.spacing(2) })}>
        <Stack
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          spacing={{
            xs: 1.5,
            sm: 3,
          }}
          useFlexGap
          sx={{
            alignItems: {
              xs: 'flex-start',
              sm: 'center',
            },
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant="siteMark" color="primary">
              Thanakorn Phuttharaksa
            </Typography>
            <Typography variant="siteFine" color="textSecondary">
              Portfolio and project notes.
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={2}
            useFlexGap
            sx={{
              flexWrap: 'wrap',
            }}
          >
            <CopyTextButton
              label="Gmail"
              text="tphuttharaksabusiness@gmail.com"
            >
              <GoogleIcon />
            </CopyTextButton>
            <ExternalLink href="https://github.com/Eurydia" label="GitHub">
              <GitHubIcon />
            </ExternalLink>
          </Stack>
        </Stack>

        <Typography variant="siteSmall" color="textSecondary">
          {`© ${new Date().getFullYear()} Thanakorn Phuttharaksa`}
        </Typography>
      </Stack>
    </Container>
  )
}
