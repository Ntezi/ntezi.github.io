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
  headline: 'Senior Software Engineer & Technical Leader',
  tagline:
    '10+ years building innovative solutions across Backend Engineering, Mobile Applications, and Microservice Architecture. Passionate about creating software that drives organizational success and positive societal impact.',
  location: 'Kigali, Rwanda',
  workingStatus: 'Working globally',
  availabilityBadge: 'Available for consulting',

  email: 'ngabomarius@gmail.com',
  phone: '+250 788 590 179',

  summary: [
    "I'm a seasoned Software Engineer with a Master's degree in Information Systems from Kobe Institute of Computing, Japan. With over 10 years of rich experience in the IT industry, I specialize in the full spectrum of the Software Development Life Cycle, complemented by a robust understanding of Data Science.",
    'My expertise lies in Backend Engineering, Mobile Applications, Natural Language Processing, and Data Mining. I have a proven track record in full-stack development across various tech stacks, with a keen interest in React, Node.js, and Microservice Architecture.',
    "Beyond my technical prowess, I am a dedicated mentor, committed to fostering the growth of others in the field. I've mentored developers through programs like The Room's Tech Career Catalyst and taught programming at WiredIn Academy.",
  ],

  focusAreas: [
    'Microservices',
    'Fintech Integrations',
    'Platform Modernization',
    'Full-Stack Delivery',
    'Engineering Leadership',
  ],

  stats: [
    { value: '10+', label: 'Years Experience' },
    { value: '3', label: 'Current Roles' },
    { value: '15+', label: 'Tech Stacks' },
  ] as ProfileStat[],

  socials: [
    { label: 'GitHub', href: 'https://github.com/Ntezi', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ntezi', icon: 'linkedin' },
  ] as SocialLink[],
} as const;

export type Profile = typeof profile;
