import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const CLIENTS = [
  { name: 'Logística Avançada', logo: '/images/clients/logistica-avancada.png', isImage: true },
  { name: 'FinTech Solution', logo: '/images/clients/fintech-solution.png', isImage: true },
  { name: 'AgroTech Brasil', logo: 'AGRO', isImage: false, color: 'text-green-600' },
  { name: 'Nexus Tech', logo: 'NEXUS', isImage: false, color: 'text-purple-600' },
  { name: 'Starlight Retail', logo: 'STAR', isImage: false, color: 'text-blue-400' },
  { name: 'Global Energy', logo: 'ENERGY', isImage: false, color: 'text-orange-500' },
  { name: 'HealthPlus', logo: 'HEALTH+', isImage: false, color: 'text-teal-500' },
  { name: 'Urban Flow', logo: 'URBAN', isImage: false, color: 'text-slate-600' }
];

const Clients: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-900 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nossos Clientes</h1>
          <p className="text-xl text-brand-300 max-w-2xl mx-auto">
            Empresas que confiam na Data Stack para impulsionar suas operações.
          </p>
        </div>
      </section>

      {/* Logo Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-center text-brand-500 mb-12 uppercase tracking-widest font-semibold text-sm">Empresas que transformamos</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {CLIENTS.map((client) => (
              <div key={client.name} className="h-32 bg-brand-50 border border-brand-100 rounded-lg flex items-center justify-center p-6 group transition-all duration-300 hover:bg-white hover:shadow-md hover:border-brand-200">
                {client.isImage ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    title={client.name}
                    className="h-16 w-auto opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 object-contain"
                  />
                ) : (
                  <div className={`flex flex-col items-center opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500`}>
                    <span className={`text-2xl font-black tracking-tighter ${client.color}`}>{client.logo}</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-brand-400 mt-1">{client.name}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-900 text-center mb-16">O que dizem sobre nós</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-sm border border-brand-100 flex flex-col relative">
                <Quote className="absolute top-6 right-6 text-brand-100 h-10 w-10 fill-current" />
                <p className="text-brand-600 italic mb-8 relative z-10 leading-relaxed">"{testimonial.content}"</p>
                <div className="mt-auto flex items-center gap-4">
                  <div className="h-10 w-10 bg-brand-200 rounded-full flex items-center justify-center text-brand-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-900 text-sm">{testimonial.name}</h5>
                    <p className="text-xs text-brand-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;