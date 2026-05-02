import { GraduationCap, Award } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { profile } from '../../data/profile';
import { education, certifications } from '../../data/education';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">About Me</h2>
          <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
            {profile.summary.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {profile.focusAreas.map((area) => (
              <Badge key={area} className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                {area}
              </Badge>
            ))}
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <Card className="p-6 border-slate-200 hover:border-indigo-300 transition-colors">
              <GraduationCap className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Education</h3>
              {education.map((entry) => (
                <p key={entry.degree} className="text-slate-600 text-sm mt-1 first:mt-0">
                  {entry.degree} — {entry.institution.split(',')[0]}
                </p>
              ))}
            </Card>
            <Card className="p-6 border-slate-200 hover:border-indigo-300 transition-colors">
              <Award className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Certifications</h3>
              {certifications.map((cert) => (
                <p key={cert.name} className="text-slate-600 text-sm mt-1 first:mt-0">
                  {cert.name}
                </p>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
