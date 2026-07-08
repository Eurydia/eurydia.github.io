---
kind: detailed
section: maintained
order: 10
---

## SUT Mechanical Engineering Web Platform

![me.eng.sut-university.site / public content map](https://placehold.co/960x540?text=me.eng.sut-university.site%20%2F%20public%20content%20map)

![me.eng.sut-university.site / record discovery flow](https://placehold.co/960x540?text=me.eng.sut-university.site%20%2F%20record%20discovery%20flow)

![me.eng.sut-university.site / CMS role boundary](https://placehold.co/960x540?text=me.eng.sut-university.site%20%2F%20CMS%20role%20boundary)

This is an active departmental web platform rather than a static faculty page. The private GitHub repository exposes the project as an ongoing system, so the work should be read at the system-boundary level: public bilingual pages, searchable academic records, and CMS flows split around the people who will maintain the content after handoff.

## System boundary

- The public side is structured around content that has to be found again: staff profiles, research records, thesis records, and final-project records.
- The bilingual model matters because the site has Thai and English readers, not because translation is decorative text at the edge of the page.
- The CMS boundary is part of the build: admin, editor, and faculty workflows are separated so content ownership does not collapse into one fragile account.
- The practical work includes interface layout, API behavior, database shape, record discovery, and the handoff path for people who will update the system later.
