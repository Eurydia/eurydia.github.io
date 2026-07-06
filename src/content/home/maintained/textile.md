---
order: 30
title: 'Textile'
period: 'December 2025 - Present'
intro: >-
  Digital-garden experiment that uses LaTeX as the source format instead of Markdown.
notes:
  - 'Built around the idea that technical notes can keep more of the structure and feel of TeX documents.'
  - 'Separated the site engine from content so the writing format can stay closer to the source material.'
  - 'Kept the project honest about the parts where browser rendering and document semantics do not line up cleanly.'
tools: 'LaTeX source format, digital garden pipeline, frontend rendering'
media:
  - label: 'project-textile / LaTeX source note'
  - label: 'project-textile / rendered digital garden page'
  - label: 'project-textile-content / note archive shape'
---

The README frames Textile as a digital garden whose source format is LaTeX rather than Markdown. That gives the project a specific problem to solve: keeping the structure and character of TeX notes while rendering them inside a browser environment that was not designed around document semantics. The repo and its companion content repository make the split between engine and writing explicit.

## System boundary

- The source format is the point of the project: notes begin closer to LaTeX than to a blog CMS or Markdown document.
- The browser layer has to decide what should remain document-like, what should become navigable web content, and what should be left alone.
- The repository split keeps site machinery and writing from becoming one tangled folder of experiments.
- The project is useful as a record of the tradeoff between document beauty, web rendering, and maintainable note publishing.
