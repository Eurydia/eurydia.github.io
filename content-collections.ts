import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

const homeEntry = defineCollection({
  name: 'homeEntries',
  directory: 'src/content/home',
  include: '**/*.md',
  schema: z
    .object({
      kind: z.enum(['card', 'detailed']),
      section: z.enum([
        'maintained',
        'built',
        'research',
        'experience',
        'education',
      ]),
      order: z.number(),
      period: z.string().optional(),
      content: z.string(),
    })
    .strict(),
})

export default defineConfig({
  content: [homeEntry],
})
