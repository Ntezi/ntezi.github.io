import type { LucideIcon } from 'lucide-react';
import {
  Compass,
  Network,
  Laptop,
  Code2,
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
  { id: 'strategy', title: 'Architecture & Technical Direction', icon: Compass, description: ['Turn business requirements into service boundaries, API contracts, and phased delivery plans.', 'Guide design decisions and code reviews with attention to reliability, maintainability, and team capacity.'] },
  { id: 'financial', title: 'Banking & Payment Integrations', icon: Network, description: ['Connect financial platforms, telecom services, and payment systems.', 'Apply hands-on experience with ISO 20022, ISO 8583, SMPP, and event-driven banking workflows.'] },
  { id: 'ai', title: 'AI & Data Platform Delivery', icon: Laptop, description: ['Translate client requirements into production AI capabilities and connected data workflows.', 'Integrate Palantir Foundry applications, OSDK, OAuth, and ontology-backed services.'] },
  { id: 'product', title: 'Backend & Full-Stack Engineering', icon: Code2, description: ['Build APIs, business workflows, and web applications with C#, Go, TypeScript, Node.js, and React.', 'Connect application behavior, database models, and integration contracts from implementation through release.'] },
  { id: 'reliability', title: 'Production Reliability & Data Operations', icon: Database, description: ['Diagnose service failures, slow queries, and integration issues using production evidence.', 'Improve CI/CD, container deployment, backup automation, and database operations.'] },
  { id: 'leadership', title: 'Engineering Leadership & Mentorship', icon: Users, description: ['Support delivery planning, engineering standards, stakeholder communication, and team development.', 'Mentor engineers through system design, code reviews, practical teaching, and interview preparation.'] },
];
