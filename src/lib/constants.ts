export const STORAGE_KEYS = {
  AUTOSAVE: 'resume-editor:autosave',
  HISTORY: 'resume-editor:history',
} as const

export const MAX_HISTORY = 20

export const DEFAULT_RESUME_MARKDOWN = `# John Doe
**Senior Software Engineer**
[email@example.com](mailto:email@example.com) | (555) 123-4567

---

## Professional Summary

Experienced software engineer with 8+ years of experience building scalable web applications. Passionate about clean architecture, developer tooling, and mentoring junior engineers.

## Experience

### TechCorp — San Francisco, CA
*Senior Software Engineer | Jan 2020 - Present*

- Led migration of monolith to microservices, reducing deployment time by 80%
- Designed and implemented real-time analytics pipeline processing 10M+ events/day
- Mentored 4 junior engineers through structured code review and pair programming

### StartupXYZ — Remote
*Software Engineer | Jun 2016 - Dec 2019*

- Built customer-facing React application used by 50K+ monthly active users
- Developed RESTful API serving 1M+ requests/day with 99.9% uptime
- Reduced CI pipeline from 25 minutes to 4 minutes via Docker layer caching

## Education

### University of Technology
*B.S. Computer Science | 2016*
GPA: 3.8/4.0 | Dean's List

## Skills

**Languages:** TypeScript, JavaScript, Python, Go
**Frameworks:** React, Node.js, Express, Next.js
**Tools:** Docker, Kubernetes, AWS, PostgreSQL, Redis
`
