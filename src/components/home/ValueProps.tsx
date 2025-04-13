'use client';

import {
  HomeModernIcon,
  BanknotesIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  SparklesIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import { VALUE_PROPS } from '@/utils/constants';

const ICONS = {
  HomeModernIcon,
  BanknotesIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  SparklesIcon,
  AcademicCapIcon,
} as const;

export default function ValueProps() {
  return (
    <div id="about" className="bg-blue-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Neden envai?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Yerel işletmelerin dijital başarısı için özel çözümler sunuyoruz.
          </p>
        </div>
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
          <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {VALUE_PROPS.map((prop) => {
              const IconComponent = ICONS[prop.icon as keyof typeof ICONS];
              return (
                <div key={prop.title} className="relative flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <dt className="flex flex-col items-center gap-y-4">
                    <div className="rounded-lg bg-blue-100 p-3 ring-1 ring-blue-100/10">
                      <IconComponent className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">{prop.title}</h3>
                  </dt>
                  <dd className="mt-3 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{prop.description}</p>
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