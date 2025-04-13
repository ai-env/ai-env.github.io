'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Hero() {
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

          {/* Image */}
          <div className="relative w-full max-w-xl lg:max-w-2xl">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-900/5 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl" />
              <Image
                src="/images/hero.webp"
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
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 