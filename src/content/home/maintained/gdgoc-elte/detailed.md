---
kind: detailed
section: maintained
order: 20
---

## GDGoC ELTE Chapter Infrastructure

![gdgoc-elte / public site overview](https://placehold.co/960x540?text=gdgoc-elte%20%2F%20public%20site%20overview)

![gdgoc-elte-linktree / event link surface](https://placehold.co/960x540?text=gdgoc-elte-linktree%20%2F%20event%20link%20surface)

![gdgoc-elte / content build pipeline](https://placehold.co/960x540?text=gdgoc-elte%20%2F%20content%20build%20pipeline)

The GitHub footprint is split across the public chapter site, a link hub, and content-oriented repositories. The main site uses React, TanStack Router, MUI, and a content build pipeline with unified, remark, and rehype; the link hub is a smaller Vite deployment for quick access during events. The useful part is not the branding. It is that chapter material can survive outside temporary posts.

## System boundary

- The public site carries longer-lived material such as event pages, writeups, and chapter information.
- The link hub covers the shorter event workflow: links, registrations, forms, resources, and anything that needs to be reachable fast.
- The content pipeline keeps Markdown-adjacent writing separate from the UI layer, with build steps responsible for turning source material into site content.
- The repo structure reflects maintenance work: publishing, fixing, and updating the chapter presence without turning every small event into a new one-off page.
