---
order: 40
title: 'Propositional Logic Engine'
period: '2025'
intro: >-
  Boolean expression parser and visualizer for evaluation and syntax-tree explanation.
notes:
  - 'Implemented parsing, evaluation, and visual explanation around explicit expression structure.'
  - 'Kept transformations inspectable instead of hiding output behind a black box.'
  - 'Documented implementation constraints and tradeoffs as part of the project record.'
tools: 'TypeScript, Ohm.js, Monaco, KaTeX, visx'
media:
  - label: 'logic engine / expression editor'
  - label: 'logic engine / syntax tree view'
  - label: 'logic engine / evaluation trace'
---

This is the formal-rules project in the list. It is not useful because the stack is large; it is useful because parsing, evaluation, transformations, and visual explanation make the boundary of the system clear. The value is in showing how an expression becomes structure, how that structure is evaluated, and how intermediate reasoning can be inspected instead of hidden behind one final answer.

## System boundary

- The parser turns propositional expressions into an explicit structure that can be evaluated and displayed.
- The visual layer is useful because logic tooling becomes much less helpful when it only returns a final true or false result.
- The implementation is a good place to discuss grammar choices, invalid input, operator precedence, and display tradeoffs.
- The same structure can support examples such as syntax trees, truth evaluation, normal-form conversion, or equivalence checks if those are still part of the current version.
