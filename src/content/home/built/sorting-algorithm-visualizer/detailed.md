---
kind: detailed
section: built
order: 100
media:
  - label: 'project-albite / sorting bars'
  - label: 'project-albite / comparison step'
  - label: 'project-albite / algorithm selection'
---

## Sorting Algorithm Visualizer

The `project-albite` README describes the app as a sorting algorithm visualizer that sings, inspired by algorithm visualization with sound. The useful framing is that comparisons and swaps are part of the explanation, not hidden implementation noise. The project covers several sorting families while staying small enough to remain an explanation tool.

## System boundary

- The visualizer uses animation to show ordering behavior, but the real value is making each algorithm step identifiable.
- Comparison and swap language gives the viewer a way to follow what the algorithm is doing beyond watching bars move.
- The algorithm list covers both simple instructional sorts and more structured families such as merge, heap, counting, and radix.
- Sound gives the app a distinct interface detail, but the project still centers the algorithm state and explanation surface.
