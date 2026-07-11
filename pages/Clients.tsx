import React from 'react';
import { Quote, Truck } from 'lucide-react';
import { TESTIMONIALS, CLIENTS, BETAFLEET } from '../constants';

const Clients: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-900 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nossos Clientes</h1>
          <p className="text-xl text-brand-300 max-w-2xl mx-auto">
            Transportadoras que confiam na Data Stack para resolver problemas reais com tecnologia.
          </p>
        </div>
      </section>

      {/* Logo Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-center text-brand-500 mb-12 uppercase tracking-widest font-semibold text-sm">Empresas de transporte que transformamos</p>
          <div className="relative overflow-hidden py-12">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="flex animate-scroll-x hover:[animation-play-state:paused] whitespace-nowrap gap-10 w-max px-5">
              {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="inline-flex h-48 w-80 bg-brand-50 border border-brand-100 rounded-2xl items-center justify-center p-0 group transition-all duration-500 hover:bg-white hover:shadow-2xl hover:border-accent/40 overflow-hidden flex-shrink-0"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    title={client.name}
                    className="h-full w-full opacity-90 group-hover:opacity-100 transition-all duration-700 object-contain transform group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const parent = (e.target as HTMLElement).parentElement;
                      if (parent && !parent.querySelector('.fallback-text')) {
                        const text = document.createElement('span');
                        text.className = 'fallback-text text-xl font-black text-brand-400 uppercase tracking-tighter text-center px-4';
                        text.innerText = client.name;
                        parent.appendChild(text);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BetaFleet Highlight */}
      <section className="py-16 bg-brand-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
            <div className="h-20 w-20 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
              <Truck size={36} className="text-accent" />
            </div>
            <div>
              <span className="text-xs font-bold text-accent uppercase tracking-widest mb-2 block">Produto próprio</span>
              <h3 className="text-2xl font-bold text-white mb-2">{BETAFLEET.name}</h3>
              <p className="text-brand-300 mb-4">{BETAFLEET.tagline}</p>
              <a
                href={BETAFLEET.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold transition-colors"
              >
                Conhecer plataforma →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-900 text-center mb-16">O que dizem sobre nós</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
