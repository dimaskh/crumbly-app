'use client';

import { Suspense, useState, useEffect } from 'react';
import DessertGrid from '@/components/DessertGrid';
import { getAllDesserts } from '@/services/dessertService';
import { Dessert } from '@/data/types';

const categories = [
  'All',
  'Cakes',
  'Pies',
  'Cookies',
  'Pastries',
  'Custards',
  'Chocolates',
  'Brownies',
  'Cheesecakes'
];

function FilteredDessertsGrid({ desserts, activeCategory }: { desserts: Dessert[], activeCategory: string }) {
  const filteredDesserts = activeCategory === 'All'
    ? desserts
    : desserts.filter(dessert => dessert.category === activeCategory);

  return <DessertGrid desserts={filteredDesserts} />;
}

export default function RecipesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [desserts, setDesserts] = useState<Dessert[]>([]);

  // Fetch desserts on component mount
  useEffect(() => {
    getAllDesserts().then(setDesserts);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif text-gray-800 mb-4">
              All Recipes
            </h1>
            <div className="w-16 h-1 bg-gray-800 mx-auto mb-8" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our complete collection of delicious dessert recipes, from classic
              cakes to creative confections
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full border-2 transition-colors ${
                    category === activeCategory
                      ? 'border-[#0abab5] bg-[#0abab5] text-white'
                      : 'border-[#0abab5] text-[#0abab5] hover:bg-[#81D8D0] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid with loading state */}
          <Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="animate-pulse"
                  >
                    <div className="rounded-lg bg-gray-200 h-[300px] mb-4" />
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-1/4" />
                  </div>
                ))}
              </div>
            }
          >
            <FilteredDessertsGrid desserts={desserts} activeCategory={activeCategory} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
