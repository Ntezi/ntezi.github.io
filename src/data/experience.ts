export type Role = {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const roles: Role[] = [
  {
    id: 'credit-jambo',
    title: 'Senior Software Developer Lead (Consultant)',
    company: 'Credit Jambo Ltd.',
    location: 'Musanze, Rwanda — Remote (Accra, Ghana)',
    period: 'Nov 2025 — Present',
    isCurrent: true,
    summary:
      'Leading technical delivery for the Jambo360 platform, partnering closely with the CTO on architecture, code quality, and on-time milestone execution.',
    highlights: [
      'Led the technical development team, providing day-to-day guidance and oversight to drive execution against delivery milestones.',
      'Guided software architecture and technical design decisions for the Jambo360 platform in collaboration with the CTO.',
      'Established and enforced code quality practices through structured code reviews and engineering standards.',
      'Coordinated technical planning and progress tracking to support timely milestone delivery across the engagement.',
    ],
    stack: ['Node.js', 'TypeScript', 'React', 'Tailwind', 'React Native', 'PostgreSQL', 'Docker', 'Microservices'],
  },
  {
    id: 'hence',
    title: 'Senior Software Engineer Consultant (Contract)',
    company: 'Hence Technologies Ltd.',
    location: 'London, UK — Remote (Accra, Ghana)',
    period: 'Jun 2025 — Present',
    isCurrent: true,
    summary:
      "Provided full-stack engineering support for Hence Legal's global client base, working closely with teams across the US, Europe, and Africa.",
    highlights: [
      "Delivered full-stack engineering solutions tailored to Hence Legal's proprietary technology platform.",
      'Supported client-facing engagements by translating business and IT requirements into actionable technical solutions.',
      'Designed and executed product workflows, ensuring alignment with complex client needs under tight deadlines.',
      'Performed data integration and transformation tasks, enhancing the efficiency and accuracy of client reporting systems.',
      'Rapidly acquired proficiency in Palantir Foundry architecture and integrated it into product development workflows.',
    ],
    stack: ['Palantir Foundry', 'JavaScript', 'TypeScript', 'React', 'Data Integration', 'Workflow Automation'],
  },
  {
    id: 'umwalimu-sacco',
    title: 'Digital Factory Manager',
    company: 'UMWALIMU SACCO',
    location: 'Kigali, Rwanda',
    period: 'Jun 2023 — Present',
    isCurrent: true,
    summary:
      'Lead development and implementation of technology and business solutions, leveraging Agile methodologies and a variety of software technologies across banking and fintech integrations.',
    highlights: [
      'Implemented Agile methodologies, enhancing financial product delivery speed and client satisfaction.',
      'Introduced CI/CD, halving deployment times and ensuring high-availability banking services.',
      'Pioneered containerization, reducing infrastructure costs and enhancing application scalability.',
      'Directed key system integrations between UMWALIMU SACCO and telecom/banking sectors, optimizing transaction workflows.',
      'Spearheaded MTN Escrow Liquidation & Deposit, School Fees Collection, and School Feeding Collection (Dusangire Lunch) integrations.',
      'Led and designed an online loan application enabling teachers nationwide to apply for loans without visiting branches.',
      'Designed and implemented automation of loan provision aligned with IFRS 9 standards.',
      'Led the integration with PostBridge Interface, enabling teachers to use ATMs.',
      'Facilitated integration with RSwitch, joining the Rwanda National Digital Payment System (RNDPS) for interoperability.',
      "Revitalized UMWALIMU SACCO's APIs, reducing response times by half and enhancing system interoperability.",
      'Built a mentorship culture, strengthening the team\'s project management and system design skills.',
    ],
    stack: ['C#', 'ASP.NET 7', 'Docker', 'SQL Server', 'Windows Server', 'GitHub Actions'],
  },
  {
    id: 'ali-mentor',
    title: 'Technical Mentor (Part-time)',
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
    id: 'wiredin-academy',
    title: 'Programming Trainer',
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
    id: 'cardinal-peak',
    title: 'Software Engineer (Contract)',
    company: 'Cardinal Peak',
    location: 'Lafayette, CO, USA — Remote',
    period: 'Sep 2020 — Jun 2023',
    isCurrent: false,
    summary:
      'Built and supported microservices for US-based clients in partnership with WiredIn, focusing on live streaming, ad serving, and large-scale enterprise systems.',
    highlights: [
      'Designed and implemented multiple microservices for live streaming and ad serving.',
      'Played a key role in developing a large-scale enterprise system for live audio streaming.',
      'Debugged and resolved issues across microservices and legacy systems.',
      'Honed microservices design patterns and AWS skills (MSK, MQ, SQS, EKS).',
      'Supervised a Carnegie Mellon student practicum project in Embedded Systems.',
    ],
    stack: ['PHP', 'Node.js', 'React', 'AWS', 'Kafka', 'HLS', 'Microservices', 'Redis', 'PostgreSQL', 'MySQL', 'Docker', 'Kubernetes'],
  },
  {
    id: 'wiredin-lead',
    title: 'Senior Software Developer (Team Lead)',
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
    id: 'algorithm-consultant',
    title: 'Software Engineer Consultant',
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
    company: 'WiredIn LTD',
    location: 'Kigali, Rwanda',
    period: 'Oct 2015 — Aug 2017',
    isCurrent: false,
    summary:
      'Backend developer delivering solutions for Japanese clients, coordinating with cross-border teams and local stakeholders.',
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
    company: 'Algorithm Inc.',
    location: 'Kigali, Rwanda',
    period: 'Jan 2015 — Sep 2015',
    isCurrent: false,
    summary:
      'Led support workflows by gathering user feedback, designing enhanced features, and resolving complex technical issues.',
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
    company: 'Algorithm Inc.',
    location: 'Kigali, Rwanda',
    period: 'May 2013 — Dec 2014',
    isCurrent: false,
    summary:
      'Contributed to a Clinic Management System while collaborating with senior team members to build foundational engineering skills.',
    highlights: [
      'Reported performance issues to senior developers for prompt resolution.',
      'Conducted thorough testing and documented system resolutions.',
      'Collaborated with senior team members to troubleshoot common issues.',
    ],
    stack: ['PHP', 'Java', 'MySQL', 'Apache Derby'],
  },
];

export const currentRoles: Role[] = roles.filter((role) => role.isCurrent);
export const pastRoles: Role[] = roles.filter((role) => !role.isCurrent);
