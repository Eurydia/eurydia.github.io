---
order: 80
title: 'Supply and Demand Explorer'
period: '2025'
intro: >-
  Interactive economics explorer for editing tabular data and seeing supply-demand behavior through charts.
notes:
  - 'Combined spreadsheet-like input with chart output so changes in data remain visible immediately.'
  - 'Used routing, tabular editing, and chart components to keep the workflow closer to an analysis tool than a static page.'
  - 'Kept generated data and test tooling available around the interface work.'
tools: 'React, TypeScript, Vite, MUI, TanStack Router, Handsontable, Recharts, Vitest'
media:
  - label: 'project-supply-and-demand-explorer / editable table'
  - label: 'project-supply-and-demand-explorer / chart output'
  - label: 'project-supply-and-demand-explorer / scenario comparison'
---

The package metadata shows why this is not just a static economics page: Handsontable provides spreadsheet-like editing, Recharts handles the visual output, TanStack Router keeps the app structured, and test/generated-data tooling supports repeatable examples. The central behavior is edit data, observe the curve or chart response, and keep the relationship between table and graph visible.

## System boundary

- Handsontable is the right dependency for the task because the user interaction is editing tabular values, not filling out isolated form fields.
- Recharts gives the output a readable chart layer while the app code controls how economic values move between table and view.
- Generated data makes the tool easier to test and demonstrate without hand-building every example.
- The same scenario can be compared before and after input changes, which keeps the table-to-chart relationship visible.
