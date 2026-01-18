import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { BLOG_POSTS, Logo } from '../constants';
import { calculateReadingTime } from '../utils';

export const BlogPostView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 font-[family-name:var(--font-geist-sans)]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/posts" className="text-sm underline underline-offset-4">Back to list</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-3xl mx-auto">
      
      {/* Header */}
      <header className="flex items-center justify-between mb-12">
        <Link 
          to="/posts"
          className="group flex items-center gap-2 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
        >
          <div className="p-2 rounded-full border border-black/[.08] dark:border-white/[.145] group-hover:bg-[#f2f2f2] dark:group-hover:bg-[#1a1a1a] transition-colors">
             <ArrowLeft size={16} />
          </div>
          Back to List
        </Link>
        <div>
           <Logo small />
        </div>
      </header>

      <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* Meta Data */}
        <div className="flex gap-4 text-sm opacity-50 font-[family-name:var(--font-geist-mono)] mb-6">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {calculateReadingTime(post.content)}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10 leading-tight">
          {post.title}
        </h1>

        <div className="font-[family-name:var(--font-geist-mono)] text-sm sm:text-base leading-7 opacity-90">
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h1 className="text-xl font-bold mt-10 mb-4 tracking-tight" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-lg font-bold mt-10 mb-4 tracking-tight border-b border-black/10 dark:border-white/10 pb-2" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-base font-bold mt-8 mb-2" {...props} />,
              p: ({node, ...props}) => <p className="mb-6 leading-7" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc list-inside mb-6 space-y-1" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-6 space-y-1" {...props} />,
              li: ({node, ...props}) => <li className="" {...props} />,
              blockquote: ({node, ...props}) => <blockquote className="border-l-2 border-black/20 dark:border-white/20 pl-4 italic opacity-80 my-6" {...props} />,
              code: ({node, className, children, ...props}) => {
                const match = /language-(\w+)/.exec(className || '')
                const isInline = !match && !String(children).includes('\n')
                if (isInline) {
                  return <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold text-[0.9em]" {...props}>{children}</code>
                }
                return (
                  <pre className="bg-black/[.03] dark:bg-white/[.05] p-4 rounded-lg overflow-x-auto mb-6 border border-black/[.05] dark:border-white/[.05]">
                    <code className="text-xs sm:text-sm" {...props}>{children}</code>
                  </pre>
                )
              }
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

      <footer className="mt-20 pt-8 border-t border-black/[.08] dark:border-white/[.145] text-center opacity-40 text-sm">
        <p>&copy; {new Date().getFullYear()} mind.md. All rights reserved.</p>
      </footer>
    </div>
  );
};