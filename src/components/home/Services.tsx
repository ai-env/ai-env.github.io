'use client';

import {
  MapPinIcon,
  GlobeAltIcon,
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import { SERVICES } from '@/utils/constants';

const ICONS = {
  MapPinIcon,
  GlobeAltIcon,
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
} as const;

export default function Services() {
  return (
    <div id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Dijital Çözümlerimiz
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            İşletmenizin dijital varlığını güçlendirmek için ihtiyacınız olan tüm hizmetler.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {SERVICES.map((service) => {
              const IconComponent = ICONS[service.icon as keyof typeof ICONS];
              return (
                <div key={service.id} className="flex flex-col bg-white rounded-xl p-6 hover:bg-gray-50 transition-colors duration-200">
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                    <IconComponent className="h-7 w-7 flex-none text-blue-600" aria-hidden="true" />
                    {service.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="h-4 w-4 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
} 