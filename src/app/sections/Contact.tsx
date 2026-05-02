import { Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { profile } from '../../data/profile';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Let&rsquo;s Work Together</h2>
        <p className="text-lg text-slate-600 mb-8">
          I&rsquo;m always interested in hearing about new projects and opportunities. Whether you
          need a technical leader, consultant, or mentor, let&rsquo;s connect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white gap-2">
            <a href={`mailto:${profile.email}`}>
              <Mail className="w-5 h-5" />
              {profile.email}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2 border-slate-300 hover:border-indigo-300 hover:bg-indigo-50"
          >
            <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>
              <Phone className="w-5 h-5" />
              {profile.phone}
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://github.com/Ntezi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/ntezi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://ntezi.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Portfolio</span>
          </a>
        </div>
      </div>
    </section>
  );
}
