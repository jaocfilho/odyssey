import { KanbanCards } from '../KanbanCards';

type KanbanColumnProps = {
  title: string;
};

export const KanbanColumn = ({ title }: KanbanColumnProps) => {
  const cardTitle = 'anyTitle';
  const cards = [{ title: cardTitle }];

  return (
    <div className="flex flex-col gap-1">
      <p>{title}</p>

      <KanbanCards cards={cards} />
    </div>
  );
};
