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
  headline: 'Senior Software & Forward Deployed Engineer',
  tagline:
    'I build financial systems, payment integrations, and AI-powered workflows that teams can run in production. 13+ years connecting hands-on engineering with technical leadership across Africa, Europe, Japan, and the United States.',
  location: 'Accra, Ghana',
  workingStatus: 'Working globally',
  availabilityBadge: 'Financial systems · Data · AI',

  email: 'ngabomarius@gmail.com',
  phone: '+233 598 101 745',

  summary: [
    'Senior Software & Forward Deployed Engineer with over a decade of international experience translating complex business challenges into reliable backend and full-stack solutions that address practical business needs.',
    'Proven track record in architecting highly available financial platforms, secure payment integrations, and distributed systems. Combines data engineering pipelines with production-grade AI solutions built on Palantir Foundry.',
    'A collaborative technical leader passionate about mentoring engineers and sharing knowledge, bringing hands-on engineering judgment and client-facing delivery experience across Africa, Europe, Japan, and the United States.',
  ],
  focusAreas: ['Financial Systems', 'Payment Interoperability', 'Production AI', 'Distributed Systems', 'Engineering Leadership'],
  stats: [
    { value: '13+', label: 'Years in software' },
    { value: '4', label: 'Continents of delivery' },
  ] as ProfileStat[],

  socials: [
    { label: 'GitHub', href: 'https://github.com/Ntezi', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ntezi', icon: 'linkedin' },
  ] as SocialLink[],
} as const;

export type Profile = typeof profile;
