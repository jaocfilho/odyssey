import { Dot, classNames, Badge } from 'tailwind-ui';
import { ChatbotsListHeader } from './ChatbotsListHeader';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const deployments = [
  {
    id: 1,
    href: '#',
    projectName: 'ios-app',
    teamName: 'Planetaria',
    status: 'offline',
    statusText: 'Initiated 1m 32s ago',
    description: 'Deploys from GitHub',
    environment: 'Preview',
  },
  {
    id: 1,
    href: '#',
    projectName: 'ios-app',
    teamName: 'Planetaria',
    status: 'offline',
    statusText: 'Initiated 1m 32s ago',
    description: 'Deploys from GitHub',
    environment: 'Preview',
  },
  {
    id: 1,
    href: '#',
    projectName: 'ios-app',
    teamName: 'Planetaria',
    status: 'offline',
    statusText: 'Initiated 1m 32s ago',
    description: 'Deploys from GitHub',
    environment: 'Preview',
  },
];

const environments = {
  Preview: 'text-gray-400 bg-gray-400/10 ring-gray-400/20',
  Production: 'text-indigo-400 bg-indigo-400/10 ring-indigo-400/30',
};

export function ChatbotsList() {
  return (
    <div>
      <ChatbotsListHeader />
      <ul role="list" className="divide-y divide-white/5">
        {deployments.map((deployment) => (
          <li
            key={deployment.id}
            className="relative flex items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8"
          >
            <div className="min-w-0 flex-auto">
              <div className="flex items-center gap-x-3">
                <Dot />
                <h2 className="min-w-0 text-sm font-semibold leading-6 text-white">
                  <span className="whitespace-nowrap">
                    {deployment.projectName}
                  </span>
                  <span className="absolute inset-0" />
                </h2>
              </div>
              <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
                <p className="truncate">{deployment.description}</p>
                <svg
                  viewBox="0 0 2 2"
                  className="h-0.5 w-0.5 flex-none fill-gray-300"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <p className="whitespace-nowrap">{deployment.statusText}</p>
              </div>
            </div>
            <Badge colorScheme="pink">{deployment.environment}</Badge>
            <ChevronRightIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}