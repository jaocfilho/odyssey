import { KanbanCards } from '../KanbanCards';

type KanbanColumnProps = {
  title: string;
};

export const KanbanColumn = ({ title }: KanbanColumnProps) => {
  const cardTitle = 'anyTitle';
  const cards = [
    { title: cardTitle },
    { title: cardTitle },
    { title: cardTitle },
  ];

  return (
    <div className="flex flex-col gap-2 border-2 rounded  dark:border-zinc-800 dark:text-white">
      <p>{title}</p>

      <KanbanCards cards={cards} />
    </div>
  );
};
