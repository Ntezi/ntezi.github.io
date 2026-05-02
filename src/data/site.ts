export const site = {
  title: 'Marius Ngaboyamahina — Senior Software Engineer & Technical Leader',
  description:
    'Senior Software Engineer with 10+ years across backend engineering, microservices, fintech integrations, and engineering leadership.',
  url: 'https://ntezi.github.io',
  copyrightYear: new Date().getFullYear(),
  features: {
    showResearch: false,
    showServices: true,
    showFullExperience: true,
    showEducation: true,
  },
} as const;

export type SiteConfig = typeof site;
