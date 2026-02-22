import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES, PARTNERS } from '../constants';
import ParticleNetwork from '../components/ParticleNetwork';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-brand-950 overflow-hidden">
        {/* Particle Network Animation Background */}
        <ParticleNetwork />

        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-4xl text-left">
            <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-bold text-white leading-[1.1] mb-8 pb-2">
              Tecnologia certa para<br />
              o seu negócio crescer
            </h1>
            <p className="text-brand-300 text-lg md:text-xl font-light max-w-4xl leading-relaxed mb-10">
              Infraestrutura de dados, criação de sites e landing pages, automação de processos e sistemas inteligentes para PMEs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contato" className="inline-flex justify-center items-center px-8 py-4 bg-white text-brand-900 font-bold text-sm tracking-widest hover:bg-brand-100 transition-colors uppercase">
                Agendar diagnóstico
              </Link>
              <Link to="/servicos" className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-white text-white font-bold text-sm tracking-widest hover:bg-white/10 transition-colors uppercase">
                Soluções
              </Link>
            </div>
          </div>
        </div>


      </section>

      {/* Brief About / Value Prop */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
                Não entregamos soluções de prateleira, entendemos a sua necessidade e criamos a solução certa.
              </h2>
              <p className="text-brand-600 text-lg leading-relaxed mb-6">
                No mundo atual, intuição não é suficiente. Sua empresa gera dados o tempo todo, mas eles estão trabalhando a seu favor?
              </p>
              <p className="text-brand-600 text-lg leading-relaxed mb-8">
                A <strong>Data Stack</strong> atua como o braço tecnológico do seu negócio. Integramos sistemas, automatizamos o operacional e criamos a inteligência necessária para você escalar com segurança.
              </p>

              <ul className="space-y-4">
                {[
                  'Decisões baseadas em dados reais, não em achismos.',
                  'Redução drástica de trabalho manual repetitivo.',
                  'Soluções customizadas para atender a sua necessidade.',
                  'Segurança e escalabilidade desde o início.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-brand-700 font-medium">
                    <CheckCircle2 className="h-6 w-6 text-accent mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-brand-100 rounded-2xl p-8 md:p-12">
                {/* Abstract visual representation of "Stack" */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-10 w-10 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-blue-600 font-bold">01</div>
                    <h4 className="font-bold text-brand-900">Coleta</h4>
                    <p className="text-sm text-brand-500 mt-2">Centralização de fontes</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow mt-8">
                    <div className="h-10 w-10 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-blue-600 font-bold">02</div>
                    <h4 className="font-bold text-brand-900">Processamento</h4>
                    <p className="text-sm text-brand-500 mt-2">Limpeza e estruturação</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow -mt-8">
                    <div className="h-10 w-10 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-blue-600 font-bold">03</div>
                    <h4 className="font-bold text-brand-900">Análise</h4>
                    <p className="text-sm text-brand-500 mt-2">Inteligência aplicada</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-10 w-10 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-blue-600 font-bold">04</div>
                    <h4 className="font-bold text-brand-900">Ação</h4>
                    <p className="text-sm text-brand-500 mt-2">Automação e escala</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-brand-50 border-y border-brand-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Nossa Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">O que construímos para você</h3>
            <p className="text-brand-600 text-lg">Soluções técnicas robustas para resolver problemas reais de negócio.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-xl shadow-sm border border-brand-100 hover:border-accent hover:shadow-md transition-all group">
                <div className="h-12 w-12 bg-brand-50 rounded-lg flex items-center justify-center text-brand-900 mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <service.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-brand-900 mb-3">{service.title}</h4>
                <p className="text-brand-500 leading-relaxed mb-6 text-sm">{service.description}</p>
                <Link to="/servicos" className="text-accent font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Logo Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4 text-center">Nossos Parceiros</h3>
          <p className="text-center text-brand-500 mb-12 uppercase tracking-widest font-semibold text-sm">Tecnologias em que confiamos e aplicamos em nossos projetos</p>
          <div className="relative overflow-hidden py-12">
            {/* Gradientes de Máscara para suavizar as bordas */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-scroll-x hover:[animation-play-state:paused] whitespace-nowrap gap-10 w-max px-5">
              {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="inline-flex h-48 w-80 bg-brand-50 border border-brand-100 rounded-2xl items-center justify-center p-0 group transition-all duration-500 hover:bg-white hover:shadow-2xl hover:border-accent-DEFAULT/40 overflow-hidden flex-shrink-0"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    title={partner.name}
                    className="h-full w-full opacity-90 group-hover:opacity-100 transition-all duration-700 object-contain transform group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const parent = (e.target as HTMLElement).parentElement;
                      if (parent && !parent.querySelector('.fallback-text')) {
                        const text = document.createElement('span');
                        text.className = 'fallback-text text-xl font-black text-brand-400 uppercase tracking-tighter text-center px-4 whitespace-normal leading-tight';
                        text.innerText = partner.name;
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

      {/* CTA Section */}
      <section className="py-24 bg-brand-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <svg width="200" height="200" viewBox="0 0 100 100" fill="white">
            <rect x="0" y="0" width="20" height="20" />
            <rect x="40" y="0" width="20" height="20" />
            <rect x="80" y="0" width="20" height="20" />
            <rect x="0" y="40" width="20" height="20" />
            <rect x="40" y="40" width="20" height="20" />
          </svg>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para estruturar o futuro do seu negócio?
          </h2>
          <p className="text-brand-300 text-lg max-w-2xl mx-auto mb-10">
            Agende uma conversa técnica sem compromisso. Vamos entender seus desafios e desenhar a arquitetura ideal.
          </p>
          <Link to="/contato" className="inline-block px-10 py-4 bg-white text-brand-900 rounded-lg font-bold text-lg hover:bg-brand-100 transition-colors shadow-lg">
            Falar com um Consultor
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;