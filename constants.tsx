import React from 'react';
import { Mail, Github, Linkedin, Command } from 'lucide-react';

export const Logo = ({ small }: { small?: boolean }) => (
  <div className={`flex items-center font-bold tracking-tighter ${small ? 'gap-2 text-xl' : 'gap-3 text-3xl'}`}>
    <div className={`${small ? 'w-8 h-8 rounded-lg' : 'w-12 h-12 rounded-xl'} bg-black dark:bg-white text-white dark:text-black flex items-center justify-center`}>
        <Command size={small ? 16 : 24} />
    </div>
    <span>mind.md</span>
  </div>
);

export const FooterIcons = {
  Email: <Mail size={16} />,
  Github: <Github size={16} />,
  Linkedin: <Linkedin size={16} />
};