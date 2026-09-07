import { expertise } from '../../data/skills';
export function Skills() {
  return <section id="skills" className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-slate-900 mb-4">Tools in service of the problem</h2>
    <p className="text-lg text-slate-600 mb-10">Practical expertise shaped by banking, client delivery, and production operations.</p>
    <div className="grid md:grid-cols-2 gap-6">{expertise.map(group => <article key={group.title} className="rounded-xl border border-slate-200 p-6"><h3 className="text-xl font-semibold text-slate-900">{group.title}</h3><p className="text-slate-600 mt-2 mb-5">{group.description}</p><ul className="flex flex-wrap gap-2">{group.items.map(item => <li key={item} className="rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-700">{item}</li>)}</ul></article>)}</div>
  </div></section>;
}
