---
order: 10
title: 'Robot Navigation Perception Pipeline'
period: 'July 2025 - January 2026'
intro: >-
  Robot-navigation perception pipeline using overhead workspace imagery.
notes:
  - 'Labeled and trained image recognition for changing object placements.'
  - 'Extracted keypoints from fixed-camera frames and published ROS perception messages.'
  - 'Related TDK work received Second Prize, OTDK qualification, and a Morgan Stanley-funded award.'
tools: 'ROS, fixed-camera imagery, image recognition, keypoint extraction'
media:
  - label: 'robot navigation / overhead workspace frame'
  - label: 'robot navigation / keypoint extraction'
  - label: 'robot navigation / ROS perception message'
---

This research project connects fixed-camera perception to robot-navigation state. The important system boundary is the path from overhead imagery to recognized objects, extracted keypoints, and ROS messages that another part of the robot system can consume. It belongs in the research section because the work is partly implementation and partly experiment design.

## System boundary

- The camera setup makes the workspace stable enough to reason about object placement while still requiring the perception pipeline to handle changes in the scene.
- Labeling and training are part of the project, not background work, because the model output determines what can be published downstream.
- Keypoint extraction is the bridge between visual recognition and navigation data.
- The ROS message boundary matters because perception output only becomes useful when the rest of the robot stack can consume it reliably.
