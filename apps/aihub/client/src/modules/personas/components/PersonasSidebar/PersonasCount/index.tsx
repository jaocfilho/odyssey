type PersonasCountProps = {
  personasCount: number;
};

export function PersonasCount({ personasCount }: PersonasCountProps) {
  return (
    <p className="leading-6 dark:text-zinc-400">Personas ({personasCount})</p>
  );
}
