'use client';

import { ArrowLeftIcon, CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { SERVICES } from '@/utils/constants';

const PRICING_TIERS = [
  {
    name: 'Başlangıç',
    price: '1.499',
    description: 'Dijital dünyaya ilk adımınız için temel paket',
    features: [
      'Google İşletme Profili Optimizasyonu',
      'Temel Web Sitesi',
      'Sosyal Medya Hesap Kurulumu',
      '1 Ay Ücretsiz Danışmanlık',
    ],
  },
  {
    name: 'Profesyonel',
    price: '2.999',
    description: 'Büyüyen işletmeler için kapsamlı çözümler',
    features: [
      'Google İşletme Profili Tam Yönetim',
      'Özel Tasarım Web Sitesi',
      '3 Sosyal Medya Platformu Yönetimi',
      'Google Ads Kampanya Yönetimi',
      '3 Ay Ücretsiz Danışmanlık',
    ],
  },
  {
    name: 'Kurumsal',
    price: 'Özel Fiyat',
    description: 'Büyük işletmeler için özelleştirilmiş çözümler',
    features: [
      'Tam Kapsamlı Dijital Varlık Yönetimi',
      'E-ticaret Web Sitesi',
      'Tüm Sosyal Medya Platformları',
      'Google & Meta Ads Yönetimi',
      'Sürekli Teknik Destek',
      'Özel Danışmanlık',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-500 transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Ana Sayfaya Dön
        </Link>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Dijital Çözümlerimiz
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            İşletmenizin ihtiyaçlarına özel, kapsamlı dijital hizmetler sunuyoruz.
          </p>
        </div>

        {/* Detailed Services */}
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                <p className="mt-4 text-lg text-gray-500">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-blue-500 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Fiyatlandırma
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {PRICING_TIERS.map((tier, index) => (
              <div
                key={tier.name}
                className={`bg-white rounded-2xl shadow-xl p-8 ${
                  index === 1 ? 'ring-2 ring-blue-500 transform lg:-translate-y-4' : ''
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8 text-3xl font-bold text-gray-900">
                  {tier.price} <span className="text-lg font-normal">TL</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span className="ml-3 text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/iletisim"
                  className={`mt-8 block w-full py-3 px-4 rounded-md text-center font-medium ${
                    index === 1
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  } transition-colors duration-200`}
                >
                  Hemen Başlayın
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Özel İhtiyaçlarınız mı Var?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Size özel çözümler için ücretsiz danışmanlık hizmetimizden faydalanın.
          </p>
          <Link
            href="/iletisim"
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Ücretsiz Danışmanlık Alın
          </Link>
        </div>
      </div>
    </div>
  );
} 