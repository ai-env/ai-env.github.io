'use client';

import { ArrowLeftIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { SERVICES } from '@/utils/constants';

const PRICING_TIERS = [
  {
    name: 'Temel',
    price: '4.400',
    description: 'Kartvizit Web Site - Tek sayfa web sitesi, işletmenizin dijitaldeki kimliğini etkili bir şekilde yansıtır.',
    features: [
      '1 Sayfa',
      'Temel Tasarım Özelleştirme',
      'İçerik Girişi',
      'Responsive Tasarım',
      'Kaynak Kodları',
      '2 Revizyon Hakkı',
      '3 Gün Teslim Süresi',
      'Hızlı Teslim: 1 gün (+2000 TL)',
    ],
  },
  {
    name: 'Standart',
    price: '8.400',
    description: 'Kartvizit Web Sitesi - Temel pakete ekstra Hosting ve domain entegrasyonu (Domain Ücreti hariçtir.)',
    features: [
      '5 Sayfa',
      'Gelişmiş Tasarım Özelleştirme',
      'İçerik Girişi',
      'Responsive Tasarım',
      'Kaynak Kodları',
      '4 Revizyon Hakkı',
      '6 Gün Teslim Süresi',
      'Hızlı Teslim: 2 gün (+2400 TL)',
      'Hosting ve Domain Entegrasyonu',
    ],
  },
  {
    name: 'Pro',
    price: '28.000',
    description: 'Özel Web Sitesi - Özel ihtiyaçlar ve tasarımlar için tamamen özelleştirilmiş bir çözüm.',
    features: [
      '20 Sayfa',
      'Tam Özelleştirilebilir Tasarım',
      'İçerik Girişi',
      'Responsive Tasarım',
      'Kaynak Kodları',
      '10 Revizyon Hakkı',
      '12 Gün Teslim Süresi',
      'Hızlı Teslim: 4 gün (+6500 TL)',
      'Özel İhtiyaçlara Göre Geliştirme',
    ],
  },
];

const COMPARISON_TABLE = [
  { feature: 'Sayfa Sayısı', basic: '1', standard: '5', pro: '20' },
  { feature: 'Tasarım Özelleştirme', basic: 'Temel', standard: 'Gelişmiş', pro: 'Tam Özelleştirilebilir' },
  { feature: 'İçerik Girişi', basic: '✓', standard: '✓', pro: '✓' },
  { feature: 'Responsive Tasarım', basic: '✓', standard: '✓', pro: '✓' },
  { feature: 'Kaynak Kodları', basic: '✓', standard: '✓', pro: '✓' },
  { feature: 'Revizyon Hakkı', basic: '2', standard: '4', pro: '10' },
  { feature: 'Normal Teslim Süresi', basic: '3 gün', standard: '6 gün', pro: '12 gün' },
  { feature: 'Hızlı Teslim Seçeneği', basic: '1 gün (+2000 TL)', standard: '2 gün (+2400 TL)', pro: '4 gün (+6500 TL)' },
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
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Paketleri Karşılaştırın
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            Hangi paketi seçeceğine karar veremiyorsan freelancer'a hemen danışabilirsin.
          </p>

          {/* Pricing Cards */}
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {PRICING_TIERS.map((tier, index) => (
              <div
                key={tier.name}
                className={`bg-white rounded-2xl shadow-xl p-8 ${
                  index === 2 ? 'ring-2 ring-blue-500 transform lg:-translate-y-4' : ''
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
                    index === 2
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  } transition-colors duration-200`}
                >
                  Hemen Başlayın
                </Link>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mt-20 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Özellikler
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Temel
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Standart
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {COMPARISON_TABLE.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      {row.basic}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      {row.standard}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      {row.pro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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