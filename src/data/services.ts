import type { LucideIcon } from 'lucide-react';
import {
  Compass,
  Network,
  Laptop,
  Code2,
  ShieldCheck,
  Server,
  BarChart3,
  Users,
  Database,
} from 'lucide-react';

export type Service = {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string[];
};

export const services: Service[] = [
  {
    id: 'strategy',
    title: 'Technical Strategy & Architecture',
    icon: Compass,
    description: [
      'Turn business goals into a practical technical roadmap (phased delivery, risks, dependencies, milestones).',
      'Define target architecture: service boundaries, data flows, API contracts, and integration patterns.',
      'Choose the right stack for the constraints (on-prem vs cloud, cost, skills, compliance, latency).',
      'Produce actionable artifacts: architecture diagrams, ADRs, API spec outlines, deployment blueprints.',
    ],
  },
  {
    id: 'systems',
    title: 'System & Microservices Design',
    icon: Network,
    description: [
      'Break monoliths into reliable services (domain boundaries, ownership, contracts, versioning).',
      'Design event-driven and request/response systems with idempotency and retries.',
      'Build for failure: timeouts, circuit breakers, backpressure, graceful degradation.',
      'Establish consistency and data patterns (outbox, saga, CDC, caching).',
    ],
  },
  {
    id: 'product',
    title: 'Full-Stack Product Delivery',
    icon: Laptop,
    description: [
      'Deliver features end-to-end: UI + API + database + infrastructure.',
      'Schema design, migrations, performance tuning, and indexing.',
      'Real-world workflows: validation, approvals, audit trails, role-based access.',
      'Ship iteratively with clean engineering practices (tests, code reviews, standards).',
    ],
  },
  {
    id: 'apis',
    title: 'API Engineering & Integrations',
    icon: Code2,
    description: [
      'Design clean APIs (REST, versioning, pagination, error models).',
      'Integrate with banking, telco, payments, and tax/EBM-style systems.',
      'Build adapters, mapping, reconciliation, monitoring, and alerting.',
      'Produce high-quality API documentation (Swagger / Postman style).',
    ],
  },
  {
    id: 'reliability',
    title: 'Platform Reliability & Production Readiness',
    icon: ShieldCheck,
    description: [
      'Production hardening: logging, metrics, tracing, health checks, SLAs/SLOs.',
      'Observability dashboards, incident playbooks, and on-call readiness.',
      'Improve uptime and performance: profiling, query optimization, bottleneck removal.',
      'Reliability patterns: rate limits, retries, idempotency, safe rollouts.',
    ],
  },
  {
    id: 'devops',
    title: 'DevOps, CI/CD & Release Engineering',
    icon: Server,
    description: [
      'Implement CI/CD pipelines to reduce lead time and release risk.',
      'Containerize services (Docker) and prepare for scalable deployments (Kubernetes where relevant).',
      'Improve environments: secrets management, config strategy, deployment automation.',
      'Release practices: feature flags, canary / blue-green, rollback strategy.',
    ],
  },
  {
    id: 'data',
    title: 'Data Engineering for Analytics',
    icon: BarChart3,
    description: [
      'Build ETL/ELT pipelines, data quality checks, and operational reporting datasets.',
      'Design reporting-friendly models (star schemas, marts, incremental loads).',
      'Enable decision dashboards (finance ops, transaction flows, performance KPIs).',
      'Automate backups, retention, and recovery for business continuity.',
    ],
  },
  {
    id: 'leadership',
    title: 'Engineering Leadership & Team Enablement',
    icon: Users,
    description: [
      'Delivery leadership: planning, estimation, sprint execution, stakeholder alignment.',
      'Code quality systems: review standards, linting, testing strategy, definition of done.',
      'Mentoring and upskilling: junior-to-mid growth, interview coaching, technical workshops.',
      'Lightweight process improvements (Agile done right, not heavy).',
    ],
  },
  {
    id: 'dba',
    title: 'Database Administration (DBA)',
    icon: Database,
    description: [
      'Performance tuning (slow queries, indexes, execution plans).',
      'Backups, restore testing, and disaster-recovery readiness.',
      'Security and access control (roles, least privilege, auditing).',
      'Maintenance and monitoring (capacity, integrity, scheduled jobs).',
    ],
  },
];
