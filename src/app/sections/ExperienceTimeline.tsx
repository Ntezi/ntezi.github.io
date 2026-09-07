import { roles } from '../../data/experience';

export function ExperienceTimeline() {
  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-3">Experience</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">A career built through delivery</h2>
          <p className="text-lg text-slate-600">Employment, concurrent consulting, and client deployments since 2013. Expand a role for its scope and technologies.</p>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {roles.map(role => (
            <details key={role.id} className="group py-5">
              <summary className="cursor-pointer rounded-md text-slate-900">
                <span className="inline-grid gap-1 align-top w-[calc(100%-2rem)] pl-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-indigo-700">{role.relationship}</span>
                  <span className="text-lg font-semibold">{role.title}</span>
                  <span className="text-slate-600 text-sm">{role.company} · {role.period}{role.isCurrent ? ' · Current' : ''}</span>
                </span>
              </summary>
              <div className="pl-6 pt-5 max-w-3xl">
                <p className="text-sm text-slate-500 mb-3">{role.location}</p>
                <p className="text-slate-700 leading-relaxed">{role.summary}</p>
                {role.highlights.length > 0 && <ul className="list-disc pl-5 mt-4 space-y-2 text-sm text-slate-600">{role.highlights.map(item => <li key={item}>{item}</li>)}</ul>}
                <div className="flex flex-wrap gap-2 mt-5">{role.stack.map(tech => <span key={tech} className="text-xs rounded-md bg-slate-100 text-slate-700 px-2 py-1">{tech}</span>)}</div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
