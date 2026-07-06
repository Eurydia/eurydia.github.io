import {
  allBuiltProjects,
  allEducationItems,
  allExperienceItems,
  allMaintainedProjects,
  allResearchItems,
} from 'content-collections'
import type { CredentialItem } from '#/types/credential'
import type { HomeEntryItem, HomeExperienceItem } from '#/types/home'

type OrderedItem<T> = T & { order: number }

const sortByOrder = <T>(items: readonly OrderedItem<T>[]) => {
  return [...items].sort((left, right) => left.order - right.order)
}

const toEntryItems = (items: readonly OrderedItem<HomeEntryItem>[]) => {
  return sortByOrder(items).map((item) => ({
    title: item.title,
    period: item.period,
    intro: item.intro,
    notes: item.notes,
    tools: item.tools,
    article: item.article,
    media: item.media,
  }))
}

const toExperienceItems = (
  items: readonly OrderedItem<HomeExperienceItem>[],
) => {
  return sortByOrder(items).map((item) => ({
    title: item.title,
    period: item.period,
    organization: item.organization,
    details: item.details,
  }))
}

const toCredentialItems = (items: readonly OrderedItem<CredentialItem>[]) => {
  return sortByOrder(items).map((item) => ({
    title: item.title,
    body: item.body,
  }))
}

export const maintainedProjects = toEntryItems(allMaintainedProjects)
export const builtProjects = toEntryItems(allBuiltProjects)
export const researchItems = toEntryItems(allResearchItems)
export const experienceItems = toExperienceItems(allExperienceItems)
export const educationItems = toCredentialItems(allEducationItems)
