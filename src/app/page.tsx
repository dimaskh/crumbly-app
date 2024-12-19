import Hero from '@/components/Hero';
import FeaturedDesserts from '@/components/FeaturedDesserts';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedDesserts />
      <About />
      <Contact />
    </main>
  );
}
