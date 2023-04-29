import { Row, RowProps } from '../Row';

type BodyProps = {
  rows: RowProps[];
};

export function Body({ rows }: BodyProps) {
  return (
    <tbody className="divide-y divide-gray-200 bg-white dark:divide-zinc-50/10 dark:bg-zinc-950">
      {rows.map(({ id, name, vibe, context }) => (
        <Row key={id} id={id} name={name} vibe={vibe} context={context} />
      ))}
    </tbody>
  );
}
