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
              <h2 className="text-3xl font-bold text-brand-900 mb-6">Mais que consultores, parceiros de arquitetura.</h2>
              <div className="space-y-6 text-lg text-brand-600 leading-relaxed text-justify">
                <p>
                  A <strong>Data Stack</strong> nasceu da percepção de uma lacuna no mercado: pequenas e médias empresas que precisavam de tecnologia de ponta, mas eram atendidas por soluções genéricas ou consultorias focadas apenas em grandes corporações.
                </p>
                <p>
                  Não acreditamos em tecnologia por tecnologia. Para nós, cada linha de código, cada pipeline de dados e cada automação deve servir a um propósito claro: <strong>gerar eficiência, reduzir custos ou aumentar receita.</strong>
                </p>
                <p>
                  Nossa equipe é formada por engenheiros de dados, desenvolvedores full-stack e especialistas em IA que falam a língua do negócio. Traduzimos desafios operacionais em soluções técnicas elegantes e escaláveis.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-brand-50 p-6 rounded-xl h-64 flex flex-col justify-end">
                <span className="text-4xl font-bold text-accent mb-2">+50</span>
                <span className="text-brand-600 font-medium">Projetos Entregues</span>
              </div>
              <div className="bg-brand-900 p-6 rounded-xl h-64 flex flex-col justify-end text-white translate-y-8">
                <span className="text-4xl font-bold mb-2">30%</span>
                <span className="text-brand-300 font-medium">Média de Redução de Custos Operacionais</span>
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
                Democratizar o acesso à engenharia de dados e inteligência artificial para PMEs, transformando empresas tradicionais em organizações data-driven.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-800">
              <div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-brand-800">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">Visão</h3>
              <p className="text-brand-600">
                Ser a referência nacional em arquitetura de soluções digitais de alto desempenho, reconhecida pelo pragmatismo e excelência técnica.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-400">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-brand-600">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">Valores</h3>
              <ul className="space-y-3 text-brand-600">
                <li className="flex items-center gap-2"><Award size={16} className="text-accent" /> Excelência Técnica</li>
                <li className="flex items-center gap-2"><Zap size={16} className="text-accent" /> Pragmatismo</li>
                <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-accent" /> Transparência</li>
                <li className="flex items-center gap-2"><Users size={16} className="text-accent" /> Parceria de Longo Prazo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;