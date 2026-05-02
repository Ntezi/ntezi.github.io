import { ChevronRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { roles } from '../../data/experience';

export function ExperienceTimeline() {
  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Career Timeline</h2>
          <p className="text-lg text-slate-600">A decade of building and leading software teams</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200" aria-hidden="true" />

          <div className="space-y-8">
            {roles.map((role, index) => {
              const alignRight = index % 2 === 1;
              return (
                <div
                  key={role.id}
                  className={`relative grid sm:grid-cols-2 sm:gap-8 ${
                    alignRight ? 'sm:[&>article]:col-start-2' : ''
                  }`}
                >
                  <span
                    className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-600 ring-4 ring-white shadow"
                    aria-hidden="true"
                  />
                  <article
                    className={`pl-12 sm:pl-0 ${alignRight ? 'sm:pl-8' : 'sm:pr-8 sm:text-left'}`}
                  >
                    <Card className="p-6 border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-indigo-600">{role.period}</span>
                        {role.isCurrent && (
                          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                            Current
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900">{role.title}</h3>
                      <p className="text-slate-700 font-medium">{role.company}</p>
                      <p className="text-sm text-slate-500 mb-3">{role.location}</p>
                      <p className="text-slate-600 text-sm mb-4">{role.summary}</p>
                      <ul className="space-y-2 mb-4">
                        {role.highlights.slice(0, 4).map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2 text-sm text-slate-600">
                            <ChevronRight className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {role.stack.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
