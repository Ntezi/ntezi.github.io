import { Briefcase } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { currentRoles } from '../../data/experience';

export function CurrentRoles() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Current Roles</h2>
          <p className="text-lg text-slate-600">Leading technical initiatives across multiple organizations</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {currentRoles.map((role) => (
            <Card
              key={role.id}
              className="p-6 bg-white border-slate-200 hover:shadow-lg hover:border-indigo-300 transition-all"
            >
              <div className="mb-4">
                <Briefcase className="w-8 h-8 text-indigo-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-1">{role.title}</h3>
                <p className="text-indigo-600 font-medium">{role.company}</p>
                <p className="text-sm text-slate-500 mt-1">{role.period}</p>
                <p className="text-sm text-slate-500">{role.location}</p>
              </div>
              <p className="text-slate-600 text-sm mb-4">{role.summary}</p>
              <div className="flex flex-wrap gap-2">
                {role.stack.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {role.stack.length > 4 && (
                  <Badge variant="secondary" className="text-xs">
                    +{role.stack.length - 4}
                  </Badge>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
