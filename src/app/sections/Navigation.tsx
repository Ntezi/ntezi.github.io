import { Code2, Github, Linkedin } from 'lucide-react';
import { navigation } from '../../data/navigation';
import { profile } from '../../data/profile';
import { site } from '../../data/site';

export function Navigation() {
  const visibleItems = navigation.filter((item) => {
    if (!item.feature) return true;
    return site.features[item.feature];
  });

  return (
    <nav aria-label="Main navigation" className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#top" className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-indigo-600" />
            <span className="font-semibold text-slate-900"><span className="sm:hidden">Marius N.</span><span className="hidden sm:inline">{profile.shortName}</span></span>
          </a>

          <div className="hidden xl:flex gap-6">
            {visibleItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Ntezi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ntezi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="xl:hidden flex gap-5 overflow-x-auto py-3 border-t border-slate-100" aria-label="Section links">
          {visibleItems.map(item => <a key={item.href} href={item.href} className="shrink-0 text-sm text-slate-600 hover:text-indigo-600">{item.label}</a>)}
        </div>
      </div>
    </nav>
  );
}
