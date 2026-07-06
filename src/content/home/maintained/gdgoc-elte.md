---
order: 20
title: 'GDGoC ELTE Chapter Infrastructure'
period: 'November 2025 - Present'
intro: >-
  Chapter web infrastructure for GDGoC ELTE: website, link hub, event resources, and writeups.
notes:
  - 'Built the public site and link hub around fast publication.'
  - 'Kept event material reachable outside temporary social posts.'
  - 'Maintain the structure for chapter resources and retrospectives.'
tools: 'React, TypeScript, TanStack Router, MUI, unified, remark, rehype, gh-pages'
media:
  - label: 'gdgoc-elte / public site overview'
  - label: 'gdgoc-elte-linktree / event link surface'
  - label: 'gdgoc-elte / content build pipeline'
---

The GitHub footprint is split across the public chapter site, a link hub, and content-oriented repositories. The main site uses React, TanStack Router, MUI, and a content build pipeline with unified, remark, and rehype; the link hub is a smaller Vite deployment for quick access during events. The useful part is not the branding. It is that chapter material can survive outside temporary posts.

## System boundary

- The public site carries longer-lived material such as event pages, writeups, and chapter information.
- The link hub covers the shorter event workflow: links, registrations, forms, resources, and anything that needs to be reachable fast.
- The content pipeline keeps Markdown-adjacent writing separate from the UI layer, with build steps responsible for turning source material into site content.
- The repo structure reflects maintenance work: publishing, fixing, and updating the chapter presence without turning every small event into a new one-off page.
