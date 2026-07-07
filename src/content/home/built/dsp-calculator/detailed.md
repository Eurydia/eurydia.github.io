---
kind: detailed
section: built
order: 90
media:
  - label: 'project-dsp-calculator / item planner'
  - label: 'project-dsp-calculator / calculation result'
  - label: 'project-dsp-calculator / item registry boundary'
---

## DSP Calculator

The public repository is a long-lived React calculator backed by `@eurydos/dsp-item-registry`, which is the important architectural detail. The app is not just a table of game items; it separates item data from the UI so calculator behavior can sit on top of a reusable registry and still be deployed as a public gh-pages project.

## System boundary

- The item registry package keeps the game data model separate from the calculator interface.
- The UI work is about planning and calculation, so the interface has to make dependencies and quantities legible.
- The project has enough history to matter as maintained work, including public deployment and versioned iteration.
- Item selection, calculation output, and the data-registry boundary are the three useful surfaces to inspect.
