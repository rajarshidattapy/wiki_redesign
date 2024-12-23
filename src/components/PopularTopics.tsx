import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function PopularTopics() {
  const topics = [
    {
      title: "AI Revolution 2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      views: "2.1M"
    },
    {
      title: "Space Exploration",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2",
      views: "1.8M"
    },
    {
      title: "Climate Change",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce",
      views: "1.5M"
    }
  ];

  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-6">
          <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Trending Topics</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div key={topic.title} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={topic.image}
                alt={topic.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{topic.title}</h3>
                <p className="text-sm text-gray-600">{topic.views} views today</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}