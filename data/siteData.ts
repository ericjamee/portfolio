export const contactInfo = {
  email: 'je7erickson@gmail.com',
  linkedin: 'https://linkedin.com/in/JamesEdErickson',
  github: 'https://github.com/ericjamee',
}
export const experience = [
  { dates: 'APR 2026 — PRESENT', title: 'IT Product Management Intern', company: 'The Church of Jesus Christ of Latter-day Saints' },
  { dates: 'MAY 2024 — MAY 2025', title: 'Research Assistant & Web Developer', company: 'BYU · Record Linking Lab' },
  { dates: 'MAY 2024 — APR 2026', title: 'Spanish Area Supervisor', company: 'Missionary Training Center' },
]
export const capabilities = [
  { title: 'Requirements & analysis', description: 'Turn stakeholder needs and disconnected data into clear reporting and working systems.', tools: 'SQL · GraphQL · Power BI · Dataverse' },
  { title: 'Automation & reliability', description: 'Automate recurring work, check the output, and document how the process runs.', tools: 'Power Automate · Power Query · SharePoint' },
  { title: 'Development & adoption', description: 'Develop usable software, incorporate feedback, and help people through change.', tools: 'React · C# / .NET · REST APIs · Git' },
]
export interface Project { id: number; title: string; description: string; image: string; tags: string[]; liveUrl?: string; githubUrl?: string }
