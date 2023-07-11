'use client';

import { useState } from 'react';

import { RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';

import { classNames } from 'tailwind-ui';
import { Button } from '@/components/Button';

type PlanTypes = 'monthly' | 'annually';

type Frequency = {
  value: PlanTypes;
  label: string;
  priceSuffix: string;
};

const frequencies: Frequency[] = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
];

type Tier = {
  name: string;
  id: string;
  href: string;
  price: { monthly: string; annually: string };
  features: string[];
  mostPopular: boolean;
};

type TierCardProps = {
  tier: Tier;
  frequency: Frequency;
};

function TierCard({ tier, frequency }: TierCardProps) {
  return (
    <div
      key={tier.id}
      className={classNames(
        tier.mostPopular
          ? 'bg-white/5 ring-2 ring-indigo-500'
          : 'ring-1 ring-white/10',
        'rounded-3xl p-8 xl:p-10'
      )}
    >
      <div className="flex items-center justify-between gap-x-4">
        <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
          {tier.name}
        </h3>
        {tier.mostPopular ? (
          <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
            Most popular
          </p>
        ) : null}
      </div>
      <p className="mt-6 flex items-baseline gap-x-1">
        <span className="text-4xl font-bold tracking-tight text-white">
          {tier.price[frequency.value]}
        </span>
        <span className="text-sm font-semibold leading-6 text-gray-300">
          {frequency.priceSuffix}
        </span>
      </p>
      <Button
        className="mt-6 w-full"
        size="xl"
        colorScheme={tier.mostPopular ? 'indigo' : 'gray'}
        disabled
      >
        Buy plan
      </Button>

      <ul
        role="list"
        className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
      >
        {tier.features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <CheckIcon
              className="h-6 w-5 flex-none text-white"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

const tiers: Tier[] = [
  {
    name: 'Basic',
    id: 'basic',
    href: '#',
    price: { monthly: '$14', annually: '$140' },
    features: [
      '10 chatbots',
      '1,000 message credits per month',
      '3,000,000 storage tokens per month',
      'Upload multiple files',
      'API access',
    ],
    mostPopular: false,
  },
  {
    name: 'Standard',
    id: 'standard',
    href: '#',
    price: { monthly: '$49', annually: '$490' },
    features: [
      '50 chatbots',
      '4,000 message credits per month',
      '10,000,000 storage tokens per month',
      'GPT 4',
      'Upload multiple files',
      'API access',
    ],
    mostPopular: true,
  },
  {
    name: 'Pro',
    id: 'pro',
    href: '#',
    price: { monthly: '$99', annually: '$990' },
    features: [
      'Unlimited chatbots',
      '10,000 message credits per month',
      '40,000,000 storage tokens per month',
      'GPT 4',
      'Upload multiple files',
      'API access',
    ],
    mostPopular: false,
  },
];

export function Pricing() {
  const [frequency, setFrequency] = useState<Frequency>(frequencies[0]);

  return (
    <div id="pricing" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Flexible plans for everyone
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Get 2 months for free by subscribing yearly!
        </p>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
          >
            <RadioGroup.Label className="sr-only">
              Payment frequency
            </RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked ? 'bg-indigo-500' : '',
                    'cursor-pointer rounded-full px-2.5 py-1'
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} frequency={frequency} />
          ))}
        </div>
      </div>
    </div>
  );
}
