---
order: 30
title: 'GitHub Repository Aggregator'
period: '2024'
intro: >-
  Local-first GitHub repository inspection tool for scattered project state.
notes:
  - 'Collected repository data through the GitHub API.'
  - 'Worked through local data flow and compact developer-facing UI.'
  - 'Built for review tasks that are too scattered across GitHub pages.'
tools: 'Tauri, Rust, React, TypeScript, GitHub API, local persistence'
media:
  - label: 'repository aggregator / repository list view'
  - label: 'repository aggregator / local project details'
  - label: 'repository aggregator / GitHub sync state'
---

This local-first repository review tool was built for scattered project state. I could verify the broader GitHub project set and the current repo list, but the exact aggregator source is not exposed under an obvious public name. The verified behavior is collecting repository state, making project information easier to scan, and keeping the review surface local enough for repeated use.

## System boundary

- The core use case was project review: repositories, status, and small bits of context are easier to compare when they are not split across many GitHub pages.
- The interface needed to be compact because the value is scanning and filtering, not displaying one repository at a time.
- A local-first shape makes sense for this kind of tool because the data is mainly reference material for repeated personal review.
- The current project record avoids pretending the source is public; the important surfaces are the repository list, local details, and sync state.
