export type Project = {
  id: string;
  title: string;
  category: string;
  client: string;
  date: string;
  url?: string;
  featured: boolean;
  description: string;
  achievements: string[];
  tech: string[];
};

export const projects: Project[] = [
  {
    id: 'jambo360',
    title: 'Jambo360 Platform',
    category: 'FinTech',
    client: 'Credit Jambo Ltd.',
    date: 'Nov 2025 — Present',
    featured: true,
    description:
      'Led technical development of a digital financial solutions platform, establishing code quality practices and coordinating delivery milestones with the CTO.',
    achievements: [
      'Microservices architecture and service boundaries',
      'Engineering standards and structured code reviews',
      'CI/CD pipeline and milestone tracking',
    ],
    tech: ['Node.js', 'TypeScript', 'React', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'umwalimu-digital',
    title: 'UMWALIMU SACCO Digital Transformation',
    category: 'FinTech',
    client: 'UMWALIMU SACCO',
    date: 'Jun 2023 — Present',
    url: 'https://www.umwalimusacco.rw',
    featured: true,
    description:
      'Spearheaded multi-year digital modernization including MTN Escrow, School Fees Collection, RSwitch interoperability, and an online loan application for teachers nationwide.',
    achievements: [
      'Halved deployment times via CI/CD adoption',
      'Reduced infrastructure costs through containerization',
      'IFRS 9-aligned automation of loan provisions',
      'RNDPS interoperability via RSwitch',
    ],
    tech: ['C#', 'ASP.NET 7', 'SQL Server', 'Docker', 'GitHub Actions'],
  },
  {
    id: 'school-fees',
    title: 'School Fees & Feeding Collection',
    category: 'FinTech',
    client: 'UMWALIMU SACCO • MTN • MINEDUC • MINICOFIN',
    date: 'Nov 2023',
    url: 'https://www.umwalimusacco.rw',
    featured: true,
    description:
      'Digitized school fee and meal payments for 3.9M+ students in Rwanda through a public–private collaboration that improved efficiency and accessibility for parents and schools.',
    achievements: [
      'Nationwide rollout to schools across Rwanda',
      'Telecom + banking + government integration',
      'Significant deposit growth and operational efficiency',
    ],
    tech: ['C#', 'ASP.NET', 'SQL Server', 'API Integration'],
  },
  {
    id: 'live-streaming',
    title: 'Live Streaming Microservices',
    category: 'Microservices',
    client: 'Cardinal Peak (Lafayette, CO)',
    date: 'Sep 2020 — Jun 2023',
    featured: true,
    description:
      'Designed and implemented enterprise-scale microservices for live audio streaming and ad serving, debugging across legacy systems and adopting AWS-native services.',
    achievements: [
      'Large-scale system design with HLS pipelines',
      'AWS infrastructure (MSK, MQ, SQS, EKS)',
      'Kafka integration for high-throughput streaming',
    ],
    tech: ['Node.js', 'PHP', 'AWS', 'Kafka', 'Kubernetes', 'Redis'],
  },
  {
    id: 'murakoze',
    title: 'Murakoze',
    category: 'IoT',
    client: 'Rexvirt • WiredIn',
    date: 'Aug 2018',
    url: 'https://wiredin.rw',
    featured: false,
    description:
      'Started during a Tokyo internship, evolved from ICHIGOJAM and Arduino hardware into a tablet application that manages queues in customer service settings.',
    achievements: ['Hardware-to-software product evolution', 'Custom PCB and enclosure design', 'Field deployment in Japan'],
    tech: ['Arduino', 'KiCad', 'Fusion 360', 'React Native'],
  },
  {
    id: 'pos-microservices',
    title: 'Microservice-Based POS',
    category: 'Microservices',
    client: 'Personal Project',
    date: 'Dec 2020',
    url: 'https://www.linkedin.com/in/ntezi',
    featured: false,
    description:
      'A modular point-of-sale system built around microservices to support seamless transaction processing and demonstrate scalable architecture patterns.',
    achievements: ['Service decomposition and bounded contexts', 'Resilient transaction flows', 'Containerized deployment'],
    tech: ['Node.js', 'PostgreSQL', 'Docker', 'REST'],
  },
  {
    id: 'waraukado',
    title: 'Waraukado',
    category: 'IoT',
    client: 'Rexvirt • WiredIn',
    date: 'Oct 2016',
    url: 'https://www.waraukado.club',
    featured: false,
    description:
      'IoT-based retail engagement project using smart interfaces to optimize customer interactions and create a streamlined shopping experience.',
    achievements: ['Retail-grade smart interfaces', 'Customer engagement metrics', 'Cross-team delivery (JP/RW)'],
    tech: ['PHP', 'Yii2', 'Arduino', 'AWS'],
  },
  {
    id: 'sarating',
    title: 'SARating App',
    category: 'Mobile App',
    client: 'Personal Project',
    date: 'Oct 2017',
    url: 'https://github.com/Ntezi/SARating',
    featured: false,
    description:
      'Service ranking system based on sentiment analysis. Aggregates reviews from online platforms and uses the Wilson Score confidence interval for balanced rankings.',
    achievements: ['Sentiment analysis pipeline', 'Wilson Score ranking', 'Mobile-first UX'],
    tech: ['Python', 'NLP', 'Android', 'Java'],
  },
  {
    id: 'ikizamini',
    title: 'Ikizamini App',
    category: 'Web App',
    client: 'Personal Project',
    date: 'Jul 2024',
    url: 'https://ikizamini-a54cb.web.app/',
    featured: false,
    description:
      'Interactive tool for practicing Rwandan driving theory exam questions, with real-time feedback and exam-condition timers, sourced via a web crawler over the Rwanda Traffic Guide.',
    achievements: ['Web crawler for question sourcing', 'Real-time scoring & feedback', 'Exam-mode timer'],
    tech: ['JavaScript', 'Firebase', 'Web Crawler'],
  },
];

export const featuredProjects: Project[] = projects.filter((project) => project.featured);
export const otherProjects: Project[] = projects.filter((project) => !project.featured);
