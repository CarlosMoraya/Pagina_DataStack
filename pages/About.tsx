import React from 'react';
import { Target, Eye, ShieldCheck, Award, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-900 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Quem Somos</h1>
          <p className="text-xl text-brand-300 max-w-2xl mx-auto">
            A ponte entre a complexidade tecnológica e o sucesso do seu negócio.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-brand-900 mb-6">Não vendemos projetos. A gente resolve o problema!</h2>
              <div className="space-y-6 text-lg text-brand-600 leading-relaxed text-justify">
                <p>
                  A <strong>Data Stack</strong> existe porque vimos empresas como a sua gastando fortunas em sistemas que não conversam entre si, em planilhas infinitas e em horas perdidas com tarefas que um robô faria melhor.
                </p>
                <p>
                  <strong>A conta não fecha? A gente resolve isso.</strong>
                </p>
                <p>
                  Cada solução que criamos tem um objetivo: colocar mais dinheiro no seu bolso. Seja automatizando processos que tomam horas da sua equipe, eliminando erros que custam caro ou organizando seus dados para você tomar decisões mais rápidas e certeiras.
                </p>
                <p>
                  <strong>Tecnologia que fala a sua língua.</strong>
                </p>
                <p>
                  Nada de termos complicados ou projetos intermináveis. Nossa equipe traduz o que você precisa em sistemas que funcionam de verdade — e mostram resultado no fim do mês.
                </p>
                <p className="font-semibold text-brand-900">
                  Menos custo, mais resultado. É assim que trabalhamos.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-brand-50 p-6 rounded-xl h-64 flex flex-col justify-end">
                <span className="text-6xl font-bold text-accent mb-2">+50</span>
                <span className="text-brand-600 font-medium text-lg">Projetos Entregues</span>
              </div>
              <div className="bg-brand-900 p-6 rounded-xl h-64 flex flex-col justify-end text-white translate-y-8">
                <span className="text-6xl font-bold mb-2">30%</span>
                <span className="text-brand-300 font-medium text-lg">Média de Redução de Custos Operacionais</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-brand-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-accent">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-accent">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">Missão</h3>
              <p className="text-brand-600">
                Entregar soluções tecnológicas que funcionem nas mãos de quem sempre achou que era só para os grandes.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-800">
              <div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-brand-800">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">Visão</h3>
              <p className="text-brand-600">
                Ser a escolha número um do pequeno e médio empresário que quer resultados reais, sem enrolação e sem estourar o orçamento.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-400">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-brand-600">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">Valores</h3>
              <ul className="space-y-4 text-brand-600">
                <li className="flex gap-3">
                  <div className="mt-1"><Award size={18} className="text-accent shrink-0" /></div>
                  <p><strong>Resultado no bolso:</strong> Tecnologia que não mostra economia na conta não serve para nada.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1"><Zap size={18} className="text-accent shrink-0" /></div>
                  <p><strong>Direto ao ponto:</strong> Nada de encher linguiça. Identificamos o problema, resolvemos rápido e você volta a focar no seu negócio.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1"><ShieldCheck size={18} className="text-accent shrink-0" /></div>
                  <p><strong>Transparência total:</strong> Você sabe exatamente o que está pagando, o que vai receber e quanto vai economizar.</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1"><Users size={18} className="text-accent shrink-0" /></div>
                  <p><strong>Parceria de verdade:</strong> Não entregamos o projeto e sumimos. Estamos aqui quando você precisar — porque o seu sucesso é o nosso também.</p>
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