import { Container } from './Container';

type StatProps = {
  name: string;
  value: number;
  index: number;
  unit?: string;
};

export function Stat({ name, value, index, unit }: StatProps) {
  return (
    <Container index={index}>
      <p className="text-sm font-medium leading-6 dark:text-zinc-400">{name}</p>
      <p className="mt-2 flex items-baseline gap-x-2">
        <span className="text-4xl font-semibold tracking-tight dark:text-zinc-200">
          {value}
        </span>
        {unit ? (
          <span className="text-sm dark:text-zinc-400">{unit}</span>
        ) : null}
      </p>
    </Container>
  );
}
