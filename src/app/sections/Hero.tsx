import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { profile } from '../../data/profile';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-teal-300 mb-6">{profile.availabilityBadge}</p>
            <p className="text-lg text-slate-300 mb-3">Hello, I’m Marius.</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] mb-6">Engineering Leader &amp; <span className="text-teal-300">Forward Deployed Engineer.</span></h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">{profile.tagline}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-lg px-5 py-3 bg-teal-300 text-slate-950 font-semibold hover:bg-teal-200">Explore my work <ArrowDown size={17} /></a>
              <a href="/assets/marius-ngaboyamahina-resume.pdf" download="Marius_Ngaboyamahina_CV_Clarified_en.pdf" className="inline-flex items-center gap-2 rounded-lg px-5 py-3 border border-slate-600 hover:bg-slate-800"><Download size={17} /> Download CV</a>
            </div>
            <dl className="grid grid-cols-3 gap-4 border-t border-slate-700 mt-10 pt-7">
              {profile.stats.map(stat => <div key={stat.label}><dt className="text-3xl font-semibold text-white">{stat.value}</dt><dd className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</dd></div>)}
            </dl>
          </div>
          <div className="max-w-sm w-full mx-auto lg:ml-auto">
            <img src="/assets/profile-img.jpg" alt="Marius Ngaboyamahina" width={480} height={560} className="w-full aspect-[6/7] object-cover rounded-2xl" fetchPriority="high" />
            <div className="flex items-center justify-between gap-4 pt-5">
              <div><p className="font-medium">{profile.name}</p><p className="text-sm text-slate-400 mt-1">Accra, Ghana · Working globally</p></div>
              <a href={`mailto:${profile.email}`} aria-label="Email Marius" className="rounded-full p-3 border border-slate-600 hover:bg-slate-800"><ArrowUpRight size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
