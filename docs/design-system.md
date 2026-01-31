# Design System: Data Stack

## Fundamentos Visuais

### Paleta de Cores (Tailwind CSS)
Utilizamos uma paleta baseada em tons de azul acinzentado (Slate/Brand) e um azul vibrante para destaque (Accent).

- **Brand (Base):**
  - `brand-50`: `#f8fafc` (Backgrounds claros)
  - `brand-900`: `#0f172a` (Textos principais)
  - `brand-950`: `#020617` (Headers e seções escuras)
- **Accent (Ação):**
  - `accent-DEFAULT`: `#3b82f6` (Botões, links, ícones de destaque)
  - `accent-dark`: `#1d4ed8` (Hover e estados ativos)

### Tipografia
- **Fonte Principal:** `Inter` (Google Fonts).
- **Estilo:** Sans-serif moderno, limpo e legível.
- **Hierarquia:**
    - Cabeçalhos com `font-bold` ou `font-semibold`.
    - Corpo de texto com `antialiased` para melhor renderização.

### Elementos de Interface
- **Ícones:** Utiliza a biblioteca `lucide-react`.
- **Layout:** Estrutura baseada em `flex` e `grid` do Tailwind.
- **Interatividade:** Uso de `hover` effects consistentes e transições suaves.

## Padrões de Componentes
- **Layout:** Header fixo com navegação, conteúdo centralizado e footer informativo.
- **Navegação:** Links com estados ativos claros.
- **Cards:** Uso de sombras sutis e bordas arredondadas para destacar serviços e posts de blog.

## Configuração Tailwind (Referência)
A configuração está centralizada via CDN no `index.html` para desenvolvimento ágil, mas segue a estrutura de tokens definida acima.
