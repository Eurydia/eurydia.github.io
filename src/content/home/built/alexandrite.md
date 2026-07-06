---
order: 110
title: 'Alexandrite'
period: '2025'
intro: >-
  Desktop unit-conversion calculator built as a small Tauri application.
notes:
  - 'Built the conversion interface as a local desktop app rather than a hosted web page.'
  - 'Kept the stack deliberately small: React and TypeScript in the frontend, Tauri for the shell.'
  - 'Used the project to work through packaging a focused utility rather than extending a broad dashboard.'
tools: 'Tauri, React, TypeScript, Vite'
media:
  - label: 'project-alexandrite / converter input'
  - label: 'project-alexandrite / unit categories'
  - label: 'project-alexandrite / desktop shell'
---

The `project-alexandrite` README describes it as an advanced unit conversion calculator, and the package metadata keeps the stack narrow: Tauri, React, TypeScript, and Vite. It is a focused desktop utility with a small application boundary instead of a broad hosted interface.

## System boundary

- Tauri gives the project a desktop packaging path while keeping the interface in the React and TypeScript world.
- The conversion surface is intentionally narrow, which makes correctness and organization more important than feature count.
- The app is a good place to show how a utility can stay small while still having a real local application shell.
- The core surfaces are conversion input, result output, and unit-category navigation.
