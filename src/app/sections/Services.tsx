import { Card } from '../components/ui/card';
import { services } from '../../data/services';

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Services I Provide</h2>
          <p className="text-lg text-slate-600">
            Strategic, hands-on services that help teams move from idea to reliable production
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="p-6 border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{service.title}</h3>
                <ul className="space-y-2">
                  {service.description.map((line) => (
                    <li key={line} className="text-sm text-slate-600 leading-relaxed">
                      {line}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
