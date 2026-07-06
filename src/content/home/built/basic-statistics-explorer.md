---
order: 70
title: 'Basic Statistics Explorer'
period: '2025'
intro: >-
  Interactive statistics explorer for classroom-style data inspection, charts, and formula-supported explanation.
notes:
  - 'Built visual exploration around charting, box plots, array operations, and MathJax notation.'
  - 'Used chart libraries where the hard part was visual behavior rather than reimplementing plotting primitives.'
  - 'Kept the interface focused on inspecting data and distributions instead of turning statistics into a slide deck.'
tools: 'React, TypeScript, Vite, MUI, Chart.js, D3 Array, MathJax'
media:
  - label: 'project-basic-statistics-explorer / data table'
  - label: 'project-basic-statistics-explorer / chart view'
  - label: 'project-basic-statistics-explorer / formula note'
---

The repository package shows a compact statistics frontend using React 19, MUI 7, Chart.js, D3 Array, MathJax, and a boxplot chart plugin. That makes the project more specific than a generic chart demo: it is a teaching and inspection surface where formulas, distributions, and visual summaries need to sit near each other.

## System boundary

- Chart.js handles the core charting while the boxplot plugin covers a visualization that is useful for distribution discussion.
- D3 Array is used for data operations instead of burying statistical calculations in unstructured UI code.
- MathJax support keeps notation close to the visuals, which is important when the app is explaining a calculation rather than only showing the result.
- The project separates data input, chart output, and formula explanation so each part can be inspected independently.
