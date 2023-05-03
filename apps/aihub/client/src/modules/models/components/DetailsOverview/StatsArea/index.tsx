import { classNames } from '@/modules/theme/utils';

const stats = [
  { name: 'Number of requests', value: '405' },
  { name: 'Average tokens per request', value: '1024', unit: 'tokens' },
  { name: 'Average cost per request', value: '0.02', unit: 'USD' },
  { name: 'Positive feedbacks rate', value: '98.5%' },
];

export function StatsArea() {
  return (
    <div className="grid grid-cols-1 dark:bg-zinc-900 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, statIdx) => (
        <div
          key={stat.name}
          className={classNames(
            statIdx % 2 === 1
              ? 'sm:border-l'
              : statIdx === 2
              ? 'lg:border-l'
              : '',
            'border-t dark:border-zinc-50/10 py-6 px-4 sm:px-6 lg:px-8'
          )}
        >
          <p className="text-sm font-medium leading-6 dark:text-zinc-400">
            {stat.name}
          </p>
          <p className="mt-2 flex items-baseline gap-x-2">
            <span className="text-4xl font-semibold tracking-tight dark:text-zinc-200">
              {stat.value}
            </span>
            {stat.unit ? (
              <span className="text-sm dark:text-zinc-400">{stat.unit}</span>
            ) : null}
          </p>
        </div>
      ))}
    </div>
  );
}
