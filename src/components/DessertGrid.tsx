import { Dessert } from '@/data/types';
import DessertCard from './DessertCard';
import { motion } from 'framer-motion';

interface DessertGridProps {
  desserts: Dessert[]
  isLoading?: boolean
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function DessertGrid({ desserts, isLoading = false }: DessertGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="rounded-lg bg-gray-200 aspect-[4/3] mb-4" />
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/4" />
          </div>
        ))}
      </div>
    );
  }

  if (!desserts.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No desserts found.</p>
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {desserts.map((dessert) => (
        <motion.div key={dessert.id} variants={item}>
          <DessertCard
            title={dessert.title}
            category={dessert.category}
            imageUrl={dessert.imageUrl}
            altText={dessert.altText}
            description={dessert.description}
            slug={dessert.slug}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
