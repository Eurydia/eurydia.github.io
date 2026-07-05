export type HomeEntryItem = {
  title: string
  period: string
  intro: string
  notes: readonly string[]
  tools: string
  postmortem: string
  imageSrc?: string
}

export type HomeExperienceItem = {
  title: string
  period: string
  organization: string
  details: readonly string[]
  imageSrc?: string
}
