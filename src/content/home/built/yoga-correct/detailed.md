---
kind: detailed
section: built
order: 60
---

## Yoga Correct

![project-yoga-correct / exercise screen](https://placehold.co/960x540?text=project-yoga-correct%20%2F%20exercise%20screen)

![project-yoga-correct / feedback state](https://placehold.co/960x540?text=project-yoga-correct%20%2F%20feedback%20state)

![project-yoga-correct / onboarding flow](https://placehold.co/960x540?text=project-yoga-correct%20%2F%20onboarding%20flow)

The private `project-yoga-correct` repository is a desktop application using Electron, electron-vite, ONNX Runtime, MUI 9, TanStack Router, onboarding, timers, markdown content, media playback, and validation. The important part is the product boundary: webcam/model output has to become feedback that remains understandable while the user is moving, not a demo that only proves a model can run.

## System boundary

- Electron makes the app a desktop product with main, preload, and renderer concerns instead of a plain web page.
- ONNX Runtime keeps model execution local, which changes the engineering problem from API calls to lifecycle, loading, feedback, and performance.
- The exercise flow combines media, timers, instructions, and validation so feedback can be tied to the current movement rather than a generic score.
- The strongest evidence is in the feedback states, because that is where the system behavior is easiest to inspect.
