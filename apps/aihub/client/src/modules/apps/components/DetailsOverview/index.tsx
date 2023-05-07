import { Definition } from './Definition';
import { Header } from './Header';
import { StatsArea } from './StatsArea';

export function DetailsOverview() {
  return (
    <div>
      <header>
        <Header name="Cooking assistant" />
        <StatsArea />
      </header>
      <div className="border-t border-white/10 pt-11">
        <div className="px-4 lg:px-8 sm:px-6">
          <h2 className="text-base font-semibold leading-7 dark:text-zinc-200">
            Definition
          </h2>

          <Definition />
        </div>
      </div>
    </div>
  );
}
