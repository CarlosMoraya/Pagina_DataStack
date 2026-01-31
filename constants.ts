import { Database, Workflow, Cpu, Code2 } from 'lucide-react';
import { BlogPost, NavItem, Service, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Quem Somos', path: '/sobre' },
  { label: 'Serviços', path: '/servicos' },
  { label: 'Clientes', path: '/clientes' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contato', path: '/contato' },
];

export const SERVICES: Service[] = [
  {
    id: 'dados',
    title: 'Engenharia de Dados',
    description: 'Estruturação, limpeza e organização de dados para transformar informações brutas em ativos estratégicos.',
    icon: Database,
    details: ['Data Warehousing', 'ETL/ELT Pipelines', 'Governança de Dados', 'Business Intelligence']
  },
  {
    id: 'automacao',
    title: 'Automação de Processos',
    description: 'Otimização de fluxos de trabalho operacionais para reduzir custos e eliminar erros manuais.',
    icon: Workflow,
    details: ['RPA (Robotic Process Automation)', 'Integração de APIs', 'Workflows Customizados', 'Otimização Operacional']
  },
  {
    id: 'ia',
    title: 'Inteligência Artificial',
    description: 'Implementação de modelos preditivos e IA generativa aplicada ao contexto do seu negócio.',
    icon: Cpu,
    details: ['Machine Learning', 'Processamento de Linguagem Natural', 'Análise Preditiva', 'Chatbots Inteligentes']
  },
  {
    id: 'saas',
    title: 'Desenvolvimento de Sistemas',
    description: 'Criação de plataformas SaaS e websites robustos, escaláveis e focados na experiência do usuário.',
    icon: Code2,
    details: ['SaaS B2B', 'Arquitetura de Microserviços', 'Web Apps Modernos', 'Sistemas Internos']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Mendes',
    role: 'CTO',
    company: 'Logística Avançada S.A.',
    content: 'A Data Stack não apenas entregou o código, mas entendeu nosso modelo de negócio. A automação implementada reduziu nosso tempo de processamento em 70%.'
  },
  {
    id: '2',
    name: 'Fernanda Souza',
    role: 'Diretora de Operações',
    company: 'FinTech Solution',
    content: 'Profissionalismo e pragmatismo. Eles transformaram nosso banco de dados caótico em uma fonte de verdade confiável para tomada de decisão.'
  },
  {
    id: '3',
    name: 'Roberto Alencar',
    role: 'Fundador',
    company: 'AgroTech Brasil',
    content: 'A arquitetura do nosso novo SaaS é robusta e escalável, graças à visão técnica da equipe da Data Stack.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Como a IA Generativa está mudando o cenário para PMEs',
    excerpt: 'A inteligência artificial deixou de ser exclusividade de grandes corporações. Veja como aplicá-la hoje.',
    date: '12 Out, 2023',
    category: 'Inteligência Artificial',
    readTime: '5 min',
    imageUrl: 'https://picsum.photos/800/400?random=1',
    content: 'A revolução da IA Generativa democratizou o acesso a ferramentas poderosas de produtividade. Pequenas e médias empresas agora podem utilizar modelos de linguagem para automatizar atendimento, gerar conteúdo e analisar sentimentos de clientes com um custo marginal...'
  },
  {
    id: '2',
    title: 'A importância de um Data Lakehouse estruturado',
    excerpt: 'Entenda por que centralizar seus dados é o primeiro passo para uma cultura data-driven.',
    date: '28 Set, 2023',
    category: 'Dados',
    readTime: '7 min',
    imageUrl: 'https://picsum.photos/800/400?random=2',
    content: 'Muitas empresas falham em seus projetos de BI não por falta de ferramentas de visualização, mas por falta de confiança nos dados. A arquitetura de Data Lakehouse une a flexibilidade dos lagos de dados com a gestão dos warehouses...'
  },
  {
    id: '3',
    title: 'Automação vs. Hiperautomação: Qual a diferença?',
    excerpt: 'Descubra como orquestrar múltiplas tecnologias para otimizar processos complexos.',
    date: '15 Set, 2023',
    category: 'Automação',
    readTime: '4 min',
    imageUrl: 'https://picsum.photos/800/400?random=3',
    content: 'Enquanto a automação tradicional foca em tarefas repetitivas baseadas em regras, a hiperautomação envolve o uso de IA para automatizar processos que requerem tomada de decisão cognitiva...'
  }
];