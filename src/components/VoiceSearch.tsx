import React, { useState } from 'react';
import { Mic } from 'lucide-react';

export default function VoiceSearch({ onResult }: { onResult: (text: string) => void }) {
  const [isListening, setIsListening] = useState(false);

  const startListening = async () => {
    try {
      const recognition = new (window.webkitSpeechRecognition || window.SpeechRecognition)();
      recognition.lang = 'en-US';
      
      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      
      recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        onResult(text);
      };

      recognition.start();
    } catch (error) {
      console.error('Speech recognition not supported:', error);
    }
  };

  return (
    <button
      onClick={startListening}
      className={`p-2 rounded-full transition-colors duration-200
        ${isListening 
          ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400' 
          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400'
        }`}
      aria-label="Voice search"
    >
      <Mic className="h-5 w-5" />
    </button>
  );
}