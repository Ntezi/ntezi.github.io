import { ChevronRight, ExternalLink } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { featuredProjects, otherProjects } from '../../data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600">
            Selected delivery across financial systems, AI and data platforms, and distributed services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="p-6 border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-slate-500">{project.date}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-slate-500 mb-3">{project.client}</p>
                  <p className="text-slate-600 mb-4">{project.description}</p>

                  <div className="space-y-2 mb-4">
                    {project.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                    >
                      Visit project
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Selected Past Work</h3>
              <p className="text-slate-600">
                Earlier projects across IoT, mobile, and personal R&amp;D
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <Card
                  key={project.id}
                  className="p-6 bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <span className="text-xs text-slate-500">{project.date}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900">{project.title}</h4>
                  <p className="text-xs text-slate-500 mb-2">{project.client}</p>
                  <p className="text-sm text-slate-600 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[11px]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                    >
                      View
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
