'use client';

import Image from 'next/image';
import Link from 'next/link';
import DessertGrid from './DessertGrid';
import { getFeaturedDesserts } from '@/services/dessertService';
import { Suspense, useEffect, useState } from 'react';
import { Dessert } from '@/data/types';

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
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
  );
}

function FeaturedDessertsContent() {
  const [desserts, setDesserts] = useState<Dessert[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadDesserts = async () => {
      try {
        const data = await getFeaturedDesserts();
        if (mounted) {
          setDesserts(data);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to load featured desserts. Please try again later.');
          console.error('Error loading featured desserts:', err);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    loadDesserts();

    return () => {
      mounted = false;
    };
  }, []);

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 text-[#0abab5] hover:text-[#81D8D0] transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (isLoading || desserts.length === 0) {
    return <LoadingSkeleton />;
  }

  return <DessertGrid desserts={desserts} />;
}

export default function FeaturedDesserts() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-800 mb-4">
            Featured Desserts
          </h2>
          <div className="w-16 h-1 bg-gray-800 mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and beloved dessert recipes
          </p>
        </div>

        <FeaturedDessertsContent />

        <div className="text-center mt-12">
          <Link
            href="/recipes"
            className="inline-block bg-[#0abab5] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#81D8D0] transition-colors"
          >
            View All Recipes
          </Link>
        </div>
      </div>
    </section>
  );
}
