import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import ArticleContent from './components/ArticleContent';
import Chatbot from './components/Chatbot';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
        <Header />
        <SearchBar />
        <Navigation />
        <div className="max-w-7xl mx-auto flex">
          <Sidebar />
          <ArticleContent />
        </div>
        <Chatbot />
      </div>
    </ThemeProvider>
  );
}