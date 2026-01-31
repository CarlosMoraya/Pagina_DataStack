import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-24 pb-20 bg-brand-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center text-brand-600 hover:text-accent mb-8 font-medium transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Voltar para o Blog
        </Link>

        <article className="bg-white rounded-2xl shadow-sm border border-brand-100 overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-80 object-cover"
          />
          
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-6 text-sm text-brand-500 mb-6 border-b border-brand-100 pb-6">
              <span className="bg-accent/10 text-accent px-3 py-1 rounded-full font-bold">{post.category}</span>
              <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
              <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime} leitura</span>
              <button className="ml-auto flex items-center gap-2 text-brand-600 hover:text-accent transition-colors">
                <Share2 size={16} /> Compartilhar
              </button>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-brand-900 mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Simulated Content Rendering */}
            <div className="prose prose-lg prose-slate max-w-none text-brand-700">
              <p className="lead text-xl text-brand-600 mb-8 font-light">
                {post.excerpt}
              </p>
              
              {/* Splitting mock content for visual variety */}
              <p className="mb-6">{post.content}</p>
              
              <h3 className="text-2xl font-bold text-brand-900 mt-10 mb-4">O Contexto Técnico</h3>
              <p className="mb-6">
                Para implementar essas soluções, é necessário uma arquitetura robusta. Não basta apenas conectar APIs; é preciso garantir a integridade dos dados, a segurança da informação e a escalabilidade do sistema.
              </p>
              
              <div className="bg-brand-50 p-6 rounded-lg border-l-4 border-accent my-8 italic">
                "A tecnologia deve ser invisível. O que deve aparecer são os resultados do negócio."
              </div>

              <h3 className="text-2xl font-bold text-brand-900 mt-10 mb-4">Conclusão</h3>
              <p>
                Se sua empresa busca dar o próximo passo na maturidade digital, o momento é agora. As ferramentas estão disponíveis, basta a estratégia correta para aplicá-las.
              </p>
            </div>
          </div>
        </article>

        {/* Author Box (Static for now) */}
        <div className="mt-8 bg-brand-900 text-white rounded-xl p-8 flex items-center gap-6">
           <div className="h-16 w-16 bg-brand-700 rounded-full flex items-center justify-center text-2xl font-bold">DS</div>
           <div>
             <h4 className="font-bold text-lg">Equipe Data Stack</h4>
             <p className="text-brand-300 text-sm">Especialistas em engenharia de dados e arquitetura de software.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;