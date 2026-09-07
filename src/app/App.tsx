import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { CurrentRoles } from './sections/CurrentRoles';
import { ExperienceTimeline } from './sections/ExperienceTimeline';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';
import { Skills } from './sections/Skills';
import { Education } from './sections/Education';
import { Research } from './sections/Research';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { site } from '../data/site';

export default function App() {
  const { features } = site;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      <main id="main-content">
      <Hero />
      <About />
      <CurrentRoles />
      {features.showFullExperience && <ExperienceTimeline />}
      <Projects />
      {features.showServices && <Services />}
      {features.showResearch && <Research />}
      <Skills />
      {features.showEducation && <Education />}
      <Contact />
      </main>
      <Footer />
    </div>
  );
}
