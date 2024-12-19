import { getDessertBySlug } from '@/services/dessertService';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { recipes } from '@/data/recipes';

export default async function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = await getDessertBySlug(params.slug);

  if (!recipe) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-serif mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-4">{recipe.description}</p>

        <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
          <Image
            src={recipe.imageUrl}
            alt={recipe.altText}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {recipe.prepTime && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900">Prep Time</h3>
              <p className="text-gray-600">{recipe.prepTime}</p>
            </div>
          )}
          {recipe.cookTime && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900">Cook Time</h3>
              <p className="text-gray-600">{recipe.cookTime}</p>
            </div>
          )}
          {recipe.servings && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900">Servings</h3>
              <p className="text-gray-600">{recipe.servings}</p>
            </div>
          )}
          {recipe.difficulty && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900">Difficulty</h3>
              <p className="text-gray-600">{recipe.difficulty}</p>
            </div>
          )}
        </div>
      </div>

      {recipe.ingredients && recipe.ingredients.length > 0 && (
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-serif mb-4">Ingredients</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </section>

          {recipe.instructions && recipe.instructions.length > 0 && (
            <section>
              <h2 className="text-2xl font-serif mb-4">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-medium mr-2">{index + 1}.</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}
        </div>
      )}

      {recipe.tips && recipe.tips.length > 0 && (
        <section className="mt-8">
          <h2 className="text-2xl font-serif mb-4">Tips</h2>
          <ul className="space-y-2">
            {recipe.tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">💡</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}
