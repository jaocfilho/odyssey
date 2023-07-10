import {
  CloudArrowUpIcon,
  PencilSquareIcon,
  ShareIcon,
} from '@heroicons/react/20/solid';

type Feature = {
  name: string;
  description: string;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
};

type FeatureCardProps = {
  feature: Feature;
};

function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div key={feature.name} className="flex flex-col">
      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
        <feature.icon
          className="h-5 w-5 flex-none text-indigo-400"
          aria-hidden="true"
        />
        {feature.name}
      </dt>
      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
        <p className="flex-auto">{feature.description}</p>
      </dd>
    </div>
  );
}

const features = [
  {
    name: 'Connect your data',
    description:
      'Transform your chatbots into intelligent virtual assistants. Easily add rich media, documents, and datasets to enhance their knowledge base and deliver insightful interactions.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Customize your models',
    description:
      'Tailor every aspect, including tone, style, personality, responses, language understanding, and conversational flow, to create highly engaging and human-like interactions.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Use it anywhere',
    description:
      'Effortlessly connect and interact with your chatbot across platforms from any location, leveraging our versatile API integration.',
    icon: ShareIcon,
  },
];

export function Features() {
  return (
    <div id="features" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Supercharge your knowledge
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Create powerful AI knowledge bases
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard feature={feature} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
