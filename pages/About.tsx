import React from 'react';
import { Target, ShieldCheck, Award, Zap, Database, CheckCircle2, Linkedin, ExternalLink, TrendingUp, GitBranch } from 'lucide-react';
import { CARLOS_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-900 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Quem Somos</h1>
          <p className="text-xl text-brand-300 max-w-2xl mx-auto">
            Inteligência logística: a combinação de dados, tecnologia e conhecimento operacional que transforma cadeias de suprimentos.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-8 text-center lg:text-left">
              Não vendemos software.<br />
              Entregamos inteligência para sua cadeia de suprimentos.
            </h2>

            <div className="flex flex-col-reverse lg:flex-row gap-16 items-start">
              <div className="w-full lg:w-3/5">
                <div className="space-y-6 text-lg text-brand-600 leading-relaxed text-justify">
                  <p>
                    A <strong>Data Stack</strong> nasceu onde a inteligência logística faz diferença: dentro da operação.
                  </p>
                  <p>
                    <strong>Carlos Moraya</strong> passou mais de 15 anos gerenciando frotas, operações Last Mile, armazéns e cadeias de suprimentos em empresas como Coca-Cola Andina e Mercado Livre, além de atuar em transportadoras e operadores logísticos de grande porte.
                  </p>
                  <p>
                    Foi na operação que ele aprendeu a primeira lição da inteligência logística: <strong>dado ruim gera decisão ruim</strong>. Viu sistemas que não conversavam gerando retrabalho. Viu falta de previsão de demanda causando ruptura de estoque e frete emergencial. Viu decisões sendo tomadas no instinto — porque não havia indicador confiável.
                  </p>
                  <p>
                    Em vez de conviver com isso, decidiu combinar sua bagagem operacional com domínio técnico. Fez MBA em Logística e pós-graduação em Tecnologia Aplicada aos Negócios com foco em AI, Data Science e Big Data pela PUCRS. Aprendeu Python, SQL, modelagem de dados, machine learning.
                  </p>
                  <p>
                    <strong>A Data Stack existe para aplicar inteligência logística de verdade.</strong> Não aquela de PowerPoint. A que coleta dados, organiza, integra sistemas, aplica modelos e gera decisões que reduzem custo, melhoram serviço e aumentam a resiliência da operação.
                  </p>
                  <p className="font-semibold text-brand-900">
                    Menos instinto. Mais inteligência. É assim que trabalhamos.
                  </p>
                </div>
              </div>

              {/* Founder Card */}
              <div className="w-full lg:w-2/5">
                <div className="bg-brand-50 border border-brand-100 rounded-2xl p-8 text-center sticky top-28">
                  <div className="h-24 w-24 bg-gradient-to-br from-accent to-brand-900 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <span className="text-3xl font-bold text-white">CM</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-900 mb-1">{CARLOS_INFO.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-4">{CARLOS_INFO.role}</p>
                  <p className="text-brand-500 text-sm mb-6 leading-relaxed">
                    {CARLOS_INFO.tagline}
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

      {/* Inteligência Logística — o conceito */}
      <section className="py-20 bg-brand-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm font-bold text-accent tracking-widest uppercase mb-3 block">O que entregamos</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
                Inteligência logística não é só tecnologia
              </h2>
              <p className="text-brand-600 text-lg max-w-2xl mx-auto">
                É a capacidade de transformar dados sobre compras, estoques, transportes, fornecedores e clientes em decisões melhores. Conheça os pilares que sustentam cada projeto.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-8 border border-brand-100 text-center hover:shadow-lg hover:border-accent/30 transition-all">
                <div className="h-14 w-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mx-auto mb-5">
                  <Database size={28} />
                </div>
                <h3 className="text-lg font-bold text-brand-900 mb-3">Dados confiáveis</h3>
                <p className="text-brand-600 text-sm leading-relaxed">
                  Cadastros padronizados, validação contínua, governança. Sem dados de qualidade, nenhum modelo entrega valor.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-brand-100 text-center hover:shadow-lg hover:border-accent/30 transition-all">
                <div className="h-14 w-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mx-auto mb-5">
                  <GitBranch size={28} />
                </div>
                <h3 className="text-lg font-bold text-brand-900 mb-3">Processos definidos</h3>
                <p className="text-brand-600 text-sm leading-relaxed">
                  Mapeamento de ponta a ponta, fluxos claros, donos identificados. Tecnologia automatiza processos — não caos.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-brand-100 text-center hover:shadow-lg hover:border-accent/30 transition-all">
                <div className="h-14 w-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mx-auto mb-5">
                  <Zap size={28} />
                </div>
                <h3 className="text-lg font-bold text-brand-900 mb-3">Tecnologia integrada</h3>
                <p className="text-brand-600 text-sm leading-relaxed">
                  ERP, TMS, WMS, sensores, BI — tudo conectado. A inteligência está na integração, não em sistemas isolados.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-brand-100 text-center hover:shadow-lg hover:border-accent/30 transition-all">
                <div className="h-14 w-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mx-auto mb-5">
                  <TrendingUp size={28} />
                </div>
                <h3 className="text-lg font-bold text-brand-900 mb-3">Pessoas preparadas</h3>
                <p className="text-brand-600 text-sm leading-relaxed">
                  Treinamento, participação na definição dos processos e capacidade de interpretar recomendações e agir.
                </p>
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
              <p className="text-brand-600">A combinação de operação, dados e tecnologia por trás de cada solução.</p>
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
                    <Target size={18} />
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

      {/* Why It Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-900 mb-8 text-center">Por que isso importa para você</h2>
            <div className="bg-brand-50 border border-brand-100 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-brand-600 leading-relaxed mb-6">
                Quando você contrata a Data Stack, não está contratando uma consultoria de tecnologia que vai "aprender sobre o seu negócio" enquanto cobra por hora.
              </p>
              <p className="text-lg text-brand-600 leading-relaxed mb-6">
                Você está contratando alguém que conhece a operação por dentro: que já gerenciou frotas, negociou com transportadoras, sofreu com sistema que não conversa, perdeu dinheiro com rota mal planejada e teve que explicar atraso para cliente.
              </p>
              <p className="text-lg text-brand-600 leading-relaxed mb-6">
                E que, além disso, domina as ferramentas para transformar esses problemas em inteligência: coleta e integração de dados, modelos preditivos, otimização matemática, dashboards e automação de decisões.
              </p>
              <p className="text-lg font-semibold text-brand-900">
                Resultado: diagnóstico mais rápido, solução mais certeira, decisão baseada em dados — e economia que aparece na conta.
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
                Fornecer inteligência logística — combinando dados, tecnologia e conhecimento operacional — para que transportadoras e operadores tomem decisões melhores, mais rápidas e mais rentáveis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-800">
              <div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-brand-800">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">Visão</h3>
              <p className="text-brand-600">
                Ser referência em inteligência logística no Brasil, reconhecida por transformar dados da cadeia de suprimentos em vantagem competitiva mensurável para cada cliente.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-400 md:col-span-2 lg:col-span-1">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-brand-600">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">Valores</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 text-brand-600">
                <li className="flex gap-3">
                  <div className="mt-1"><Database size={18} className="text-accent shrink-0" /></div>
                  <p><strong>Dados confiáveis:</strong> Sem qualidade de dados não há inteligência. Começamos por aí.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1"><Zap size={18} className="text-accent shrink-0" /></div>
                  <p><strong>Resultado mensurável:</strong> Tecnologia que não mostra economia na conta ou melhora no indicador não serve.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1"><ShieldCheck size={18} className="text-accent shrink-0" /></div>
                  <p><strong>Transparência total:</strong> Você sabe exatamente o que está sendo feito, quanto custa e qual o retorno.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1"><TrendingUp size={18} className="text-accent shrink-0" /></div>
                  <p><strong>Melhoria contínua:</strong> O ciclo não termina na entrega. Os resultados reais realimentam o sistema para decisões cada vez melhores.</p>
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
