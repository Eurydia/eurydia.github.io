---
kind: detailed
section: research
order: 10
---

## Robot Navigation Perception Pipeline

![robot navigation / overhead workspace frame](https://placehold.co/960x540?text=robot%20navigation%20%2F%20overhead%20workspace%20frame)

![robot navigation / keypoint extraction](https://placehold.co/960x540?text=robot%20navigation%20%2F%20keypoint%20extraction)

![robot navigation / ROS perception message](https://placehold.co/960x540?text=robot%20navigation%20%2F%20ROS%20perception%20message)

This research project connects fixed-camera perception to robot-navigation state. The important system boundary is the path from overhead imagery to recognized objects, extracted keypoints, and ROS messages that another part of the robot system can consume. It belongs in the research section because the work is partly implementation and partly experiment design.

## System boundary

- The camera setup makes the workspace stable enough to reason about object placement while still requiring the perception pipeline to handle changes in the scene.
- Labeling and training are part of the project, not background work, because the model output determines what can be published downstream.
- Keypoint extraction is the bridge between visual recognition and navigation data.
- The ROS message boundary matters because perception output only becomes useful when the rest of the robot stack can consume it reliably.
