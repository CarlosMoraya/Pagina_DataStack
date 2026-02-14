import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS, BLOG_SHEET_URL } from '../constants';
import { ArrowLeft, Calendar, Clock, Share2, Loader2 } from 'lucide-react';
import { fetchBlogPosts } from '../src/services/googleSheets';
import { BlogPost as BlogPostType } from '../types';

const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  if (!content) return null;

  // Split by headings or double/single newlines to ensure headers and paragraphs are distinct
  // This version is more aggressive in finding structure in plain text
  const segments = content
    .split(/(\n\s*##+\s*.*|\n\s*\n)/g)
    .map(s => s.trim())
    .filter(s => s.length > 0);

  return (
    <div className="prose prose-lg lg:prose-xl prose-slate max-w-none prose-headings:text-brand-900 prose-headings:font-bold prose-p:text-brand-700 prose-p:leading-relaxed prose-strong:text-brand-900 prose-blockquote:border-accent prose-blockquote:bg-brand-50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic">
      {segments.map((segment, index) => {
        const parseInline = (text: string) => text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/__(.*?)__/g, '<strong>$1</strong>');

        // Detect Headers
        if (segment.startsWith('###')) {
          return <h3 key={index} className="text-2xl font-bold mt-10 mb-4 text-brand-900"
            dangerouslySetInnerHTML={{ __html: parseInline(segment.replace(/^###\s*/, '')) }} />;
        }
        if (segment.startsWith('##')) {
          return <h2 key={index} className="text-3xl font-bold mt-14 mb-6 border-b border-brand-100 pb-4 text-brand-900"
            dangerouslySetInnerHTML={{ __html: parseInline(segment.replace(/^##\s*/, '')) }} />;
        }
        if (segment.startsWith('#')) {
          return <h1 key={index} className="text-4xl font-bold mt-16 mb-8 text-brand-900"
            dangerouslySetInnerHTML={{ __html: parseInline(segment.replace(/^#\s*/, '')) }} />;
        }

        // Detect lists
        if (segment.includes('\n-') || segment.includes('\n*')) {
          const lines = segment.split('\n');
          return (
            <ul key={index} className="list-disc list-inside mb-6 space-y-2">
              {lines.map((line, lIdx) => (
                <li key={lIdx} className="text-brand-700"
                  dangerouslySetInnerHTML={{ __html: parseInline(line.replace(/^[-*]\s*/, '')) }} />
              ))}
            </ul>
          );
        }

        // Standard paragraph
        return <p key={index} className="mb-6 leading-relaxed whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: parseInline(segment) }} />;
      })}
    </div>
  );
};

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostType | undefined>(() => BLOG_SHEET_URL ? undefined : BLOG_POSTS.find((p) => p.id === id));
  const [isLoading, setIsLoading] = useState<boolean>(!!BLOG_SHEET_URL && !post);

  useEffect(() => {
    if (BLOG_SHEET_URL && !post) {
      fetchBlogPosts(BLOG_SHEET_URL).then(fetchedPosts => {
        const foundPost = fetchedPosts.find(p => p.id === id);
        setPost(foundPost);
        setIsLoading(false);
      });
    }
  }, [id, post]);

  if (isLoading) {
    return (
      <div className="pt-24 pb-20 bg-brand-50 min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 text-accent animate-spin" />
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-24 pb-20 bg-brand-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center text-brand-600 hover:text-accent mb-8 font-medium transition-colors group">
          <ArrowLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Voltar para o Blog
        </Link>

        <article className="bg-white rounded-3xl shadow-xl shadow-brand-200/50 border border-brand-100 overflow-hidden">
          <div className="relative h-[400px]">
            <img
              src={post.imageUrl}
              alt={post.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <span className="bg-accent text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block shadow-lg">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                {post.title}
              </h1>
            </div>
          </div>

          <div className="p-8 md:p-14">
            <div className="flex flex-wrap items-center justify-between gap-6 text-sm text-brand-500 mb-12 py-6 border-y border-brand-100">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2"><Calendar size={18} className="text-accent" /> {post.date}</span>
                <span className="flex items-center gap-2"><Clock size={18} className="text-accent" /> {post.readTime}</span>
              </div>
              <button className="flex items-center gap-2 bg-brand-50 hover:bg-brand-100 text-brand-700 px-4 py-2 rounded-lg transition-colors font-medium border border-brand-200">
                <Share2 size={18} /> Compartilhar Insight
              </button>
            </div>

            <div className="mb-12">
              <p className="text-xl md:text-2xl text-brand-600 leading-relaxed font-light italic border-l-4 border-accent pl-6 py-2">
                {post.excerpt}
              </p>
            </div>

            <MarkdownRenderer content={post.content} />
          </div>
        </article>

        {/* Improved Author Box */}
        <div className="mt-12 bg-white border border-brand-100 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8 group">
          <div className="h-24 w-24 bg-gradient-to-br from-brand-900 to-brand-800 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-xl transform group-hover:rotate-3 transition-transform">
            DS
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold text-2xl text-brand-900 mb-2">Equipe Data Stack</h4>
            <p className="text-brand-600 leading-relaxed max-w-xl">
              Somos especialistas em transformar dados em inteligência estratégica. Nosso time de arquitetos e engenheiros de software trabalha para levar tecnologia de ponta para empresas que buscam alta performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;