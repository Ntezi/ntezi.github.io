import { Microscope, Code2, BookOpen, Rocket, ChevronRight, type LucideIcon } from 'lucide-react';
import { Card } from '../components/ui/card';
import { researchProjects, phdJourney, type ResearchProject } from '../../data/research';

const iconMap: Record<ResearchProject['iconName'], LucideIcon> = {
  code: Code2,
  microscope: Microscope,
  book: BookOpen,
};

const accentMap: Record<ResearchProject['accentColor'], { bg: string; icon: string; chevron: string; border: string }> = {
  purple: {
    bg: 'bg-purple-100',
    icon: 'text-purple-600',
    chevron: 'text-purple-600',
    border: 'hover:border-purple-300',
  },
  indigo: {
    bg: 'bg-indigo-100',
    icon: 'text-indigo-600',
    chevron: 'text-indigo-600',
    border: 'hover:border-indigo-300',
  },
  blue: {
    bg: 'bg-blue-100',
    icon: 'text-blue-600',
    chevron: 'text-blue-600',
    border: 'hover:border-blue-300',
  },
};

export function Research() {
  return (
    <section
      id="research"
      className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            <Microscope className="w-4 h-4" />
            <span className="text-sm font-medium">Research & Innovation</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Upcoming Research Projects</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Pursuing a PhD in Applied AI with focus on trustworthy software systems, developer
            tooling, and ML infrastructure for regulated domains
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {researchProjects.map((project) => {
            const Icon = iconMap[project.iconName];
            const accent = accentMap[project.accentColor];
            return (
              <Card
                key={project.id}
                className={`p-6 bg-white border-slate-200 ${accent.border} hover:shadow-lg transition-all`}
              >
                <div className={`w-12 h-12 ${accent.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${accent.icon}`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{project.description}</p>
                <div className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2">
                      <ChevronRight className={`w-4 h-4 ${accent.chevron} mt-0.5 flex-shrink-0`} />
                      <span className="text-xs text-slate-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-3">{phdJourney.headline}</h3>
              <p className="text-slate-200 mb-4">{phdJourney.description}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-white mb-2">Priority Research Directions:</h4>
                  <ul className="space-y-1 text-sm text-slate-300">
                    {phdJourney.directions.map((direction) => (
                      <li key={direction}>• {direction}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Target Institutions:</h4>
                  <ul className="space-y-1 text-sm text-slate-300">
                    {phdJourney.institutions.map((institution) => (
                      <li key={institution}>• {institution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
