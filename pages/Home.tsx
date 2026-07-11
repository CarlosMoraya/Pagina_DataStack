import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, CreditCard, Share2, FileText, Truck, ExternalLink, Linkedin, Target, TrendingDown, ChevronRight } from 'lucide-react';
import { PARTNERS, CARLOS_INFO, BETAFLEET } from '../constants';
import BackgroundVideo from '../components/BackgroundVideo';

const PROBLEMS = [
  {
    icon: CreditCard,
    title: 'Pagamento de motoristas',
    description: 'Processo manual que leva dias, erros de cálculo, motorista insatisfeito.',
    solution: 'Reduzimos de dias para segundos. Do cálculo ao comprovante.',
    highlight: 'Case Versan Logistic'
  },
  {
    icon: Share2,
    title: 'Sistemas que não conversam',
    description: 'TMS, ERP, pedágio, combustível — cada sistema isolado, dados inconsistentes.',
    solution: 'Integramos tudo em uma única fonte de verdade.',
    highlight: ''
  },
  {
    icon: FileText,
    title: 'Conciliação de fretes',
    description: 'Planilhas infinitas, divergências que passam despercebidas, horas perdidas.',
    solution: 'Sistema automático que confere em minutos.',
    highlight: ''
  },
  {
    icon: Truck,
    title: 'Custo de frota sem controle',
    description: 'Manutenção corretiva, combustível sem visibilidade, veículo gerando prejuízo.',
    solution: 'Inteligência aplicada para reduzir despesas operacionais.',
    highlight: ''
  }
];

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-brand-950 overflow-hidden">
        <BackgroundVideo />

        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center pt-32 pb-20">
          <div className="max-w-4xl text-left">
            <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-1.5 mb-8">
              <Target size={14} className="text-accent" />
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">Consultoria especializada em logística</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-8 tracking-tight">
              Tecnologia que resolve<br className="hidden md:block" />
              problemas de <span className="text-accent">logística</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-normal max-w-3xl leading-relaxed mb-4">
              Resolvemos problemas reais de empresas de transporte
            </p>
            <p className="text-white/60 text-base md:text-lg max-w-3xl leading-relaxed mb-10">
              Pagamento de motoristas · Integração de sistemas · Conciliação de fretes · Inteligência para frota
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contato" className="inline-flex justify-center items-center px-6 py-3 md:px-8 md:py-4 bg-white text-brand-900 font-bold text-sm tracking-widest hover:bg-brand-100 transition-colors uppercase w-full sm:w-auto group">
                Agendar diagnóstico
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/servicos" className="inline-flex justify-center items-center px-6 py-3 md:px-8 md:py-4 bg-transparent border border-white/30 text-white font-bold text-sm tracking-widest hover:bg-white/10 transition-colors uppercase w-full sm:w-auto">
                Ver soluções
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold text-accent tracking-widest uppercase mb-3 block">Problemas que resolvemos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              Sua transportadora enfrenta algum desses desafios?
            </h2>
            <p className="text-brand-600 text-lg">
              Diagnosticamos, arquitetamos e resolvemos — com a tecnologia certa para cada caso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {PROBLEMS.map((problem, idx) => (
              <div key={idx} className="group bg-brand-50 border border-brand-100 rounded-2xl p-8 hover:bg-white hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <problem.icon size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-brand-900 mb-2">{problem.title}</h3>
                    <p className="text-brand-500 text-sm leading-relaxed mb-3">{problem.description}</p>
                    <p className="text-accent font-semibold text-sm flex items-center gap-1.5">
                      <CheckCircle2 size={14} />
                      {problem.solution}
                    </p>
                    {problem.highlight && (
                      <span className="inline-block mt-2 text-xs font-bold text-brand-400 uppercase tracking-wider bg-brand-100 px-2 py-0.5 rounded">
                        {problem.highlight}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contato" className="inline-flex items-center text-accent font-bold hover:underline group">
              Qual desses problemas a sua transportadora está enfrentando?
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-brand-50 border-y border-brand-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold text-accent tracking-widest uppercase mb-3 block">Como funciona</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              Não entregamos código. Entregamos problema resolvido.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100 relative">
              <div className="absolute -top-4 -left-4 h-10 w-10 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">1</div>
              <h3 className="text-xl font-bold text-brand-900 mb-4 mt-2">Diagnóstico</h3>
              <p className="text-brand-600 leading-relaxed">
                Passamos um dia imersos na sua operação. Mapeamos sistemas, processos, gargalos e oportunidades reais de melhoria.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100 relative">
              <div className="absolute -top-4 -left-4 h-10 w-10 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">2</div>
              <h3 className="text-xl font-bold text-brand-900 mb-4 mt-2">Arquitetura</h3>
              <p className="text-brand-600 leading-relaxed">
                Desenhamos a solução. Pode ser tecnologia própria, integração de ferramentas de mercado, ou os dois. O que resolver melhor e mais rápido.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100 relative">
              <div className="absolute -top-4 -left-4 h-10 w-10 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">3</div>
              <h3 className="text-xl font-bold text-brand-900 mb-4 mt-2">Resultado</h3>
              <p className="text-brand-600 leading-relaxed">
                Motorista pago no dia. Conciliação em segundos. Frota com custo controlado. Sua operação rodando mais e custando menos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Solves It + BetaFleet */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold text-accent tracking-widest uppercase mb-3 block">Quem resolve</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              A Data Stack foi fundada por quem entende de logística
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-brand-50 border border-brand-100 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                {/* Avatar placeholder */}
                <div className="shrink-0 mx-auto lg:mx-0">
                  <div className="h-28 w-28 bg-gradient-to-br from-accent to-brand-900 rounded-3xl flex items-center justify-center shadow-xl">
                    <span className="text-4xl font-bold text-white">CM</span>
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-brand-900 mb-1">{CARLOS_INFO.name}</h3>
                  <p className="text-accent font-semibold mb-4">{CARLOS_INFO.role}</p>
                  <p className="text-brand-600 leading-relaxed mb-6">
                    {CARLOS_INFO.experience}
                  </p>

                  {/* Education Badges */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                    {CARLOS_INFO.education.map((edu, idx) => (
                      <span key={idx} className="bg-white border border-brand-200 text-brand-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                        {edu}
                      </span>
                    ))}
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                    {CARLOS_INFO.skills.map((skill, idx) => (
                      <span key={idx} className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1.5 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* LinkedIn */}
                  <a
                    href={CARLOS_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-500 hover:text-accent transition-colors text-sm font-medium"
                  >
                    <Linkedin size={18} />
                    Ver trajetória completa no LinkedIn
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* BetaFleet Card */}
            <div className="mt-8 bg-gradient-to-br from-brand-900 to-brand-950 rounded-3xl p-8 md:p-12 text-white">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="shrink-0 mx-auto lg:mx-0">
                  <div className="h-20 w-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <Truck size={36} className="text-accent" />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                    <Target size={12} /> Produto criado pelo fundador
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{BETAFLEET.name}</h3>
                  <p className="text-brand-300 text-lg mb-2">{BETAFLEET.tagline}</p>
                  <p className="text-brand-400 leading-relaxed mb-6">
                    {BETAFLEET.description}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                    {BETAFLEET.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-brand-300">
                        <CheckCircle2 size={14} className="text-accent shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={BETAFLEET.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-brand-900 font-bold px-6 py-3 rounded-xl hover:bg-brand-100 transition-colors"
                  >
                    Conhecer o BetaFleet
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-brand-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4 text-center">Tecnologias que aplicamos</h3>
          <p className="text-center text-brand-500 mb-12 uppercase tracking-widest font-semibold text-sm">Ferramentas próprias e de mercado que usamos para resolver</p>
          <div className="relative overflow-hidden py-12">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-50 to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-scroll-x hover:[animation-play-state:paused] whitespace-nowrap gap-10 w-max px-5">
              {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="inline-flex h-48 w-80 bg-white border border-brand-100 rounded-2xl items-center justify-center p-0 group transition-all duration-500 hover:bg-white hover:shadow-2xl hover:border-accent/40 overflow-hidden flex-shrink-0"
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

      {/* Case Highlight */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-brand-50 border border-brand-100 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0">
                <div className="h-16 w-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                  <TrendingDown size={28} />
                </div>
              </div>
              <div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest mb-2 block">Case de sucesso</span>
                <h3 className="text-2xl font-bold text-brand-900 mb-4">Versan Logistic: de 1 semana para 1 clique</h3>
                <p className="text-brand-600 leading-relaxed mb-6">
                  A Versan Logistic tinha um processo de pagamento de motoristas que levava uma semana inteira para ser concluído. Cálculos manuais, aprovações em papel, erros frequentes. A Data Stack automatizou todo o fluxo — do cálculo do frete ao comprovante fiscal. Hoje o pagamento é feito em segundos.
                </p>
                <div className="flex items-center gap-6">
                  <div className="h-10 w-10 bg-brand-200 rounded-full flex items-center justify-center text-brand-600 font-bold">
                    V
                  </div>
                  <div>
                    <p className="font-bold text-brand-900 text-sm">Viviane</p>
                    <p className="text-xs text-brand-500">Ger. Financeiro, Versan Logistic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Pronto para resolver os problemas da sua transportadora?
          </h2>
          <p className="text-brand-300 text-lg max-w-2xl mx-auto mb-10">
            Agende um diagnóstico gratuito. Vamos entender sua operação e mostrar onde a tecnologia pode gerar resultado.
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
