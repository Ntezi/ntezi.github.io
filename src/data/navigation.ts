export type NavItem = {
  label: string;
  href: string;
  feature?: 'showResearch' | 'showServices' | 'showEducation' | 'showFullExperience';
};

export const navigation: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services', feature: 'showServices' },
  { label: 'Research', href: '#research', feature: 'showResearch' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education', feature: 'showEducation' },
  { label: 'Contact', href: '#contact' },
];
