'use client';

import {
  HomeModernIcon,
  BanknotesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { VALUE_PROPS } from '@/utils/constants';

const ICONS = {
  HomeModernIcon,
  BanknotesIcon,
  UserGroupIcon,
} as const;

export default function ValueProps() {
  return (
    <div className="bg-blue-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Neden envai?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Yerel işletmelerin dijital başarısı için özel çözümler sunuyoruz.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {VALUE_PROPS.map((prop) => {
              const IconComponent = ICONS[prop.icon as keyof typeof ICONS];
              return (
                <div key={prop.title} className="flex flex-col items-center text-center">
                  <dt className="flex flex-col items-center gap-y-4">
                    <div className="rounded-lg bg-blue-100 p-3">
                      <IconComponent className="h-8 w-8 text-blue-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold leading-7 text-gray-900">{prop.title}</h3>
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
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