export type SkillLevel = 'expert' | 'advanced' | 'familiar';

export type SkillGroup = {
  level: SkillLevel;
  label: string;
  stars: number;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    level: 'expert',
    label: 'Expert',
    stars: 5,
    description: 'Daily-driver tools and frameworks for production work.',
    items: [
      'PHP',
      'JavaScript',
      'TypeScript',
      'SQL',
      'Git',
      'Yii Framework',
      'Node.js',
      'Express.js',
      'Tailwind CSS',
      'System Architectural Design',
      'Requirements Analysis',
      'Software Requirements Specification',
      'Software & Database Design',
      'API Documentation (Swagger & Postman)',
      'Microservice Design',
      'PostgreSQL',
    ],
  },
  {
    level: 'advanced',
    label: 'Advanced',
    stars: 4,
    description: 'Strong working proficiency, regularly applied across projects.',
    items: [
      'Java',
      'Python',
      'C#',
      'React',
      'Next.js',
      'Angular',
      'Spring Boot',
      '.NET 7',
      'Android',
      'Object-Oriented Design',
      'Docker & Kubernetes',
      'AWS (Developer Associate)',
      'Jenkins',
      'CI/CD',
      'Maven',
      'Gradle',
      'SQL Server',
      'Data Processing',
      'Confluent Cloud (Kafka & Avro)',
      'RabbitMQ',
    ],
  },
  {
    level: 'familiar',
    label: 'Familiar',
    stars: 3,
    description: 'Working knowledge — comfortable picking up tasks with ramp-up.',
    items: [
      'C++',
      'WordPress',
      'Symfony',
      'Laravel',
      'Machine Learning',
      'Natural Language Processing',
      'IoT (Arduino & Raspberry Pi)',
      'KiCad',
      'Fusion 360',
    ],
  },
];

export type SkillProgress = {
  label: string;
  value: number;
};

export const skillProgress: SkillProgress[] = [
  { label: 'System Architecture & Technical Leadership', value: 90 },
  { label: 'Microservice Design & Integration', value: 90 },
  { label: 'Backend Engineering (Node.js, PHP)', value: 90 },
  { label: 'API Design & Documentation', value: 90 },
  { label: 'Data Modeling & SQL (PostgreSQL/MySQL)', value: 90 },
  { label: 'CI/CD & Engineering Standards', value: 85 },
  { label: 'Frontend Engineering (React/Next.js)', value: 85 },
  { label: 'Mobile Engineering (React Native/Android)', value: 80 },
  { label: 'Cloud & DevOps (AWS, Docker, Kubernetes)', value: 80 },
  { label: 'Platform Engineering (C#/.NET 7, Java/Spring Boot)', value: 80 },
  { label: 'Data Engineering (ETL, Kafka, RabbitMQ)', value: 75 },
  { label: 'Data Science & NLP', value: 65 },
];

export type SkillCategory = {
  emoji: string;
  title: string;
  description: string;
};

export const skillCategories: SkillCategory[] = [
  {
    emoji: '🏗️',
    title: 'Architecture',
    description: 'System design, microservices, and cloud infrastructure.',
  },
  {
    emoji: '👥',
    title: 'Leadership',
    description: 'Team lead, mentorship, and Agile delivery.',
  },
  {
    emoji: '🔬',
    title: 'Innovation',
    description: 'Data science, NLP, and machine learning.',
  },
];
