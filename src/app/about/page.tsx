'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const timelineEvents = [
  {
    year: '2018',
    title: 'Where It All Began',
    description: 'Started as a small home kitchen blog, sharing family recipes and baking adventures.',
    image: '/images/about/beginning.jpg',
    stats: { recipes: '10', followers: '100' }
  },
  {
    year: '2019',
    title: 'Growing Community',
    description: 'Our community grew as more home bakers discovered our detailed recipes and helpful tips.',
    image: '/images/about/community.jpg',
    stats: { recipes: '50', followers: '5K' }
  },
  {
    year: '2020',
    title: 'Virtual Baking Classes',
    description: 'Launched online baking workshops during lockdown, connecting bakers worldwide.',
    image: '/images/about/virtual-class.jpg',
    stats: { recipes: '150', followers: '25K' }
  },
  {
    year: '2021',
    title: 'Recipe Testing Lab',
    description: 'Established our dedicated recipe testing kitchen to ensure perfect results every time.',
    image: '/images/about/testing-lab.jpg',
    stats: { recipes: '300', followers: '100K' }
  },
  {
    year: '2022',
    title: 'Going Global',
    description: 'Expanded our recipe collection to include international desserts and techniques.',
    image: '/images/about/global.jpg',
    stats: { recipes: '500', followers: '250K' }
  },
  {
    year: '2023',
    title: 'Sweet Success',
    description: 'Celebrating our growing community and launching exciting new features.',
    image: '/images/about/celebration.jpg',
    stats: { recipes: '1000+', followers: '500K+' }
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/about/hero-about.jpg"
          alt="Sweetest Menu Journey"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-serif mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Sweet Journey
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            From a small kitchen to a global community of dessert lovers
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-24">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                className="relative grid md:grid-cols-2 gap-8 items-center pt-12 md:pt-16"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{
                  initial: { opacity: 0, y: 50 },
                  animate: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.8 }}
              >
                {/* Timeline Line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#0abab5] -translate-x-1/2" />

                {/* Year Marker */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-16 h-16 rounded-full bg-[#0abab5] text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    {event.year}
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                  <h3 className="text-3xl font-serif text-gray-800 mb-4">{event.title}</h3>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <div className={`flex gap-8 text-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div>
                      <div className="text-2xl font-bold text-[#0abab5]">{event.stats.recipes}</div>
                      <div className="text-sm text-gray-600">Recipes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#0abab5]">{event.stats.followers}</div>
                      <div className="text-sm text-gray-600">Followers</div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative aspect-video rounded-lg overflow-hidden shadow-xl ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif text-gray-800 mb-6">Our Mission</h2>
            <div className="w-16 h-1 bg-[#0abab5] mx-auto mb-8" />
            <p className="text-xl text-gray-600 leading-relaxed">
              To inspire and empower home bakers worldwide with tested recipes,
              detailed instructions, and a supportive community. We believe that
              everyone can create beautiful and delicious desserts with the right
              guidance and passion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 px-4 bg-[#0abab5] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif mb-6">Join Our Sweet Community</h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of our story and start creating your own sweet memories
            </p>
            <Link
              href="/recipes"
              className="inline-block bg-white text-[#0abab5] px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Start Baking Today
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
