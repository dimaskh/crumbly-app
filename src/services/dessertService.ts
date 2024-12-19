import { Dessert } from '@/data/types';
import { recipes } from '@/data/recipes';

async function fetchWithRetry(url: string, options: RequestInit, retries = 3): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        return response;
      }
    } catch (error) {
      if (i === retries - 1) throw error;
    }
    // Wait before retrying (exponential backoff)
    await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
  }
  throw new Error('Failed to fetch after multiple retries');
}

export async function getFeaturedDesserts(): Promise<Dessert[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Return first 6 recipes for featured section
  return recipes.slice(0, 6);
}

export async function getAllDesserts(): Promise<Dessert[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return recipes;
}

export async function getDessertBySlug(slug: string): Promise<Dessert | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return recipes.find(recipe => recipe.slug === slug) || null;
}
