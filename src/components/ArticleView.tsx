import React, { useState } from 'react';
import { Clock, CheckCircle, AlertCircle, Video } from 'lucide-react';

export default function ArticleView() {
  const [selectedVersion, setSelectedVersion] = useState('current');
  
  const versions = [
    { id: 'current', date: '2024-03-15' },
    { id: 'v2', date: '2024-02-01' },
    { id: 'v1', date: '2024-01-15' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold">Artificial Intelligence</h1>
          <CheckCircle className="h-6 w-6 text-green-500" />
        </div>
        
        <select
          value={selectedVersion}
          onChange={(e) => setSelectedVersion(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          {versions.map((version) => (
            <option key={version.id} value={version.id}>
              {version.date}
            </option>
          ))}
        </select>
      </div>

      <div className="prose max-w-none">
        <p className="text-lg">
          Artificial intelligence (AI) is intelligence demonstrated by machines...
        </p>
        
        <div className="my-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="flex items-center text-blue-800">
            <Video className="h-5 w-5 mr-2" />
            Related Videos
          </h3>
          <ul className="mt-2 space-y-2">
            <li className="text-blue-600 hover:underline cursor-pointer">
              Understanding AI: A Beginner's Guide
            </li>
            <li className="text-blue-600 hover:underline cursor-pointer">
              The Future of AI Technology
            </li>
          </ul>
        </div>

        <div className="my-6 p-4 bg-yellow-50 rounded-lg flex items-start">
          <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 mt-1" />
          <p className="text-sm text-yellow-800">
            This article was last verified by expert reviewers on March 15, 2024.
            Content is subject to ongoing verification.
          </p>
        </div>
      </div>
    </div>
  );
}