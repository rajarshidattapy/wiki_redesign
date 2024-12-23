import React, { useState } from 'react';
import { Search } from 'lucide-react';
import VoiceSearch from './VoiceSearch';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const handleVoiceResult = (text: string) => {
    setSearchText(text);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-2 flex justify-center">
      <div className="flex w-full max-w-xl relative">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Wikipedia"
          className="flex-1 px-4 py-2 border rounded-l dark:bg-gray-800 
            dark:border-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
        />
        <div className="flex">
          <VoiceSearch onResult={handleVoiceResult} />
          <button className="px-4 py-2 bg-gray-100 border-t border-r border-b 
            rounded-r hover:bg-gray-200 dark:bg-gray-700 dark:border-gray-700 
            dark:text-gray-200 dark:hover:bg-gray-600">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}