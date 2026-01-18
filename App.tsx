import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeView } from './components/HomeView';
import { BlogListView } from './components/BlogListView';
import { BlogPostView } from './components/BlogPostView';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/posts" element={<BlogListView />} />
      <Route path="/posts/:slug" element={<BlogPostView />} />
    </Routes>
  );
}