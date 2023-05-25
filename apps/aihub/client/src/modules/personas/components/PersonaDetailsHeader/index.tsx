type PersonaDetailsHeaderProps = {
  name: string;
};

export function PersonaDetailsHeader({ name }: PersonaDetailsHeaderProps) {
  return (
    <header className="flex flex-col items-start justify-between gap-x-8 gap-y-4 dark:bg-zinc-900 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
      <div>
        <div className="flex items-center gap-x-3">
          <div className="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
            <div className="h-2 w-2 rounded-full bg-current" />
          </div>
          <h1 className="font-semibold dark:text-zinc-200 text-base leading-7">
            {name}
          </h1>
        </div>
      </div>
    </header>
  );
}
