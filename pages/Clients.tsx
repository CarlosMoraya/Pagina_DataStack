import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS, CLIENTS } from '../constants';

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {CLIENTS.map((client) => (
              <div key={client.name} className="h-64 bg-brand-50 border border-brand-100 rounded-2xl flex items-center justify-center p-4 group transition-all duration-500 hover:bg-white hover:shadow-2xl hover:border-accent-DEFAULT/40 hover:-translate-y-2 overflow-hidden">
                <img
                  src={client.logo}
                  alt={client.name}
                  title={client.name}
                  className="h-full w-full opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 object-contain transform group-hover:scale-105"
                  onError={(e) => {
                    // Fallback para caso a imagem ainda não exista
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