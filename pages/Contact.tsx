import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, Copy, Check } from 'lucide-react';
import { CONTACT_SCRIPT_URL } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('comercial@data-stack.tech');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+5521983884454');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (CONTACT_SCRIPT_URL) {
      try {
        // Enviar para o Google Apps Script
        const response = await fetch(CONTACT_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Necessário para Google Apps Script
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formState),
        });

        setIsSubmitted(true);
        setFormState({ name: '', email: '', company: '', message: '' });
      } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
      } finally {
        setIsLoading(false);
      }
    } else {
      // Simulação sem Script URL
      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
        setFormState({ name: '', email: '', company: '', message: '' });
      }, 1500);
    }
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
                  <div className="group/email">
                    <h4 className="font-bold text-brand-900 mb-1">Email</h4>
                    <div className="flex items-center gap-3">
                      <a
                        href="mailto:comercial@data-stack.tech?subject=Contato%20via%20Site%20-%20Data%20Stack"
                        className="text-accent hover:underline font-medium"
                      >
                        comercial@data-stack.tech
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1.5 rounded-md hover:bg-brand-100 text-brand-400 hover:text-accent transition-all relative group/tooltip"
                        title="Copiar e-mail"
                      >
                        {copiedEmail ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}

                        {/* Tooltip */}
                        <span className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap ${copiedEmail ? 'opacity-100' : ''}`}>
                          {copiedEmail ? 'Copiado!' : 'Copiar e-mail'}
                        </span>
                      </button>
                    </div>
                    <p className="text-sm text-brand-500 mt-1">Resposta em até 24h úteis.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-100 p-3 rounded-lg text-brand-800 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-900 mb-1">Telefone / WhatsApp</h4>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://wa.me/5521983884454"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-600 hover:text-accent hover:underline font-medium transition-colors"
                      >
                        +55 (21) 98388-4454
                      </a>
                      <button
                        onClick={handleCopyPhone}
                        className="p-1.5 rounded-md hover:bg-brand-100 text-brand-400 hover:text-accent transition-all relative group/tooltip"
                        title="Copiar telefone"
                      >
                        {copiedPhone ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}

                        {/* Tooltip */}
                        <span className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap ${copiedPhone ? 'opacity-100' : ''}`}>
                          {copiedPhone ? 'Copiado!' : 'Copiar telefone'}
                        </span>
                      </button>
                    </div>
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
            <div className="bg-brand-50 p-8 md:p-10 rounded-2xl shadow-sm border border-brand-100 min-h-[500px] flex flex-col justify-center">
              {isSubmitted ? (
                <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                  <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-900 mb-4">Mensagem Enviada!</h3>
                  <p className="text-brand-600 mb-8 max-w-sm mx-auto">
                    Obrigado pelo contato. Nossa equipe técnica analisará seu desafio e retornará em breve.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-accent font-semibold hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
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
                      disabled={isLoading}
                      className="w-full px-4 py-3 rounded-lg border border-brand-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all disabled:opacity-50"
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
                      disabled={isLoading}
                      className="w-full px-4 py-3 rounded-lg border border-brand-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all disabled:opacity-50"
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
                      disabled={isLoading}
                      className="w-full px-4 py-3 rounded-lg border border-brand-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all disabled:opacity-50"
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
                      disabled={isLoading}
                      className="w-full px-4 py-3 rounded-lg border border-brand-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none disabled:opacity-50"
                      placeholder="Descreva brevemente seu desafio..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-brand-900 text-white font-bold py-4 rounded-lg hover:bg-brand-800 transition-all flex items-center justify-center shadow-lg disabled:bg-brand-400 disabled:cursor-not-allowed group"
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>
                        Enviar Mensagem <Send size={18} className="ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;