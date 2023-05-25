type PersonasCountProps = {
  personasCount: number;
};

export function PersonasCount({ personasCount }: PersonasCountProps) {
  return (
    <p className="pl-3 text-sm font-semibold leading-6 dark:text-zinc-500">
      Personas ({personasCount})
    </p>
  );
}
