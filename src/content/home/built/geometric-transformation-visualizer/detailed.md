---
kind: detailed
section: built
order: 10
media:
  - label: 'project-geometric-transformation-explorer / controls'
  - label: 'project-geometric-transformation-explorer / Desmos graph'
  - label: 'project-geometric-transformation-explorer / classroom mode'
---

## Geometric Transformation Visualizer

This was built as a classroom tool for Mathayom 2 geometry instruction, with Desmos handling the graphing surface and React handling the surrounding control flow. The package metadata shows a focused frontend stack with MUI, TanStack Form, TanStack Router, Desmos, zod, and MathJax-related tooling, which fits the actual requirement: parameter changes should be visible enough for a class demonstration.

## System boundary

- The visualizer centers on four geometric transformations: translation, rotation, scaling, and reflection.
- The interface work is mostly about making parameters clear enough that the graph responds in a way a classroom can follow.
- Desmos is used for the mathematical display instead of reimplementing a graphing engine.
- The project was deployed as a usable teaching surface, not just a local experiment.
