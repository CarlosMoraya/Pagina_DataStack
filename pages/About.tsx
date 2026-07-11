import React from 'react';
import { Target, ShieldCheck, Award, Zap, Users, Linkedin, ExternalLink, CheckCircle2 } from 'lucide-react';
import { CARLOS_INFO, BETAFLEET } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-900 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Quem Somos</h1>
          <p className="text-xl text-brand-300 max-w-2xl mx-auto">
            Consultoria em tecnologia para empresas de transporte e logística.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-8 text-center lg:text-left">
              Não é consultoria de tecnologia.<br />
              É consultoria de logística que usa tecnologia.
            </h2>

            <div className="flex flex-col-reverse lg:flex-row gap-16 items-start">
              <div className="w-full lg:w-3/5">
                <div className="space-y-6 text-lg text-brand-600 leading-relaxed text-justify">
                  <p>
                    A <strong>Data Stack</strong> nasceu dentro da operação. Não de um curso de programação ou de uma ideia de board.
                  </p>
                  <p>
                    <strong>Carlos Moraya</strong> passou mais de 15 anos gerenciando frotas, operações Last Mile, armazéns e equipes em empresas como Coca-Cola Andina, Mercado Livre, Grupo Pralog e Deluna Transportes.
                  </p>
                  <p>
                    Ele viu de perto onde a tecnologia ajuda — e onde ela atrapalha. Porque não adianta ter o sistema mais moderno do mundo se ele não conversa com o seu TMS. Não adianta prometer IA se o problema do seu motorista é mais simples: receber o pagamento no dia certo.
                  </p>
                  <p>
                    <strong>A Data Stack existe para isso:</strong> aplicar a tecnologia certa — própria ou de mercado — para resolver o problema real da sua transportadora.
                  </p>
                  <p className="font-semibold text-brand-900">
                    Menos planilha. Mais estrada. É assim que trabalhamos.
                  </p>
                </div>
              </div>

              {/* Founder Card */}
              <div className="w-full lg:w-2/5">
                <div className="bg-brand-50 border border-brand-100 rounded-2xl p-8 text-center">
                  <div className="h-24 w-24 bg-gradient-to-br from-accent to-brand-900 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <span className="text-3xl font-bold text-white">CM</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-900 mb-1">{CARLOS_INFO.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-4">{CARLOS_INFO.role}</p>
                  <p className="text-brand-500 text-sm mb-6 leading-relaxed">
                    {CARLOS_INFO.experience}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {CARLOS_INFO.education.map((edu, idx) => (
                      <span key={idx} className="bg-white border border-brand-200 text-brand-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                        {edu}
                      </span>
                    ))}
                  </div>
                  <a
                    href={CARLOS_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors text-sm font-medium"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-brand-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-900 mb-4">Trajetória</h2>
            <p className="text-brand-600">15+ anos imerso na operação de logística e transporte.</p>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-200 hidden md:block"></div>

            <div className="space-y-8">
              {CARLOS_INFO.companies.map((company, idx) => (
                <div key={idx} className="relative pl-0 md:pl-20">
                  <div className="hidden md:flex absolute left-4 top-1 h-9 w-9 bg-accent rounded-xl items-center justify-center text-white font-bold text-sm shadow-md z-10">
                    {idx + 1}
                  </div>
                  <div className="bg-white border border-brand-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-accent uppercase tracking-wider bg-accent/10 px-2 py-1 rounded">
                        {company.period}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-brand-900">{company.name}</h4>
                    <p className="text-brand-500">{company.role}</p>
                  </div>
                </div>
              ))}
              <div className="relative pl-0 md:pl-20">
                <div className="hidden md:flex absolute left-4 top-1 h-9 w-9 bg-brand-900 rounded-xl items-center justify-center text-white font-bold text-sm shadow-md z-10">
                  5
                </div>
                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider bg-accent/10 px-2 py-1 rounded">
                      2024 — Atual
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-brand-900">Data Stack</h4>
                  <p className="text-brand-500">Fundador — Consultoria em Tecnologia para Logística</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Formation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-brand-900 mb-4">Formação e Habilidades</h2>
              <p className="text-brand-600">O que está por trás de cada solução entregue.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100">
                <h3 className="text-lg font-bold text-brand-900 mb-6 flex items-center gap-3">
                  <div className="h-8 w-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                    <Award size={18} />
                  </div>
                  Formação
                </h3>
                <ul className="space-y-3">
                  {CARLOS_INFO.education.map((edu, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-brand-700">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100">
                <h3 className="text-lg font-bold text-brand-900 mb-6 flex items-center gap-3">
                  <div className="h-8 w-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                    <Zap size={18} />
                  </div>
                  Habilidades Técnicas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {CARLOS_INFO.skills.map((skill, idx) => (
                    <span key={idx} className="bg-white border border-brand-200 text-brand-700 text-sm font-medium px-3 py-1.5 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100">
                <h3 className="text-lg font-bold text-brand-900 mb-6 flex items-center gap-3">
                  <div className="h-8 w-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                    <Users size={18} />
                  </div>
                  Metodologias
                </h3>
                <ul className="space-y-3">
                  {['Lean Manufacturing', 'Kaizen', 'Six Sigma', 'Melhoria Contínua', 'Gestão Data-Driven'].map((method, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-brand-700">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      <span>{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BetaFleet Section */}
      <section className="py-20 bg-brand-900">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-bold text-accent tracking-widest uppercase mb-3 block">O produto que prova o conhecimento</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {BETAFLEET.name}
              </h2>
              <p className="text-brand-300 text-lg">{BETAFLEET.tagline}</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <p className="text-brand-300 leading-relaxed mb-6">
                    O BetaFleet não surgiu de uma ideia de board. Surgiu porque Carlos Moraya, durante anos gerenciando frotas no Mercado Livre, Pralog e Deluna, viu que faltava uma ferramenta simples e objetiva para operações de e-commerce. Ele construiu.
                  </p>
                  <p className="text-brand-400 text-sm mb-8">
                    Essa capacidade de construir tecnologia é o que a Data Stack coloca a serviço da sua transportadora — seja criando uma solução sob medida, seja integrando as melhores ferramentas do mercado.
                  </p>
                  <a
                    href={BETAFLEET.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent text-white font-bold px-6 py-3 rounded-xl hover:bg-accent-dark transition-colors"
                  >
                    Conhecer o BetaFleet
                    <ExternalLink size={16} />
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {BETAFLEET.features.map((feature, idx) => (
                    <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <CheckCircle2 size={16} className="text-accent mb-2" />
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-900 mb-8 text-center">Por que isso importa para você</h2>
            <div className="bg-brand-50 border border-brand-100 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-brand-600 leading-relaxed mb-6">
                Quando você contrata a Data Stack, não está contratando uma agência de tecnologia que vai "aprender sobre o seu negócio".
              </p>
              <p className="text-lg text-brand-600 leading-relaxed mb-6">
                Você está contratando alguém que já esteve no seu lugar. Que sabe exatamente o que funciona e o que não funciona em operação de transporte. E que aplica tecnologia de verdade — não PowerPoint — para resolver.
              </p>
              <p className="text-lg font-semibold text-brand-900">
                Resultado: diagnóstico mais rápido, solução mais certeira, e problema resolvido de verdade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-brand-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-accent">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-accent">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">Missão</h3>
              <p className="text-brand-600">
                Resolver problemas reais de logística com a tecnologia certa — própria ou de mercado — gerando resultado rápido e mensurável para transportadoras.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-800">
              <div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-brand-800">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">Visão</h3>
              <p className="text-brand-600">
                Ser referência em consultoria de tecnologia para o setor de transporte rodoviário no Brasil, reconhecida por resolver problemas que ninguém mais resolve.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-400 md:col-span-2 lg:col-span-1">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-brand-600">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">Valores</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 text-brand-600">
                <li className="flex gap-3">
                  <div className="mt-1"><Award size={18} className="text-accent shrink-0" /></div>
                  <p><strong>Resultado no bolso:</strong> Tecnologia que não mostra economia na conta não serve para nada.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1"><Zap size={18} className="text-accent shrink-0" /></div>
                  <p><strong>Direto ao ponto:</strong> Identificamos o problema, resolvemos rápido e você volta a focar no seu negócio.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1"><ShieldCheck size={18} className="text-accent shrink-0" /></div>
                  <p><strong>Transparência total:</strong> Você sabe exatamente o que está pagando, o que vai receber e quanto vai economizar.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1"><Users size={18} className="text-accent shrink-0" /></div>
                  <p><strong>Parceria de verdade:</strong> Não entregamos o projeto e sumimos. Estamos aqui quando você precisar.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
