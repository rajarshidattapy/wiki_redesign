import React from 'react';

export default function ArticleContent() {
  return (
    <article className="flex-1 p-4">
      <h1 className="text-3xl font-normal mb-4 dark:text-gray-200">Paris</h1>
      <div className="float-right ml-4 mb-4 border p-4 bg-white dark:bg-gray-800 dark:border-gray-700 w-80">
        <h2 className="text-xl mb-2 dark:text-gray-200">Paris</h2>
        <img 
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
          alt="Paris cityscape with Eiffel Tower"
          className="w-full h-48 object-cover mb-2"
        />
        <p className="text-sm text-gray-600 dark:text-gray-400">Capital city, commune, and department</p>
      </div>
      <p className="text-base leading-relaxed dark:text-gray-300">
        Paris is the capital and largest city of France. With an official estimated population 
        of 2,102,650 residents in January 2023 in an area of more than 105 km2 (41 sq mi), 
        Paris is the fourth-largest city in the European Union and the 30th most densely 
        populated city in the world in 2022. Since the 17th century, Paris has been one of 
        the world's major centres of finance, diplomacy, commerce, culture, fashion, and 
        gastronomy. For its leading role in the arts and sciences, as well as its early and 
        extensive system of street lighting, in the 19th century, it became known as the 
        City of Light.
      </p>
    </article>
  );
}