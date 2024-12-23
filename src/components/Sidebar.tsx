import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-48 p-4 shrink-0">
      <h2 className="font-medium mb-2 dark:text-gray-200">Contents</h2>
      <div className="border rounded bg-white dark:bg-gray-800 dark:border-gray-700">
        <select className="w-full p-2 border-b dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 text-sm">
          <option>English</option>
        </select>
        <div className="p-2 text-sm text-gray-500 dark:text-gray-400">276 languages</div>
      </div>
    </aside>
  );
}