import React from 'react';

export default function Navigation() {
  return (
    <nav className="border-b dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-6 text-sm">
          <a href="#" className="py-2 border-b-2 border-blue-500 dark:text-gray-200">Article</a>
          <a href="#" className="py-2 text-blue-600 dark:text-blue-400">Talk</a>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-1 flex justify-end space-x-6 text-sm text-blue-600 dark:text-blue-400">
          <a href="#">Read</a>
          <a href="#">View source</a>
          <a href="#">View history</a>
        </div>
      </div>
    </nav>
  );
}