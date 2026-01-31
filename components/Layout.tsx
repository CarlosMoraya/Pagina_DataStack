import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Github, Mail } from 'lucide-react';
import Logo from './Logo';
import { NAV_ITEMS } from '../constants';

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <NavLink to="/">
            <Logo className="h-10" variant={isScrolled ? 'dark' : pathname === '/' ? 'light' : 'dark'} />
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-accent tracking-wide ${
                    isActive
                      ? 'text-accent'
                      : isScrolled || pathname !== '/'
                      ? 'text-brand-700'
                      : 'text-white/90 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contato"
              className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-all ${
                isScrolled || pathname !== '/'
                  ? 'bg-brand-900 text-white hover:bg-brand-800'
                  : 'bg-white text-brand-900 hover:bg-brand-50'
              }`}
            >
              Falar com Especialista
            </NavLink>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 ${
              isScrolled || pathname !== '/' ? 'text-brand-900' : 'text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
          <nav className="flex flex-col gap-6 text-center">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-xl font-medium ${isActive ? 'text-accent' : 'text-brand-800'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-950 text-white pt-16 pb-8 border-t border-brand-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Logo variant="light" className="h-10 mb-6" />
              <p className="text-brand-400 max-w-sm mb-6 leading-relaxed">
                Transformamos dados complexos em inteligência estratégica. 
                Parceira tecnológica para empresas que buscam eficiência, automação e crescimento escalável.
              </p>
              <div className="flex gap-4 text-brand-400">
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-brand-50">Empresa</h4>
              <ul className="space-y-4 text-brand-400">
                <li><NavLink to="/sobre" className="hover:text-white transition-colors">Quem Somos</NavLink></li>
                <li><NavLink to="/clientes" className="hover:text-white transition-colors">Clientes</NavLink></li>
                <li><NavLink to="/blog" className="hover:text-white transition-colors">Blog Tech</NavLink></li>
                <li><NavLink to="/contato" className="hover:text-white transition-colors">Trabalhe Conosco</NavLink></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-brand-50">Soluções</h4>
              <ul className="space-y-4 text-brand-400">
                <li><NavLink to="/servicos" className="hover:text-white transition-colors">Engenharia de Dados</NavLink></li>
                <li><NavLink to="/servicos" className="hover:text-white transition-colors">Automação de Processos</NavLink></li>
                <li><NavLink to="/servicos" className="hover:text-white transition-colors">Inteligência Artificial</NavLink></li>
                <li><NavLink to="/servicos" className="hover:text-white transition-colors">SaaS & Sistemas</NavLink></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-brand-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-500">
            <p>&copy; {new Date().getFullYear()} Data Stack Tecnologia. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span className="cursor-pointer hover:text-brand-300">Privacidade</span>
              <span className="cursor-pointer hover:text-brand-300">Termos</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;