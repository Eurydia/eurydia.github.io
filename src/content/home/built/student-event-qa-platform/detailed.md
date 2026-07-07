---
kind: detailed
section: built
order: 50
media:
  - label: 'project-amber / participant entry'
  - label: 'project-amber / moderator queue'
  - label: 'project-amber / session timing'
---

## Student Event Q&A Platform

The `project-amber` package shows this as a real application stack: TanStack Start, MUI 9, Prisma, Better Auth, Redis, rate limiting, QR code generation, countdown UI, date pickers, tests, and Wrangler deployment. That matches the shape of an event Q&A platform where entry, timing, session state, moderation, and participation limits matter more than simply collecting text in a form.

## System boundary

- The platform treats a Q&A session as a timed workflow with access rules, not as an open-ended public form.
- Authentication and database state support controlled participation, while Redis-backed rate limiting helps keep the submission path from being abused.
- QR entry and countdown components make the event surface usable in a room where participants need to join quickly.
- The server and client boundary is worth showing because the interesting part is the rule system around participation and moderation.
