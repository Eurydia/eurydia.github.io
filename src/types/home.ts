import type { MediaItem } from '#/types/media'

export type HomeEntryItem = {
  title: string
  period: string
  intro: string
  notes: readonly string[]
  tools: string
  article: string
  media?: readonly MediaItem[]
}

export type HomeExperienceItem = {
  title: string
  period: string
  organization: string
  details: readonly string[]
}
