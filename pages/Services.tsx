import React from 'react';
import { SERVICES, TESTIMONIALS } from '../constants';
import { Check, Quote, ChevronRight, BarChart3, MapPin, Eye, Shield, Leaf, Truck, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const DIMENSOES = [
  { icon: BarChart3, name: 'Previsão de Demanda', description: 'Modelos que reduzem ruptura e excesso de estoque' },
  { icon: MapPin, name: 'Roteirização', description: 'Rotas otimizadas em tempo real' },
  { icon: Eye, name: 'Visibilidade Ponta a Ponta', description: 'Rastreamento do fornecedor ao cliente final' },
  { icon: Shield, name: 'Manutenção Preditiva', description: 'Sensores e modelos para evitar paradas' },
  { icon: Leaf, name: 'Sustentabilidade', description: 'Redução de km rodados e emissões' },
  { icon: Cpu, name: 'Simulação e Gêmeos Digitais', description: 'Teste cenários antes de mudar a operação' },
];

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Soluções de Inteligência Logística</h1>
          <p className="text-xl text-brand-300 max-w-2xl mx-auto">
            Aplicamos dados, modelos e tecnologia para transformar a tomada de decisão na sua cadeia de suprimentos.
          </p>
        </div>
      </section>

      {/* Solutions Detail List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 space-y-32">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <div className="inline-block p-3 bg-brand-50 text-accent rounded-lg mb-6">
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl font-bold text-brand-900 mb-6">{service.title}</h2>
                <p className="text-lg text-brand-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                <h4 className="font-semibold text-brand-900 mb-4 uppercase text-sm tracking-wide">O que entregamos:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-brand-700 bg-brand-50 p-3 rounded-md">
                      <Check size={18} className="text-accent mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl border border-brand-100 bg-brand-50 aspect-video md:aspect-square lg:aspect-[4/3]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-transparent z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-100 to-white">
                    <service.icon size={120} className="text-brand-200" />
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dimensões da Inteligência Logística */}
      <section className="py-20 bg-brand-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-accent tracking-widest uppercase mb-3 block">Dimensões da inteligência logística</span>
            <h2 className="text-3xl font-bold text-brand-900 mb-4">O que podemos aplicar à sua operação</h2>
            <p className="text-brand-600">Capacidades que combinam dados, modelos e tecnologia para decisões melhores.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {DIMENSOES.map((dim) => (
              <div key={dim.name} className="bg-white p-6 rounded-xl text-left shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-accent/30 group">
                <dim.icon size={28} className="text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-brand-900 mb-2">{dim.name}</h3>
                <p className="text-sm text-brand-500">{dim.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-sm font-bold text-accent tracking-widest uppercase mb-3 block">Resultado mensurável</span>
            <h2 className="text-3xl font-bold text-brand-900 mb-4">Inteligência logística aplicada gera resultado</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {TESTIMONIALS.filter(t => t.company === 'Versan Logistic').map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-brand-100 relative">
                <Quote className="absolute top-6 right-6 text-brand-100 h-16 w-16 fill-current" />
                <p className="text-xl text-brand-600 italic mb-8 relative z-10 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-brand-200 rounded-full flex items-center justify-center text-brand-600 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-900">{testimonial.name}</h5>
                    <p className="text-sm text-brand-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-accent tracking-widest uppercase mb-3 block">Onde atuamos</span>
            <h2 className="text-3xl font-bold text-brand-900 mb-4">Segmentos Logísticos</h2>
            <p className="text-brand-600">Expertise aplicada a diferentes operações da cadeia de suprimentos.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {['Transporte Rodoviário', 'Gestão de Frota', 'Last Mile', 'Centros de Distribuição', 'Supply Chain', 'Operadores Logísticos'].map((area) => (
              <div key={area} className="bg-brand-50 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all border border-transparent hover:border-accent/30 hover:bg-white group">
                <span className="font-semibold text-brand-800 group-hover:text-accent transition-colors">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-50 border-t border-brand-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-brand-900 mb-4">Não encontrou o que procura?</h2>
          <p className="text-brand-600 mb-8">Cada cadeia de suprimentos é única. Desenhamos a solução certa para o seu contexto.</p>
          <Link to="/contato" className="inline-flex items-center text-accent font-bold hover:underline group">
            Fale com nosso consultor <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
