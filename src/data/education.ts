export type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string[];
};

export const education: Education[] = [
  {
    degree: 'Master of Science in Information Systems',
    institution: 'Kobe Institute of Computing, Graduate School of Information Technology',
    location: 'Kobe, Japan',
    period: 'Oct 2017 — Sep 2019',
    details: [
      'Advanced Information Network',
      'Advanced Software Developments (Cloud Computing)',
      'Information Network Special Experiments',
      'Project Management',
      'System Architecture Special Experiments',
    ],
  },
  {
    degree: 'Bachelor of Science in Computer Engineering',
    institution: 'University of Rwanda, College of Sciences and Technology (formerly KIST)',
    location: 'Kigali, Rwanda',
    period: 'Jan 2010 — Sep 2013',
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year?: string;
};

export const certifications: Certification[] = [
  {
    name: 'African Business Education (ABE) Initiative — Master\'s Degree and Internship Program',
    issuer: 'JICA / Japan Government',
    year: '2017',
  },
  {
    name: 'Japanese-Language Proficiency Test (JLPT) N4',
    issuer: 'Japan Foundation',
  },
  {
    name: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
  },
];

export type Publication = {
  title: string;
  venue: string;
  year: string;
  doi?: string;
  url?: string;
};

export const publications: Publication[] = [
  {
    title: 'The Impact of Sentiment Analysis on Social Media to Assess Customer Satisfaction: The Case of Rwanda',
    venue: '2019 IEEE 4th International Conference on Big Data Analytics (ICBDA), Suzhou, China — pp. 356–359',
    year: '2019',
    doi: '10.1109/ICBDA.2019.871321',
    url: 'https://doi.org/10.1109/ICBDA.2019.871321',
  },
];

export const hobbies: string[] = [
  'Learning New Things',
  'Programming & Data Science',
  'New Technologies',
  'Movies',
  'Traveling',
];
