"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/images/about/baking-1.jpg",
    alt: "Kneading fresh dough with flour dusted hands",
  },
  {
    src: "/images/about/baking-2.jpg",
    alt: "Rolling out pie crust on a marble surface",
  },
  {
    src: "/images/about/baking-3.jpg",
    alt: "Piping delicate cream decorations",
  },
  {
    src: "/images/about/baking-4.jpg",
    alt: "Mixing ingredients in a vintage bowl",
  },
  {
    src: "/images/about/baking-5.jpg",
    alt: "Adding final decorative touches to a cake",
  },
];

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [isTransitioning]);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-800 mb-4">
            About Crumbly
          </h2>
          <div className="w-16 h-1 bg-gray-800 mx-auto mb-8" />
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Welcome to Crumbly! Here you'll find a delicious collection of tried
            and tested recipes. From classic cookies to creative confections,
            every recipe is thoroughly tested to ensure your baking success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <AnimatePresence
              mode="wait"
              onExitComplete={() => setIsTransitioning(false)}
            >
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full cursor-pointer"
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentImageIndex((prev) => (prev + 1) % images.length);
                  }
                }}
                role="button"
                aria-label="View next image"
              >
                <Image
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  priority={currentImageIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div>
            <h3 className="text-2xl font-serif text-gray-800 mb-4">
              Our Story
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              What began as a passion for creating the perfect crumbly texture
              has evolved into a trusted recipe resource loved by bakers
              worldwide. Each recipe comes with detailed instructions, tips, and
              tricks to help you create amazing treats in your own kitchen.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-6 h-6 text-[#0abab5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-600">Perfectly crumbly recipes</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-6 h-6 text-[#0abab5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-600">Step-by-step instructions</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-6 h-6 text-[#0abab5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-600">Tips for success</span>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/about"
                className="bg-[#0abab5] text-white px-8 h-12 rounded-full text-lg font-semibold hover:bg-[#81D8D0] transition-colors text-center inline-flex items-center justify-center"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
