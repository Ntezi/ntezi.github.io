import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { skillGroups, skillProgress, skillCategories } from '../../data/skills';

const levelStyles: Record<'expert' | 'advanced' | 'familiar', string> = {
  expert: 'bg-indigo-600 text-white hover:bg-indigo-700',
  advanced: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
  familiar: 'bg-purple-100 text-purple-700 hover:bg-purple-200',
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
          <p className="text-lg text-slate-600">
            Comprehensive skill set across modern technologies and engineering practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {skillGroups.map((group) => (
            <Card key={group.level} className="p-8 bg-white border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-slate-900">{group.label} Level</h3>
                <span className="text-amber-500" aria-label={`${group.stars} out of 5`}>
                  {'★'.repeat(group.stars)}
                  <span className="text-slate-300">{'★'.repeat(5 - group.stars)}</span>
                </span>
              </div>
              <p className="text-sm text-slate-600 mb-4">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge key={skill} className={levelStyles[group.level]}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-white border-slate-200 mb-10">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Capability Self-Assessment</h3>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
            {skillProgress.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-700 font-medium">{item.label}</span>
                  <span className="text-slate-500">{item.value}%</span>
                </div>
                <Progress value={item.value} className="h-2" />
              </div>
            ))}
          </div>
        </Card>

        <div className="grid sm:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6 text-center bg-white border-slate-200">
              <div className="text-3xl mb-2">{category.emoji}</div>
              <h4 className="font-semibold text-slate-900 mb-2">{category.title}</h4>
              <p className="text-sm text-slate-600">{category.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
