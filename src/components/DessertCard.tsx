'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Dessert } from '@/data/types';
import { useState } from 'react';

type DessertCardProps = {
  title: string;
  category: Dessert['category'];
  imageUrl: string;
  altText: string;
  description?: string;
  slug?: string;
}

export default function DessertCard({ title, category, imageUrl, altText, description, slug }: DessertCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <article className="group relative flex flex-col h-full">
      <Link
        href={`/recipes/${slug}`}
        className="flex-1 focus:outline-none focus:ring-2 focus:ring-[#0abab5] focus:ring-offset-2 rounded-lg"
      >
        <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-100 aspect-[4/3]">
          {/* Loading Spinner */}
          <div
            className={`transition-opacity duration-300 ${
              isLoading ? 'opacity-100' : 'opacity-0'
            } absolute inset-0 flex items-center justify-center bg-gray-50`}
            aria-hidden={!isLoading}
          >
            <div className="w-8 h-8 border-2 border-[#0abab5] border-t-transparent rounded-full animate-spin" />
          </div>

          {/* Image */}
          <Image
            src={imageError ? '/images/placeholder.jpg' : imageUrl}
            alt={altText}
            fill
            className={`object-cover transition-all duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            } group-hover:scale-105`}
            onLoadingComplete={() => setIsLoading(false)}
            onError={() => {
              setImageError(true);
              setIsLoading(false);
            }}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <h3 className="font-serif text-xl mb-2 group-hover:text-[#0abab5] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[#0abab5] mb-2">{category}</p>
        {description && (
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        )}
      </Link>
    </article>
  );
}
