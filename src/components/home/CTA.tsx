import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CTA() {
  return (
    <div id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            İşletmenizi Dijital Dünyada Büyütmeye Hazır Mısınız?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Ücretsiz danışmanlık hizmetimizle işletmeniz için en uygun dijital çözümleri belirleyelim.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/iletisim"
              className="rounded-md bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200"
            >
              Hemen Başlayın
              <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5 inline-block" />
            </Link>
            <Link
              href="/hizmetler"
              className="text-base font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors duration-200"
            >
              Detaylı Bilgi <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 