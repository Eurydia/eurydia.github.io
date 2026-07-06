---
order: 60
title: 'Yoga Correct'
period: '2026'
intro: >-
  Desktop yoga-feedback app built around camera input, exercise state, and local model execution.
notes:
  - 'Worked through Electron main, preload, and renderer boundaries for a desktop interface rather than a browser-only demo.'
  - 'Integrated ONNX runtime, guided exercise flows, timers, markdown content, media playback, and user feedback surfaces.'
  - 'Designed for behavior that has to remain legible while webcam/model output changes over time.'
tools: 'Electron, electron-vite, React, TypeScript, MUI, TanStack Router, ONNX Runtime, Zod'
media:
  - label: 'project-yoga-correct / exercise screen'
  - label: 'project-yoga-correct / feedback state'
  - label: 'project-yoga-correct / onboarding flow'
---

The private `project-yoga-correct` repository is a desktop application using Electron, electron-vite, ONNX Runtime, MUI 9, TanStack Router, onboarding, timers, markdown content, media playback, and validation. The important part is the product boundary: webcam/model output has to become feedback that remains understandable while the user is moving, not a demo that only proves a model can run.

## System boundary

- Electron makes the app a desktop product with main, preload, and renderer concerns instead of a plain web page.
- ONNX Runtime keeps model execution local, which changes the engineering problem from API calls to lifecycle, loading, feedback, and performance.
- The exercise flow combines media, timers, instructions, and validation so feedback can be tied to the current movement rather than a generic score.
- The strongest evidence is in the feedback states, because that is where the system behavior is easiest to inspect.
