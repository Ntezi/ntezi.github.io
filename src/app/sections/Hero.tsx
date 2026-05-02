import { Mail, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { profile } from '../../data/profile';

const profileImg = '/assets/profile-img.jpg';
const heroBg = '/assets/hero-bg.jpg';
const resumePdf = '/assets/marius-ngaboyamahina-resume.pdf';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-50/95"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">{profile.availabilityBadge}</span>
            </div>

            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4">{profile.headline}</h1>
              <p className="text-xl text-slate-600 leading-relaxed">{profile.tagline}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white gap-2">
                <a href={`mailto:${profile.email}`}>
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-slate-300 hover:border-indigo-300 hover:bg-indigo-50"
              >
                <a href={resumePdf} download="Marius_Ngaboyamahina_Resume.pdf">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex gap-6 pt-4">
              {profile.stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                  {index < profile.stats.length - 1 && <div className="w-px h-10 bg-slate-300" />}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={profileImg}
                  alt={`${profile.name} — ${profile.headline}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm font-medium">{profile.availabilityBadge}</span>
                  </div>
                  <p className="text-sm opacity-90">
                    Based in {profile.location} • {profile.workingStatus}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
