import React from 'react';
import { Globe } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Globe className="h-10 w-10 dark:text-gray-200" />
          <h1 className="text-2xl dark:text-gray-200">Wikipedia</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button className="px-4 py-1 bg-yellow-400 hover:bg-yellow-500 rounded">
            Donate
          </button>
          <button className="px-4 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 rounded">
            Login
          </button>
          <button className="px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded">
            Create Account
          </button>
        </div>
      </div>
    </header>
  );
}