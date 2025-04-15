'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_IMAGES = [
  '/images/hero.webp',
  '/images/hero_2.webp',
  '/images/hero_3.webp',
];

const TRANSITION_INTERVAL = 5000; // 5 seconds between transitions

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === HERO_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, TRANSITION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 800 800"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 60L60 0M0 30L30 0M30 60L60 30"
                stroke="currentColor"
                strokeWidth="1"
                strokeOpacity="0.1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-x-16 gap-y-12">
          {/* Text Content */}
          <div className="max-w-xl lg:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Dijital Dünyada İşletmenizi{' '}
              <span className="text-blue-600">Büyütün</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Google İşletme Profili, web sitesi, sosyal medya yönetimi ve dijital reklam çözümleriyle
              işletmenizi dijital dünyada öne çıkarın.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/iletisim"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200"
              >
                Ücretsiz Danışmanlık
                <ArrowRightIcon className="ml-2 -mr-1 h-4 w-4 inline-block" />
              </Link>
              <Link
                href="/hizmetler"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors duration-200"
              >
                Hizmetlerimiz <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative w-full max-w-xl lg:max-w-2xl">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-900/5 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    opacity: { duration: 0.8, ease: "easeInOut" },
                    scale: { duration: 1, ease: "easeOut" }
                  }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={HERO_IMAGES[currentImageIndex]}
                    alt="Digital business growth illustration"
                    fill
                    priority
                    className="object-cover object-center rounded-xl"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 640px, 768px"
                    quality={90}
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                    }}
                  />
                </motion.div>
              </AnimatePresence>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent pointer-events-none" />
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {HERO_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      index === currentImageIndex 
                        ? 'bg-white w-6' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 