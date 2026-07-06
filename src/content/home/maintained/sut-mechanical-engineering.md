---
order: 10
title: 'SUT Mechanical Engineering Web Platform'
period: 'December 2025 - Present'
intro: >-
  Bilingual Thai-English platform for public content, staff records, thesis discovery, final-project discovery, and CMS workflows.
notes:
  - 'Owned UI, frontend, backend, database, CMS structure, and bilingual content schema.'
  - 'Completed the public site, database, and discovery controllers.'
  - 'Building admin, editor, and faculty CMS workflows next.'
tools: 'TypeScript, React, backend APIs, database design, CMS workflows'
media:
  - label: 'me.eng.sut-university.site / public content map'
  - label: 'me.eng.sut-university.site / record discovery flow'
  - label: 'me.eng.sut-university.site / CMS role boundary'
---

This is an active departmental web platform rather than a static faculty page. The private GitHub repository exposes the project as an ongoing system, so the work should be read at the system-boundary level: public bilingual pages, searchable academic records, and CMS flows split around the people who will maintain the content after handoff.

## System boundary

- The public side is structured around content that has to be found again: staff profiles, research records, thesis records, and final-project records.
- The bilingual model matters because the site has Thai and English readers, not because translation is decorative text at the edge of the page.
- The CMS boundary is part of the build: admin, editor, and faculty workflows are separated so content ownership does not collapse into one fragile account.
- The practical work includes interface layout, API behavior, database shape, record discovery, and the handoff path for people who will update the system later.
