import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { createFileRoute } from '@tanstack/react-router'
import { PageSection } from '#/components/layout/page-section'
import { EntryList } from '#/components/lists/entry-list'
import { AppFooter } from '#/components/app-footer'
import { AppHeader } from '#/components/app-header'
import { LandingHero } from '#/components/landing/landing-hero'
import {
  builtProjects,
  educationItems,
  experienceItems,
  maintainedProjects,
  researchItems,
} from '#/content/home'

export const Route = createFileRoute('/')({ component: HomeRoute, ssr: true })

function HomeRoute() {
  return (
    <Container
      maxWidth="md"
      sx={(theme) => ({
        paddingY: {
          xs: theme.spacing(10),
          md: theme.spacing(12),
        },
      })}
    >
      <Stack spacing={{ xs: 7, md: 9 }} useFlexGap>
        <AppHeader />
        <LandingHero />
        <PageSection
          id="maintained"
          title="Projects I maintain"
          count={maintainedProjects.length}
        >
          <EntryList items={maintainedProjects} />
        </PageSection>

        <PageSection
          id="built"
          title="Other projects I have built"
          count={builtProjects.length}
        >
          <EntryList items={builtProjects} />
        </PageSection>

        <PageSection
          id="research"
          title="Research and notes"
          count={researchItems.length}
        >
          <EntryList items={researchItems} />
        </PageSection>

        <PageSection
          id="experience"
          title="Experience"
          count={experienceItems.length}
        >
          <EntryList items={experienceItems} />
        </PageSection>

        <PageSection
          id="education"
          title="Education and certifications"
          count={educationItems.length}
        >
          <EntryList items={educationItems} initialVisibleItems={3} />
        </PageSection>
        <AppFooter />
      </Stack>
    </Container>
  )
}
