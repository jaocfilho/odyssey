type HeaderProps = {
  header: string;
};

export function Header({ header }: HeaderProps) {
  return (
    <div className="flex w-full items-center px-2 h-12 border-b dark:border-zinc-50/10">
      <p className="text-lg font-semibold dark:text-zinc-200 leading-6 pl-3">
        {header}
      </p>
    </div>
  );
}
