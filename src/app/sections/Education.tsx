import { GraduationCap, Award, BookOpen, ExternalLink, Heart } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { education, certifications, publications, hobbies } from '../../data/education';

export function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Education & Credentials</h2>
          <p className="text-lg text-slate-600">Academic background, certifications, and published research</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="p-6 border-slate-200 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Education</h3>
            </div>

            <div className="space-y-5">
              {education.map((entry) => (
                <div key={entry.degree} className="border-l-2 border-indigo-200 pl-4">
                  <h4 className="font-semibold text-slate-900">{entry.degree}</h4>
                  <p className="text-sm text-indigo-600 font-medium">{entry.institution}</p>
                  <p className="text-sm text-slate-500">
                    {entry.location} · {entry.period}
                  </p>
                  {entry.details && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {entry.details.map((detail) => (
                        <Badge key={detail} variant="secondary" className="text-[11px]">
                          {detail}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Awards & Certifications</h3>
            </div>

            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <p className="text-sm font-medium text-slate-900">{cert.name}</p>
                  <p className="text-xs text-slate-500">
                    {cert.issuer}
                    {cert.year ? ` · ${cert.year}` : ''}
                  </p>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 border-slate-200 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Publications</h3>
            </div>

            <ul className="space-y-3">
              {publications.map((pub) => (
                <li key={pub.title} className="border-l-2 border-emerald-200 pl-4">
                  <p className="font-medium text-slate-900">{pub.title}</p>
                  <p className="text-sm text-slate-600">{pub.venue}</p>
                  {pub.doi && (
                    <a
                      href={pub.url ?? `https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      DOI: {pub.doi}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Beyond Code</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby) => (
                <Badge key={hobby} variant="secondary">
                  {hobby}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
