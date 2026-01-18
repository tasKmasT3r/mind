import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, FooterIcons } from '../constants';
import { ArrowRight } from 'lucide-react';

export const HomeView: React.FC = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-start">
        
        {/* Logo - Aligned Left */}
        <div className="py-2">
            <Logo />
        </div>

        {/* Text - Aligned Left */}
        <ol className="list-inside list-decimal text-sm/6 font-[family-name:var(--font-geist-mono)] text-gray-600 dark:text-gray-300">
          <li className="mb-2 tracking-[-.01em]">
            Welcome to <code className="bg-gray-100 dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold text-gray-900 dark:text-white">mind.md</code>.
            A place for thoughts.
          </li>
          <li className="tracking-[-.01em]">
            Read through the collection of articles below.
          </li>
        </ol>

        {/* Button - Aligned Center */}
        <div className="flex gap-4 items-center justify-center w-full mt-4">
          <Link
            to="/posts"
            className="rounded-full border border-solid border-transparent transition-all duration-300 flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-8 w-auto bg-black text-white dark:bg-white dark:text-black shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Start
            <ArrowRight size={16} />
          </Link>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-gray-500 dark:text-gray-400">
        <a
          className="flex items-center gap-2 hover:text-black dark:hover:text-white hover:underline hover:underline-offset-4 transition-colors"
          href="mailto:swachud@gmail.com"
        >
          {FooterIcons.Email}
          Email
        </a>
        <a
          className="flex items-center gap-2 hover:text-black dark:hover:text-white hover:underline hover:underline-offset-4 transition-colors"
          href="https://github.com/tasKmasT3r/mind"
          target="_blank"
          rel="noopener noreferrer"
        >
          {FooterIcons.Github}
          Open Source
        </a>
        <a
          className="flex items-center gap-2 hover:text-black dark:hover:text-white hover:underline hover:underline-offset-4 transition-colors"
          href="https://www.linkedin.com/in/swachchhandadahal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {FooterIcons.Linkedin}
          Linkedin
        </a>
      </footer>
    </div>
  );
};