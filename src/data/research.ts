export type ResearchProject = {
  id: string;
  title: string;
  iconName: 'code' | 'microscope' | 'book';
  accentColor: 'purple' | 'indigo' | 'blue';
  description: string;
  highlights: string[];
};

export const researchProjects: ResearchProject[] = [
  {
    id: 'ai-se',
    title: 'AI for Software Engineering',
    iconName: 'code',
    accentColor: 'purple',
    description:
      'Fintech bug-report-to-code linker using retrieval-augmented systems evaluated on regulated-domain codebases.',
    highlights: [
      'Hybrid BM25 + dense retrieval with LLM re-ranking',
      'Calibrated confidence scoring for production use',
      'Target venue: MSR / ICSE 2027',
    ],
  },
  {
    id: 'trustworthy-ai',
    title: 'Trustworthy AI Evaluation',
    iconName: 'microscope',
    accentColor: 'indigo',
    description:
      'RAG evaluation framework for LLM systems in regulated domains with focus on citation faithfulness and refusal calibration.',
    highlights: [
      'Multi-axis scoring: faithfulness, citations, answerability',
      'Evaluated on IFRS-9 and regulatory documents',
      'Target venue: TrustNLP / NeurIPS Workshop 2027',
    ],
  },
  {
    id: 'low-resource-nlp',
    title: 'Low-Resource NLP',
    iconName: 'book',
    accentColor: 'blue',
    description:
      'Kinyarwanda fintech NLP benchmark for customer service, regulatory text, and code-mixed communications.',
    highlights: [
      'Intent classification and regulatory understanding',
      'mBERT and AfroXLMR baselines with honest evaluation',
      'Target venue: AfricaNLP / EMNLP 2027',
    ],
  },
];

export const phdJourney = {
  startTerm: 'Fall 2027',
  headline: 'PhD Journey: Fall 2027 Start',
  description:
    'Targeting doctoral programs in Applied AI with a focus on systems-flavored research at the intersection of software engineering, ML infrastructure, and trustworthy AI for high-stakes domains.',
  directions: [
    'AI for developer tooling & code intelligence',
    'ML systems & data-centric infrastructure',
    'Trustworthy AI for fintech & regulated domains',
  ],
  institutions: [
    'U Luxembourg SnT (TruX Lab)',
    'TU Delft AISE / UvA AMLab',
    'Edinburgh CDTs / ETH AI Center',
    'EPFL EDIC / OIST / IMPRS-IS',
  ],
};
