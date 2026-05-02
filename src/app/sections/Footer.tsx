import { Code2, Github, Linkedin } from 'lucide-react';
import { profile } from '../../data/profile';
import { site } from '../../data/site';

export function Footer() {
  return (
    <footer className="py-8 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5" />
            <span className="font-medium">{profile.name}</span>
          </div>
          <p className="text-sm text-slate-400 text-center">
            © {site.copyrightYear} {profile.name}. {profile.headline}.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Ntezi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ntezi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
