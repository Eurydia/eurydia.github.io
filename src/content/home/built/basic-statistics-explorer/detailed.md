---
kind: detailed
section: built
order: 70
---

## Basic Statistics Explorer

![project-basic-statistics-explorer / data table](https://placehold.co/960x540?text=project-basic-statistics-explorer%20%2F%20data%20table)

![project-basic-statistics-explorer / chart view](https://placehold.co/960x540?text=project-basic-statistics-explorer%20%2F%20chart%20view)

![project-basic-statistics-explorer / formula note](https://placehold.co/960x540?text=project-basic-statistics-explorer%20%2F%20formula%20note)

The repository package shows a compact statistics frontend using React 19, MUI 7, Chart.js, D3 Array, MathJax, and a boxplot chart plugin. That makes the project more specific than a generic chart demo: it is a teaching and inspection surface where formulas, distributions, and visual summaries need to sit near each other.

## System boundary

- Chart.js handles the core charting while the boxplot plugin covers a visualization that is useful for distribution discussion.
- D3 Array is used for data operations instead of burying statistical calculations in unstructured UI code.
- MathJax support keeps notation close to the visuals, which is important when the app is explaining a calculation rather than only showing the result.
- The project separates data input, chart output, and formula explanation so each part can be inspected independently.
