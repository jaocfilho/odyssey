import { classNames } from 'tailwind-ui';
import { Stat } from './Stat';

const stats = [
  { name: 'Number of requests', value: 405 },
  { name: 'Average tokens per request', value: 1024, unit: 'tokens' },
  { name: 'Average cost per request', value: 0.02, unit: 'USD' },
  { name: 'Positive feedbacks rate', value: 98.5, unit: '%' },
];

export function StatsArea() {
  return (
    <div className="grid grid-cols-1 dark:bg-zinc-900 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(({ name, value, unit }, index) => (
        <Stat key={name} name={name} value={value} unit={unit} index={index} />
      ))}
    </div>
  );
}
