import { KanbanCard, KanbanCardProps } from '../KanbanCard';

export type KanbanCardsProps = {
  cards: KanbanCardProps[];
};

export const KanbanCards = ({ cards }: KanbanCardsProps) => {
  return (
    <div className="flex flex-col gap-2 p-2 dark:bg-zinc-800">
      {cards.map(({ title }) => (
        <KanbanCard key={title} title={title} />
      ))}
    </div>
  );
};
