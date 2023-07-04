import { Dot } from 'tailwind-ui';

type ChatbotDetailsHeaderProps = {
  name: string | undefined;
};

export function ChatbotDetailsHeader({ name }: ChatbotDetailsHeaderProps) {
  const isLoading = !name;

  return (
    <header className="flex flex-col gap-x-8 gap-y-4 dark:bg-grayScheme-700/10 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
      <div>
        {isLoading ? (
          <div className="py-2">
            <div className="animate-pulse h-2 sm:w-40 dark:bg-grayScheme-700 rounded"></div>
          </div>
        ) : (
          <div className="flex items-center gap-x-3">
            <Dot color="green" />
            <h1 className="font-semibold text-grayScheme-900 dark:text-white text-base leading-7">
              {name}
            </h1>
          </div>
        )}
      </div>
    </header>
  );
}
