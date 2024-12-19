export type DessertCategory =
  | 'Cakes'
  | 'Pies'
  | 'Cookies'
  | 'Pastries'
  | 'Custards'
  | 'Chocolates'
  | 'Brownies'
  | 'Cheesecakes'
  | 'Cupcakes'
  | 'Muffins'
  | 'Tarts';

export interface Dessert {
  id: number;
  title: string;
  category: DessertCategory;
  imageUrl: string;
  altText: string;
  description?: string;
  prepTime?: string;
  cookTime?: string;
  servings?: number;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  ingredients?: string[];
  instructions?: string[];
  tips?: string[];
  slug?: string;
}
