---
order: 20
title: 'Structogram Builder'
period: 'November 2023 - May 2024'
intro: >-
  Online Nassi-Shneiderman diagram builder for programming coursework.
notes:
  - 'Built the editor-to-diagram flow, export behavior, and documentation.'
  - 'Reduced the hand-drawing overhead around structogram assignments.'
  - 'Made code structure inspectable, shareable, and reusable.'
tools: 'React, TypeScript, Vite, MUI, CodeMirror, KaTeX, html-to-image, file-saver'
media:
  - label: 'project-structogram-builder-online / editor'
  - label: 'project-structogram-builder-online / diagram output'
  - label: 'project-structogram-builder-online / export flow'
---

The online builder sits on top of a separate structogram component package, which keeps the diagram rendering logic from being trapped inside one page. The app repository uses CodeMirror, html-to-image, file-saver, KaTeX, and MUI around that renderer, so the expanded work is the editor, export path, documentation surface, and the practical behavior students need when assignments require structured diagrams.

## System boundary

- The editor flow turns typed structure into a Nassi-Shneiderman diagram without requiring students to manually draw every block.
- The rendering layer is package-backed, which made the diagram component reusable beyond the original page.
- Export support matters because coursework often ends outside the web app: images and files have to move into submissions or documents.
- The surrounding documentation keeps the tool usable for students who came for the diagram, not for the implementation details.
