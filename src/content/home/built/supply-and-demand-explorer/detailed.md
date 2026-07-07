---
kind: detailed
section: built
order: 80
media:
  - label: 'project-supply-and-demand-explorer / editable table'
  - label: 'project-supply-and-demand-explorer / chart output'
  - label: 'project-supply-and-demand-explorer / scenario comparison'
---

## Supply and Demand Explorer

The package metadata shows why this is not just a static economics page: Handsontable provides spreadsheet-like editing, Recharts handles the visual output, TanStack Router keeps the app structured, and test/generated-data tooling supports repeatable examples. The central behavior is edit data, observe the curve or chart response, and keep the relationship between table and graph visible.

## System boundary

- Handsontable is the right dependency for the task because the user interaction is editing tabular values, not filling out isolated form fields.
- Recharts gives the output a readable chart layer while the app code controls how economic values move between table and view.
- Generated data makes the tool easier to test and demonstrate without hand-building every example.
- The same scenario can be compared before and after input changes, which keeps the table-to-chart relationship visible.
