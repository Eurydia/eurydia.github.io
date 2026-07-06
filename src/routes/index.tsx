import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { createFileRoute } from '@tanstack/react-router'
import { PageSection } from '#/components/layout/page-section'
import { CredentialList } from '#/components/lists/credential-list'
import { EntryList } from '#/components/lists/entry-list'
import { ExperienceList } from '#/components/lists/experience-list'
import { AppFooter } from '#/components/app-footer'

export const Route = createFileRoute('/')({ component: HomeRoute })

const maintainedProjects = [
  {
    title: 'SUT Mechanical Engineering Web Platform',
    period: 'December 2025 - Present',
    intro:
      'Bilingual Thai-English platform for public content, staff records, thesis discovery, final-project discovery, and CMS workflows.',
    notes: [
      'Owned UI, frontend, backend, database, CMS structure, and bilingual content schema.',
      'Completed the public site, database, and discovery controllers.',
      'Building admin, editor, and faculty CMS workflows next.',
    ],
    tools: 'TypeScript, React, backend APIs, database design, CMS workflows',
    postmortem: '/catalog/sut-mechanical-engineering',
  },
  {
    title: 'GDGoC ELTE Chapter Infrastructure',
    period: 'November 2025 - Present',
    intro:
      'Chapter web infrastructure for GDGoC ELTE: website, link hub, event resources, and writeups.',
    notes: [
      'Built the public site and link hub around fast publication.',
      'Kept event material reachable outside temporary social posts.',
      'Maintain the structure for chapter resources and retrospectives.',
    ],
    tools: 'React, TypeScript, TanStack Router, MUI, content pipeline',
    postmortem: '/catalog/gdgoc-elte',
  },
] as const

const builtProjects = [
  {
    title: 'Geometric Transformation Visualizer',
    period: 'June 2025 - December 2025',
    intro:
      'Desmos-based classroom visualizer for translation, rotation, scaling, and reflection.',
    notes: [
      'Commissioned by Ayutthaya Witthayalai School Mathematics Department for Mathayom 2 instruction.',
      'Built adjustable transformation controls for classroom demonstration.',
      'Adopted as the main demonstration tool for about 150 students.',
    ],
    tools: 'Vite, TypeScript, React, Desmos',
    postmortem: '/catalog/geometric-transformation-visualizer',
  },
  {
    title: 'Structogram Builder',
    period: 'November 2023 - May 2024',
    intro:
      'Online Nassi-Shneiderman diagram builder for programming coursework.',
    notes: [
      'Built the editor-to-diagram flow, export behavior, and documentation.',
      'Reduced the hand-drawing overhead around structogram assignments.',
      'Made code structure inspectable, shareable, and reusable.',
    ],
    tools: 'React, TypeScript, Vite, MUI, CodeMirror, html-to-image',
    postmortem: '/catalog/structogram-builder',
  },
  {
    title: 'GitHub Repository Aggregator',
    period: '2024',
    intro:
      'Local-first GitHub repository inspection tool for scattered project state.',
    notes: [
      'Collected repository data through the GitHub API.',
      'Worked through local data flow and compact developer-facing UI.',
      'Built for review tasks that are too scattered across GitHub pages.',
    ],
    tools: 'Tauri, Rust, React, TypeScript, GitHub API, local persistence',
    postmortem: '/catalog/github-repository-aggregator',
  },
  {
    title: 'Propositional Logic Engine',
    period: '2025',
    intro:
      'Boolean expression parser and visualizer for evaluation and syntax-tree explanation.',
    notes: [
      'Implemented parsing, evaluation, and visual explanation around explicit expression structure.',
      'Kept transformations inspectable instead of hiding output behind a black box.',
      'Use the postmortem for implementation constraints and tradeoffs.',
    ],
    tools: 'TypeScript, Ohm.js, Monaco, KaTeX, visx',
    postmortem: '/catalog/propositional-logic-engine',
  },
] as const

const researchItems = [
  {
    title: 'Robot Navigation Perception Pipeline',
    period: 'July 2025 - January 2026',
    intro:
      'Robot-navigation perception pipeline using overhead workspace imagery.',
    notes: [
      'Labeled and trained image recognition for changing object placements.',
      'Extracted keypoints from fixed-camera frames and published ROS perception messages.',
      'Related TDK work received Second Prize, OTDK qualification, and a Morgan Stanley-funded award.',
    ],
    tools: 'ROS, fixed-camera imagery, image recognition, keypoint extraction',
    postmortem: '/catalog/piroska-research',
  },
  {
    title: 'TDK / OTDK Research Project',
    period: '2025',
    intro:
      'Research writing and presentation for the robot-navigation project.',
    notes: [
      'Prepared the project for TDK presentation and OTDK qualification.',
      'Kept method, constraints, evaluation, and lessons visible beyond the credential line.',
    ],
    tools: 'Research writing, presentation, experiment notes',
    postmortem: '/catalog/tdk-otdk',
  },
] as const

const experienceItems = [
  {
    title: 'Technical Team Leader',
    period: 'October 2024 - January 2026',
    organization: 'Google Developer Group on Campus, Eotvos Lorand University',
    details: [
      'Selected through application; invited to return for the following chapter.',
      'Led the inaugural algorithm contest: problem set, submission workflow, judging, and 30 participants.',
      'Built chapter infrastructure, including the link hub and retrospective platform groundwork.',
    ],
  },
  {
    title: 'Functional Programming Teaching Assistant',
    period: 'February 2024 - May 2024',
    organization:
      'Department of Programming Languages and Compilers, Eotvos Lorand University',
    details: [
      'Graded weekly coursework for about 45 students with regular feedback.',
      'Held 10 consultation sessions across 12 weeks, including weekend support.',
    ],
  },
] as const

const educationItems = [
  {
    title: 'Bachelor of Science in Computer Science with Honors',
    body: 'Eotvos Lorand University, Budapest. CGA 4.51 / 5.00. Stipendium Hungaricum Scholarship.',
  },
  {
    title: 'IELTS Academic',
    body: 'Overall 7.5, CEFR C1. Listening 8.5, Reading 8.0, Writing 6.5, Speaking 7.0.',
  },
  {
    title: 'TOEIC Listening & Reading Test',
    body: 'Total 930 / 990. Listening 465, Reading 465.',
  },
] as const

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
        <Typography variant="siteDisplay">Thanakorn Phuttharaksa</Typography>
        <PageSection id="maintained" title="Projects I maintain">
          <EntryList items={maintainedProjects} />
        </PageSection>

        <PageSection id="built" title="Other projects I have built">
          <EntryList items={builtProjects} />
        </PageSection>

        <PageSection id="research" title="Research and notes">
          <EntryList items={researchItems} />
        </PageSection>

        <PageSection id="experience" title="Experience">
          <ExperienceList items={experienceItems} />
        </PageSection>

        <PageSection id="education" title="Education and certifications">
          <CredentialList items={educationItems} initialVisibleItems={3} />
        </PageSection>
        <AppFooter />
      </Stack>
    </Container>
  )
}
