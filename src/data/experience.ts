export type Role = {
  id: string;
  title: string;
  company: string;
  relationship: string;
  location: string;
  period: string;
  isCurrent: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const roles: Role[] = [
  {
    id: 'umwalimu-sacco',
    title: 'Digital Factory Manager',
    relationship: 'Permanent employment · Team of 8',
    company: 'UMWALIMU SACCO',
    location: 'Kigali headquarters · Remote from Accra, Ghana',
    period: 'Jun 2023 — Present',
    isCurrent: true,
    summary: 'Lead an eight-person team responsible for the design, delivery, integration, and production operation of digital banking and business solutions.',
    highlights: [
      'Led eKash / RNDPS integration using ISO 20022 and PostBridge integration using ISO 8583 for interoperability and ATM access.',
      'Introduced Go for SMPP integration and use Kafka for account information synchronization, validations, and event-driven processing.',
      'Directed online loan application delivery and the revamp of internet and mobile banking.',
      'Led Educard integrations, MTN Escrow, school-fees and Dusangire Lunch collections, and Agency Banking.',
      'Led IFRS 9 expected credit loss (ECL) automation.',
      'Introduced Agile delivery, CI/CD, and containerization; mentor engineers in architecture, system design, and project execution.',
    ],
    stack: ['C#', 'ASP.NET Core', 'Go', 'Kafka', 'ISO 20022', 'ISO 8583', 'SMPP', 'SQL Server', 'Redis', 'Docker', 'GitHub Actions'],
  },
  {
    id: 'hence',
    title: 'Forward Deployed Engineer — Consultant',
    relationship: 'Concurrent consultancy',
    company: 'Hence Technologies Ltd.',
    location: 'London, UK — Remote (Accra, Ghana)',
    period: 'Jun 2025 — Present',
    isCurrent: true,
    summary: "Implement production AI and data solutions for Hence Legal, working directly with stakeholders across the United States, Europe, and Africa.",
    highlights: [
      'Translate complex client requirements into deployable workflows, integrations, and maintainable product capabilities.',
      'Deployed through Hence to Unruly Corporation for a Palantir Foundry stack migration.',
      'Aligned frontend and backend endpoints, OSDK dependencies, OAuth configuration, and ontology-backed application wiring.',
    ],
    stack: ['Palantir Foundry', 'OSDK', 'OAuth', 'TypeScript', 'React', 'Data Integration', 'Production AI'],
  },
  {
    id: 'credit-jambo',
    title: 'Senior Software Developer Lead (Consultant)',
    relationship: 'Concurrent fixed-term consultancy',
    company: 'Credit Jambo Ltd.',
    location: 'Musanze, Rwanda — Remote (Accra, Ghana)',
    period: 'Nov 2025 — Jun 2026',
    isCurrent: false,
    summary:
      'Led technical delivery for the Jambo360 platform, partnering closely with the CTO on architecture, code quality, and on-time milestone execution.',
    highlights: [
      'Led the technical development team, providing day-to-day guidance and oversight to drive execution against delivery milestones.',
      'Guided software architecture and technical design decisions for the Jambo360 platform in collaboration with the CTO.',
      'Established and enforced code quality practices through structured code reviews and engineering standards.',
      'Coordinated technical planning and progress tracking to support timely milestone delivery across the engagement.',
    ],
    stack: ['Node.js', 'TypeScript', 'React', 'Tailwind', 'React Native', 'PostgreSQL', 'Docker', 'Microservices'],
  },
  {
    id: 'wiredin-lead',
    title: 'Senior Software Developer (Team Lead)',
    relationship: 'Primary employment',
    company: 'WiredIn LTD',
    location: 'Kigali, Rwanda',
    period: 'Feb 2020 — Jun 2023',
    isCurrent: false,
    summary:
      'Led delivery across international clients in Japan, the Netherlands, France, and Rwanda; owned requirements, design, implementation, and mentoring of junior developers.',
    highlights: [
      'Analyzed requirements, designed systems, and implemented robust solutions to meet project goals.',
      'Contributed to architectural decisions and core business logic across projects.',
      'Monitored projects, proactively identifying and resolving logic and coding issues.',
    ],
    stack: ['PHP', 'Yii2', 'Java', 'Spring Boot', 'Node.js', 'React', 'React Native', 'Android', 'AWS', 'Redis', 'PostgreSQL', 'MySQL', 'Docker'],
  },
  {
  "id": "audacy",
  "title": "Software Engineer — Audacy Deployment",
  "company": "Audacy / Cardinal Peak partnership",
  "period": "Sep 2020 — Oct 2021",
  "summary": "Contributed to software delivery for Audacy through the WiredIn–Cardinal Peak partnership.",
  "stack": [
    "Node.js",
    "AWS",
    "PostgreSQL",
    "Redis",
    "Kubernetes",
    "HLS"
  ],
  "relationship": "Client deployment through WiredIn",
  "location": "Remote · United States",
  "isCurrent": false,
  "highlights": []
},
  {
  "id": "amperwave",
  "title": "Software Engineer — AmperWave Deployment",
  "company": "AmperWave / Cardinal Peak partnership",
  "period": "Nov 2021 — Sep 2022",
  "summary": "Designed microservices for live audio streaming and ad serving; resolved production issues across modern services and legacy systems. Worked with Kafka, Confluent, and AWS MSK, MQ, SQS, and EKS.",
  "stack": [
    "PHP",
    "React",
    "Kafka",
    "Confluent",
    "HLS",
    "AWS",
    "Docker",
    "Kubernetes"
  ],
  "relationship": "Client deployment through WiredIn",
  "location": "Remote · United States",
  "isCurrent": false,
  "highlights": []
},
  {
  "id": "energiepartners",
  "title": "Software Engineer — EnergiePartners Deployment",
  "company": "EnergiePartners",
  "period": "Feb 2020 — Aug 2020; Oct 2022 — Jun 2023",
  "summary": "Delivered software engineering work across two assignments for a Netherlands-based client while employed by WiredIn.",
  "stack": [
    "Java",
    "Android",
    "Python",
    "Django"
  ],
  "relationship": "Client deployment through WiredIn",
  "location": "Remote · Netherlands",
  "isCurrent": false,
  "highlights": []
},
  {
    id: 'wiredin-academy',
    title: 'Programming Trainer',
    relationship: 'Part-time alongside WiredIn employment',
    company: 'WiredIn Academy',
    location: 'Kigali, Rwanda',
    period: 'Nov 2022 — Jun 2023',
    isCurrent: false,
    summary:
      "Trained students on programming fundamentals through advanced concepts as part of WiredIn Academy's programming curriculum.",
    highlights: [
      'Helped students understand fundamental programming concepts using Python.',
      'Facilitated pair-programming exercises with hands-on experience on real-world projects.',
    ],
    stack: ['Python', 'Pair Programming', 'Curriculum Design'],
  },
  {
    id: 'ali-mentor',
    title: 'Technical Mentor (Part-time)',
    relationship: 'Concurrent consultancy',
    company: 'African Leadership International Limited',
    location: 'Cybercity, Mauritius',
    period: 'Nov 2022',
    isCurrent: false,
    summary:
      "Mentored Tech Career Catalyst (TCC) participants as part of The Room's Global Tech Expert team, contributing to the growth of Africa's upcoming tech talent.",
    highlights: [
      'Conducted mock interviews with TCC participants, covering both technical and behavioral questions.',
      'Reviewed resumes and provided actionable feedback to improve job application success.',
    ],
    stack: ['Mentorship', 'Interview Coaching', 'Resume Review'],
  },
  {
    id: 'algorithm-consultant',
    title: 'Software Engineer Consultant',
    relationship: 'Concurrent consultancy',
    company: 'Algorithm Inc.',
    location: 'Kigali, Rwanda',
    period: 'Feb 2020 — Mar 2023',
    isCurrent: false,
    summary:
      'Supported product performance, data operations, and integrations across VSDC, POS, and ERP systems; contributed to international deployments and data warehouse operations as DBA Consultant and CTO Assistant.',
    highlights: [
      'Contributed to a healthcare connectivity solution linking pharmacies, insurance, and hospitals/clinics.',
      'Improved performance for VSDC, POS, and ERP systems integrated with the Rwanda Revenue Authority (RRA).',
      'Played a significant role in the export of Electronic Billing Machines (EBM) to Ghana, supporting submissions to the Ghana Revenue Authority (GRA).',
      'Executed ETL operations for the Ishyiga Data Warehouse.',
      'Implemented automated database backups with Amazon S3 integration for security and recovery.',
      'Supported integrity and performance via daily backups, migrations, and monitoring.',
    ],
    stack: ['PHP', 'Java', 'Python', 'MySQL', 'Apache Derby', 'AWS'],
  },
  {
    id: 'rexvirt',
    title: 'Software Engineer (Professional Intern)',
    relationship: 'ABE Initiative internship · WiredIn partner placement',
    company: 'Rexvirt Communications Inc.',
    location: 'Tokyo, Japan',
    period: 'Sep 2019 — Jan 2020',
    isCurrent: false,
    summary:
      'Developed an IoT solution across web, mobile, and REST APIs, including supporting hardware artifacts within a Japanese business environment.',
    highlights: [
      'Built web/mobile applications and RESTful APIs for the IoT solution.',
      'Used Yii Framework, Arduino, and React Native regularly in development.',
      'Designed PCB and 3D-printed enclosures using KiCad and Fusion 360.',
    ],
    stack: ['PHP', 'Yii2', 'React Native', 'Android', 'AWS', 'Arduino', 'Fusion 360', 'KiCad', 'MySQL'],
  },
  {
    id: 'wiredin-developer',
    title: 'Software Developer',
    relationship: 'Employment',
    company: 'WiredIn LTD',
    location: 'Kigali, Rwanda',
    period: 'Oct 2015 — Aug 2017',
    isCurrent: false,
    summary:
      'Worked as a bridge engineer for Japanese clients, translating requirements and coordinating delivery, quality assurance, and communication across Rwanda and Japan.',
    highlights: [
      'Coordinated design and implementation with project managers across cross-border teams.',
      'Collaborated remotely with teams in Japan on application design and quality assurance.',
      'Engaged local clients in Rwanda to gather feedback throughout the project lifecycle.',
    ],
    stack: ['PHP', 'Yii2', 'Ionic 2', 'Angular', 'AWS', 'Redis', 'PostgreSQL', 'MySQL', 'Docker'],
  },
  {
    id: 'algorithm-support',
    title: 'Software Support Manager',
    relationship: 'Employment · Team of 10',
    company: 'Algorithm Inc.',
    location: 'Kigali, Rwanda',
    period: 'Jan 2015 — Sep 2015',
    isCurrent: false,
    summary:
      'Led ten support specialists across client organizations, coordinating assignments, escalations, service quality, and client communication. Automated support workflows and built a bug-reporting tool.',
    highlights: [
      'Identified, reported, and rectified QA issues to maintain high service standards.',
      'Facilitated training courses for new employees and users.',
      'Built a Bug Reporting Tool to streamline feedback collection.',
      'Provided advanced troubleshooting on complex technical issues.',
      'Analyzed reports and surveys, designing new features based on client feedback.',
    ],
    stack: ['PHP', 'Java', 'MySQL', 'Apache Derby'],
  },
  {
    id: 'algorithm-junior',
    title: 'Junior Software Developer',
    relationship: 'Employment',
    company: 'Algorithm Inc.',
    location: 'Kigali, Rwanda',
    period: 'May 2013 — Dec 2014',
    isCurrent: false,
    summary:
      'Contributed to Ishyiga inventory optimization, including stockout management and purchase forecasting, alongside business and clinic-management software.',
    highlights: [
      'Reported performance issues to senior developers for prompt resolution.',
      'Conducted thorough testing and documented system resolutions.',
      'Collaborated with senior team members to troubleshoot common issues.',
    ],
    stack: ['PHP', 'Java', 'MySQL', 'Apache Derby'],
  },
];

export const currentRoles = roles.filter((role) => role.isCurrent);
export const pastRoles = roles.filter((role) => !role.isCurrent);
