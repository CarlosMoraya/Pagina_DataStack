import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Obrigado pelo contato! Nossa equipe retornará em breve.');
    setFormState({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20">
      <section className="bg-brand-900 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Fale Conosco</h1>
          <p className="text-xl text-brand-300 max-w-2xl mx-auto">
            Vamos discutir como a Data Stack pode acelerar seu negócio.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-brand-900 mb-8">Entre em contato</h2>
              <p className="text-brand-600 mb-10 text-lg">
                Preencha o formulário ou utilize nossos canais diretos. Estamos prontos para entender seu desafio técnico.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-brand-100 p-3 rounded-lg text-brand-800 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-900">Email</h4>
                    <a href="mailto:contato@datastack.tech" className="text-accent hover:underline">contato@datastack.tech</a>
                    <p className="text-sm text-brand-500 mt-1">Resposta em até 24h úteis.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-100 p-3 rounded-lg text-brand-800 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-900">Telefone / WhatsApp</h4>
                    <p className="text-brand-600">+55 (11) 99999-9999</p>
                    <p className="text-sm text-brand-500 mt-1">Segunda a Sexta, 9h às 18h.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-100 p-3 rounded-lg text-brand-800 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-900">Escritório</h4>
                    <p className="text-brand-600">Av. Paulista, 1000 - Bela Vista</p>
                    <p className="text-brand-600">São Paulo - SP, Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-brand-50 p-8 md:p-10 rounded-2xl shadow-sm border border-brand-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-brand-700 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-brand-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-brand-700 mb-2">Email Corporativo</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-brand-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="voce@empresa.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-brand-700 mb-2">Empresa</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-brand-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brand-700 mb-2">Como podemos ajudar?</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-brand-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                    placeholder="Descreva brevemente seu desafio..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-brand-900 text-white font-bold py-4 rounded-lg hover:bg-brand-800 transition-colors flex items-center justify-center shadow-lg"
                >
                  Enviar Mensagem <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;