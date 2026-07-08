---
kind: detailed
section: built
order: 110
---

## Alexandrite

![project-alexandrite / converter input](https://placehold.co/960x540?text=project-alexandrite%20%2F%20converter%20input)

![project-alexandrite / unit categories](https://placehold.co/960x540?text=project-alexandrite%20%2F%20unit%20categories)

![project-alexandrite / desktop shell](https://placehold.co/960x540?text=project-alexandrite%20%2F%20desktop%20shell)

The `project-alexandrite` README describes it as an advanced unit conversion calculator, and the package metadata keeps the stack narrow: Tauri, React, TypeScript, and Vite. It is a focused desktop utility with a small application boundary instead of a broad hosted interface.

## System boundary

- Tauri gives the project a desktop packaging path while keeping the interface in the React and TypeScript world.
- The conversion surface is intentionally narrow, which makes correctness and organization more important than feature count.
- The app is a good place to show how a utility can stay small while still having a real local application shell.
- The core surfaces are conversion input, result output, and unit-category navigation.
