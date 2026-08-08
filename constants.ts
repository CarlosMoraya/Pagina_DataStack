import { CreditCard, Share2, FileText, BarChart3, Smartphone, Truck, Target } from 'lucide-react';
import { BlogPost, NavItem, Service, Testimonial, Client, FounderInfo } from './types';

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
  role: 'Fundador & Consultor em Inteligência Logística',
  tagline: 'Transformando dados operacionais em decisões logísticas há mais de 15 anos',
  experience: 'Mais de 15 anos de vivência na operação: gerenciou frotas, armazéns, Last Mile e cadeias de suprimentos em empresas como Coca-Cola Andina e Mercado Livre, além de transportadoras e operadores logísticos de grande porte. Viu na prática onde a falta de dados confiáveis, sistemas isolados e decisões reativas geram custo desnecessário e ruptura de serviço. Combinou essa bagagem operacional com MBA em Logística e pós-graduação em Tecnologia Aplicada aos Negócios (AI, Data Science e Big Data) pela PUCRS. Hoje aplica inteligência logística — dados, modelos e tecnologia — para transformar cadeias de suprimentos.',
  education: [
    'MBA em Logística',
    'Consultoria Empresarial',
    'Tecnologia Aplicada aos Negócios — PUCRS',
  ],
  companies: [],
  skills: [
    'Python', 'SQL', 'BigQuery', 'Looker Studio',
    'Power BI', 'WMS', 'TMS', 'Previsão de Demanda',
    'Roteirização', 'Otimização de Estoques',
    'Lean Manufacturing', 'Six Sigma', 'Melhoria Contínua'
  ],
  linkedin: CARLOS_LINKEDIN,
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
    id: 'previsao',
    title: 'Previsão de Demanda',
    description: 'Modelos que consideram sazonalidade, promoções, região e histórico para orientar compras, estoque e distribuição.',
    icon: BarChart3,
    imageUrl: '/images/logistica/torre-controle.jpg',
    details: ['Modelos estatísticos e machine learning', 'Redução de ruptura e excesso de estoque', 'Planejamento de compras otimizado', 'Menor necessidade de fretes emergenciais']
  },
  {
    id: 'roteirizacao',
    title: 'Roteirização Inteligente',
    description: 'Otimização de rotas considerando distância, trânsito, janelas de entrega, capacidade dos veículos e jornada dos motoristas.',
    icon: Truck,
    imageUrl: '/images/logistica/inteligencia-frota.jpg',
    details: ['Otimização multiobjetivo em tempo real', 'Consolidação de cargas', 'Reprogramação diante de imprevistos', 'Redução de km rodados e emissões']
  },
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
    description: 'Da coleta à decisão: conectamos ERP, TMS, WMS, rastreamento e sensores em uma única fonte de verdade.',
    icon: Share2,
    imageUrl: '/images/logistica/integracao-sistemas.jpg',
    details: ['Integração ERP/TMS/WMS', 'Qualidade e padronização de dados', 'APIs e conectores prontos', 'Data Warehouse logístico']
  },
  {
    id: 'visibilidade',
    title: 'Visibilidade Ponta a Ponta',
    description: 'Acompanhe pedidos e cargas do fornecedor ao cliente final. GPS, IoT, telemetria e alertas de atraso em tempo real.',
    icon: Target,
    imageUrl: '/images/logistica/portal-motorista.jpg',
    details: ['Rastreamento GPS e telemetria', 'Monitoramento de temperatura e condições', 'Alertas automáticos de desvio e atraso', 'Estimativa de horário de chegada (ETA)']
  },
  {
    id: 'conciliacao',
    title: 'Conciliação Inteligente de Fretes',
    description: 'Conferência automática entre tabela, acordado e realizado. Detecção de divergências em minutos, não em dias.',
    icon: FileText,
    imageUrl: '/images/logistica/conciliacao-fretes.jpg',
    details: ['Conferência automática de fretes', 'Detecção de divergências', 'Histórico completo por veículo', 'Relatórios financeiros e auditoria']
  }
];

export const LOGISTICS_AREAS = [
  'Transporte Rodoviário',
  'Gestão de Frota',
  'Last Mile',
  'Centros de Distribuição',
  'Supply Chain',
  'Operadores Logísticos'
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '3',
    name: 'Viviane',
    role: 'Ger. Financeiro',
    company: 'Versan Logistic',
    content: 'Incrível! Tínhamos um processo de pagamento dos nossos motoristas que levava uma semana para finalizar. A DataStack reduziu esse tempo para um único clique!'
  },
  {
    id: '2',
    name: 'Pedro Quintella',
    role: 'CEO',
    company: 'Grupo Pralog',
    content: 'A DataStack nos ajudou a transformar dados operacionais em decisões. Reduzimos custos e melhoramos a eficiência de toda a nossa cadeia logística.'
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