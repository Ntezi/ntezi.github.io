export const site = {
  title: 'Marius Ngaboyamahina — Senior Software & Forward Deployed Engineer',
  description:
    'Marius Ngaboyamahina: senior software and forward deployed engineer based in Accra. 13+ years delivering financial systems, payment integrations, distributed services, and production AI solutions.',
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
