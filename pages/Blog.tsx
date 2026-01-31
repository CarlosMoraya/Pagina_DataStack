import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Dados', 'Automação', 'Inteligência Artificial', 'Tecnologia'];
  
  const filteredPosts = selectedCategory === 'Todos' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-900 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Blog Tech</h1>
          <p className="text-xl text-brand-300 max-w-2xl mx-auto">
            Insights técnicos, tendências de mercado e guias práticos sobre dados e automação.
          </p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-20 bg-brand-50 min-h-screen">
        <div className="container mx-auto px-6">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat 
                    ? 'bg-accent text-white shadow-md' 
                    : 'bg-white text-brand-600 hover:bg-brand-100 border border-brand-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-brand-100 flex flex-col h-full group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-brand-500 mb-3">
                    <span className="bg-brand-100 text-brand-800 px-2 py-1 rounded font-semibold">{post.category}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-900 mb-3 leading-tight group-hover:text-accent transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-brand-600 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="text-accent font-semibold text-sm flex items-center mt-auto">
                    Ler Artigo <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20 text-brand-500">
              Nenhum artigo encontrado nesta categoria.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;