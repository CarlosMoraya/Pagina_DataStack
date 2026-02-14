import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-brand-900 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-800 to-transparent transform skew-x-12"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent-dark to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-800 border border-brand-700 text-accent text-sm font-semibold tracking-wide uppercase">
              Tecnologia & Dados para Pequenas e médias empresas
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] mb-8 pb-2">
              Tecnologia certa para o <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">seu negócio crescer</span>
            </h1>
            <p className="text-xl text-brand-300 mb-10 max-w-2xl leading-relaxed">
              Somos sua parceira técnica na construção de infraestrutura de dados, automação de processos e desenvolvimento de sistemas inteligentes. Sem "agenciês", apenas resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contato" className="inline-flex justify-center items-center px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-lg font-semibold transition-all text-lg shadow-lg hover:shadow-blue-500/20">
                Agendar Diagnóstico
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/servicos" className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-brand-600 text-white hover:bg-brand-800 rounded-lg font-semibold transition-all text-lg">
                Conhecer Soluções
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
                Não somos uma agência genérica. Somos arquitetos de soluções.
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
                  'Sistemas proprietários que agregam valor ao seu IP.',
                  'Segurança e escalabilidade desde o dia um.'
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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