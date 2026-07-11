import { CreditCard, Share2, FileText, BarChart3, Smartphone, Truck, Target } from 'lucide-react';
import { BlogPost, NavItem, Service, Testimonial, Client, FounderInfo, BetafleetInfo } from './types';

export const CLIENTS: Client[] = [
  { name: 'Versan Logistic', logo: '/images/services/Versan.png?v=1' },
  { name: 'Grupo Pralog', logo: '/images/services/Pralog.png?v=1' },
  { name: 'Deluna Transportes', logo: '/images/services/Deluna.png?v=1' },
  { name: '4Log', logo: '/images/services/4Log.png?v=1' },
];

export const PARTNERS: Client[] = [
  { name: 'Supabase', logo: '/images/partners/Supabase2.png' },
  { name: 'Google AI Studio', logo: '/images/partners/GoogleAIStudio3.png' },
  { name: 'Antigravity', logo: '/images/partners/Antigravity2.png' },
  { name: 'Claude AI', logo: '/images/partners/Claude2.png' },
  { name: 'BigQuery', logo: '/images/partners/bigquery.png' },
  { name: 'n8n', logo: '/images/partners/N8N.png' },
  { name: 'Python', logo: '/images/partners/Python.png' },
];

export const BLOG_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTe04ZnSK9l1b8DIos5eSLyB5MVs17zkaJAAvJv6wWpG0Hda6m8gtYn9n5LhQsdAthbYdCDqjDra3fS/pub?gid=0&single=true&output=csv';
export const CONTACT_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbylciRFBlmkCzvl5Dt-qxYk4Paoo4AEJMxnrp8vqSTKWsCORAz6knN3ce9AhISutmuA/exec';

export const CARLOS_LINKEDIN = 'https://www.linkedin.com/in/carlosmoraya/';

export const CARLOS_INFO: FounderInfo = {
  name: 'Carlos Moraya',
  role: 'Fundador & Consultor',
  tagline: '15+ anos resolvendo problemas de logística com tecnologia',
  experience: 'Mais de 15 anos de experiência em logística e transporte, com passagens por Coca-Cola Andina e Mercado Livre, além de transportadoras e operadores logísticos de grande porte. Especialista em tecnologia aplicada a negócios, com MBA em Logística e pós-graduação em Tecnologia Aplicada (AI, Data Science e Big Data) pela PUCRS.',
  education: [
    'MBA em Logística',
    'Consultoria Empresarial',
    'Tecnologia Aplicada aos Negócios — PUCRS',
  ],
  companies: [],
  skills: [
    'Python', 'SQL', 'BigQuery', 'Looker Studio',
    'Power BI', 'WMS', 'Gestão de Frota',
    'Lean Manufacturing', 'Six Sigma', 'Melhoria Contínua'
  ],
  linkedin: CARLOS_LINKEDIN,
};

export const BETAFLEET: BetafleetInfo = {
  name: 'BetaFleet',
  tagline: 'Gestão Inteligente de Frota para E-commerce',
  description: 'Plataforma criada por Carlos Moraya que centraliza dados operacionais, reduz custos e aumenta o ROI de cada veículo da operação. Uma prova do conhecimento na prática.',
  url: 'https://betafleet.com.br',
  features: [
    'Dashboard operacional em tempo real',
    'Controle de manutenção preventiva',
    'Gestão financeira por veículo',
    'Checklists digitais e inspeções',
    'Aprovação de orçamentos',
    'Indicadores de disponibilidade e custo'
  ]
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Quem Somos', path: '/sobre' },
  { label: 'Soluções', path: '/servicos' },
  { label: 'Clientes', path: '/clientes' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contato', path: '/contato' },
];

export const SERVICES: Service[] = [
  {
    id: 'pagamento',
    title: 'Automação de Pagamento de Motoristas',
    description: 'Do cálculo ao comprovante fiscal. Reduzimos o pagamento da sua frota de dias para segundos.',
    icon: CreditCard,
    imageUrl: '/images/logistica/pagamento-motoristas.jpg',
    details: ['Cálculo automático de fretes', 'Fluxo de aprovação inteligente', 'Pagamento no mesmo dia', 'Comprovante fiscal integrado']
  },
  {
    id: 'integracao',
    title: 'Integração de Sistemas Logísticos',
    description: 'TMS, ERP, pedágio, combustível, rastreamento. Tudo conversando em uma única plataforma.',
    icon: Share2,
    imageUrl: '/images/logistica/integracao-sistemas.jpg',
    details: ['Integração TMS/ERP/WMS', 'Conciliação automática de dados', 'APIs e conectores prontos', 'Data Warehouse logístico']
  },
  {
    id: 'conciliação',
    title: 'Conciliação Inteligente de Fretes',
    description: 'Chega de planilhas infinitas. Sistema que confere tabela, acordado e realizado em minutos.',
    icon: FileText,
    imageUrl: '/images/logistica/conciliacao-fretes.jpg',
    details: ['Conferência automática de fretes', 'Detecção de divergências', 'Histórico completo por veículo', 'Relatórios financeiros']
  },
  {
    id: 'torre',
    title: 'Torre de Controle e Dashboards',
    description: 'KPIs logísticos em tempo real. Visibilidade de ponta a ponta da sua operação.',
    icon: BarChart3,
    imageUrl: '/images/logistica/torre-controle.jpg',
    details: ['Painel operacional em tempo real', 'KPIs de frota e motoristas', 'Alertas inteligentes', 'Relatórios executivos']
  },
  {
    id: 'portal',
    title: 'Portal do Motorista',
    description: 'O motorista consulta fretes, documentos, pagamentos e checklists pelo celular.',
    icon: Smartphone,
    imageUrl: '/images/logistica/portal-motorista.jpg',
    details: ['App/web para motoristas', 'Consulta de fretes e pagamentos', 'Checklists digitais', 'Documentos e comprovantes']
  },
  {
    id: 'frota',
    title: 'Inteligência para Frota',
    description: 'Manutenção preditiva, custo por km, análise de desempenho e redução de despesas operacionais.',
    icon: Truck,
    imageUrl: '/images/logistica/inteligencia-frota.jpg',
    details: ['Manutenção preventiva e preditiva', 'Custo real por veículo', 'Análise de combustível', 'Otimização de roteirização']
  }
];

export const LOGISTICS_AREAS = [
  'Transporte Rodoviário',
  'Gestão de Frota',
  'Last Mile',
  'Supply Chain',
  'Frotistas e Agregados',
  'Operadores Logísticos'
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '3',
    name: 'Viviane',
    role: 'Ger. Financeiro',
    company: 'Versan Logistic',
    content: 'Incrível! Tinhamos um processo de pagamento dos nossos motoristas que levava uma semana para finalizar. A DataStack reduziu esse tempo para um único click!'
  },
  {
    id: '2',
    name: 'Pedro Quintella',
    role: 'CEO',
    company: 'Grupo Pralog',
    content: 'A DataStack nos ajudou a transformar nossos processos operacionais, reduzindo custos e melhorando a eficiência da nossa operação logística.'
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