export type ProfileStat = {
  value: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail' | 'external';
};

export const profile = {
  name: 'Marius Ngaboyamahina',
  shortName: 'Marius Ngaboyamahina',
  headline: 'Engineering Leader & Forward Deployed Engineer',
  tagline:
    'I build financial systems, payment integrations, and AI-powered workflows that teams can run in production. 13+ years connecting hands-on engineering with technical leadership across Africa, Europe, Japan, and the United States.',
  location: 'Accra, Ghana',
  workingStatus: 'Working globally',
  availabilityBadge: 'Financial systems · Data · AI',

  email: 'ngabomarius@gmail.com',
  phone: '+233 598 101 745',

  summary: [
    "I lead the eight-person Digital Factory team at UMWALIMU SACCO, with responsibility for digital banking delivery, integrations, and production operations. Alongside this permanent role, I work as a Forward Deployed Engineer consultant at Hence Technologies, translating client requirements into production AI and data solutions.",
    "My work spans payment interoperability, event-driven services, backend APIs, full-stack applications, and Palantir Foundry integrations. I stay close to implementation: tracing contracts, reviewing code, resolving production issues, and helping teams ship maintainable systems.",
    "I hold a Master's in Information Systems from Kobe Institute of Computing, Japan. Teaching at WiredIn Academy and mentoring through African Leadership International / The Room have made developing other engineers a lasting part of my work.",
  ],
  focusAreas: ['Financial Systems', 'Payment Interoperability', 'Production AI', 'Distributed Systems', 'Engineering Leadership'],
  stats: [
    { value: '13+', label: 'Years in software' },
    { value: '8', label: 'Engineers in my team' },
    { value: '4', label: 'Continents of delivery' },
  ] as ProfileStat[],

  socials: [
    { label: 'GitHub', href: 'https://github.com/Ntezi', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ntezi', icon: 'linkedin' },
  ] as SocialLink[],
} as const;

export type Profile = typeof profile;
