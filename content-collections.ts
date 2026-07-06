import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

const mediaSchema = z
  .object({
    label: z.string(),
    src: z.string().optional(),
  })
  .strict()

const entrySchema = z
  .object({
    order: z.number(),
    title: z.string(),
    period: z.string(),
    intro: z.string(),
    notes: z.array(z.string()),
    tools: z.string(),
    media: z.array(mediaSchema).optional(),
    content: z.string(),
  })
  .strict()

const experienceSchema = z
  .object({
    order: z.number(),
    title: z.string(),
    period: z.string(),
    organization: z.string(),
    details: z.array(z.string()),
    content: z.string(),
  })
  .strict()

const credentialSchema = z
  .object({
    order: z.number(),
    title: z.string(),
    body: z.string(),
    content: z.string(),
  })
  .strict()

const maintainedProjects = defineCollection({
  name: 'maintainedProjects',
  directory: 'src/content/home/maintained',
  include: '**/*.md',
  schema: entrySchema,
  transform: (document) => ({
    order: document.order,
    title: document.title,
    period: document.period,
    intro: document.intro,
    notes: document.notes,
    tools: document.tools,
    media: document.media,
    article: document.content,
  }),
})

const builtProjects = defineCollection({
  name: 'builtProjects',
  directory: 'src/content/home/built',
  include: '**/*.md',
  schema: entrySchema,
  transform: (document) => ({
    order: document.order,
    title: document.title,
    period: document.period,
    intro: document.intro,
    notes: document.notes,
    tools: document.tools,
    media: document.media,
    article: document.content,
  }),
})

const researchItems = defineCollection({
  name: 'researchItems',
  directory: 'src/content/home/research',
  include: '**/*.md',
  schema: entrySchema,
  transform: (document) => ({
    order: document.order,
    title: document.title,
    period: document.period,
    intro: document.intro,
    notes: document.notes,
    tools: document.tools,
    media: document.media,
    article: document.content,
  }),
})

const experienceItems = defineCollection({
  name: 'experienceItems',
  directory: 'src/content/home/experience',
  include: '**/*.md',
  schema: experienceSchema,
})

const educationItems = defineCollection({
  name: 'educationItems',
  directory: 'src/content/home/education',
  include: '**/*.md',
  schema: credentialSchema,
})

export default defineConfig({
  content: [
    maintainedProjects,
    builtProjects,
    researchItems,
    experienceItems,
    educationItems,
  ],
})
