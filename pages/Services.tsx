import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nossas Soluções</h1>
          <p className="text-xl text-brand-300 max-w-2xl mx-auto">
            Da infraestrutura de dados à interface do usuário. Cobrimos todo o ciclo de vida digital da sua empresa.
          </p>
        </div>
      </section>

      {/* Services Detail List */}
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
                  {service.description} Focamos em entregar código limpo, arquitetura segura e documentação completa, garantindo que a tecnologia seja um ativo e não um débito técnico.
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
                {/* Abstract visualization placeholder */}
                <div className="bg-gradient-to-br from-brand-100 to-white border border-brand-200 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden shadow-lg">
                   <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
                   <service.icon size={120} className="text-brand-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Areas of Actuation */}
      <section className="py-20 bg-brand-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-900 mb-4">Áreas de Atuação</h2>
            <p className="text-brand-600">Expertise aplicada a diversos setores.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Varejo & E-commerce', 'Finanças & Fintech', 'Logística & Supply Chain', 'Saúde & Healthtech', 'Agronegócio', 'Indústria 4.0', 'Educação', 'Serviços Jurídicos'].map((area) => (
              <div key={area} className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-brand-200">
                <span className="font-medium text-brand-800">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* CTA */}
       <section className="py-16 bg-white border-t border-brand-100">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-brand-900 mb-6">Não encontrou o que procura?</h2>
            <p className="text-brand-600 mb-8">Desenvolvemos soluções sob medida para desafios complexos.</p>
            <Link to="/contato" className="inline-flex items-center text-accent font-bold hover:underline">
                Fale com nossos engenheiros <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;