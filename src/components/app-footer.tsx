import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GoogleIcon from '@mui/icons-material/Google'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { CopyTextButton } from '#/components/common/copy-text-button'
import { ExternalLink } from '#/components/common/external-link'
import type { FC } from 'react'

export const AppFooter: FC = () => {
  return (
    <Stack
      direction={{
        xs: 'column',
        sm: 'row',
      }}
      useFlexGap
      spacing={{
        xs: 1.5,
        sm: 3,
      }}
      sx={{
        alignItems: {
          xs: 'flex-start',
          sm: 'center',
        },
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="siteSmall" color="textSecondary">
        {`© ${new Date().getFullYear()} Thanakorn Phuttharaksa`}
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        useFlexGap
        sx={{
          flexWrap: 'wrap',
        }}
      >
        <CopyTextButton text="tphuttharaksabusiness@gmail.com">
          <GoogleIcon color="action" />
        </CopyTextButton>
        <ExternalLink href="https://github.com/Eurydia">
          <GitHubIcon color="action" />
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/thanakorn-phuttharaksa-120b361a1/">
          <LinkedInIcon color="action" />
        </ExternalLink>
      </Stack>
    </Stack>
  )
}
