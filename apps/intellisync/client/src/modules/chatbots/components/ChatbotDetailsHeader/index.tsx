import { Dot } from 'tailwind-ui';

type ChatbotDetailsHeaderProps = {
  name: string;
};

export function ChatbotDetailsHeader({ name }: ChatbotDetailsHeaderProps) {
  return (
    <header className="flex flex-col items-start justify-between gap-x-8 gap-y-4 dark:bg-grayScheme-700/10 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
      <div>
        <div className="flex items-center gap-x-3">
          <Dot color="green" />
          <h1 className="font-semibold text-grayScheme-900 dark:text-white text-base leading-7">
            {name}
          </h1>
        </div>
      </div>
    </header>
  );
}
