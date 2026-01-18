import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Search } from 'lucide-react';
import { BLOG_POSTS } from '../posts';
import { Logo } from '../constants';
import { calculateReadingTime } from '../utils';

export const BlogListView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return BLOG_POSTS.filter((post) => 
      post.title.toLowerCase().includes(query) || 
      post.excerpt.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      
      {/* Header with Back Button */}
      <header className="flex items-center justify-between mb-16">
        <Link 
          to="/"
          className="group flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <div className="p-2 rounded-full border border-gray-200 dark:border-white/[.145] group-hover:bg-gray-100 dark:group-hover:bg-[#1a1a1a] transition-colors">
             <ArrowLeft size={16} />
          </div>
          Back to Home
        </Link>
        <div>
            <Logo small />
        </div>
      </header>

      <main className="animate-in fade-in slide-in-from-bottom-4 duration-700">        
        {/* Search Bar */}
        <div className="relative mb-12 max-w-md">
           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 dark:text-gray-500">
              <Search size={24} />
           </div>
           <input
             type="text"
             className="block w-full py-3 pl-10 pr-4 text-sm bg-gray-50 dark:bg-white/[.05] border border-gray-200 dark:border-white/[.145] rounded-xl focus:ring-1 focus:ring-black dark:focus:ring-white focus:outline-none transition-all placeholder:text-gray-500 dark:placeholder:text-gray-500 text-gray-900 dark:text-white"
             placeholder=" Find what you're looking for."
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
           />
        </div>

        <div className="grid gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link
                to={`/posts/${post.slug}`}
                key={post.id} 
                className="group relative flex flex-col sm:flex-row gap-2 sm:gap-8 sm:items-start p-6 -mx-6 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/[.04] transition-colors cursor-pointer"
              >
                <div className="sm:w-32 flex-shrink-0 text-sm text-gray-500 dark:text-gray-400 font-[family-name:var(--font-geist-mono)] flex items-center gap-2 sm:mt-1">
                   <Calendar size={12} />
                   {post.date}
                </div>
                
                <div className="flex flex-col gap-2 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:underline decoration-1 underline-offset-4">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 mt-1 font-[family-name:var(--font-geist-mono)]">
                      <Clock size={12} />
                      {calculateReadingTime(post.content)}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-12 text-gray-400 dark:text-gray-500">
              No articles found matching "{searchQuery}"
            </div>
          )}
        </div>
      </main>

      <footer className="mt-20 pt-8 border-t border-gray-200 dark:border-white/[.145] text-center text-gray-400 dark:text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} mind.md. All rights reserved.</p>
      </footer>
    </div>
  );
};