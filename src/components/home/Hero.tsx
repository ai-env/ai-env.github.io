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

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
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

        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="relative rounded-xl shadow-2xl overflow-hidden">
              <Image
                src="/images/hero.webp"
                alt="Digital business growth illustration"
                width={1920}
                height={1080}
                priority
                className="w-[36rem] rounded-xl bg-gray-900/5 object-cover"
                sizes="(min-width: 1024px) 36rem, (min-width: 640px) 100vw, 100vw"
                style={{
                  height: 'auto',
                  maxHeight: '26rem',
                }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 