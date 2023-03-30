'use client';

import { useBooleanState } from '@satellite/react-hooks';
import { AddCardButton } from '../AddCardButton';
import { KanbanCards } from '../KanbanCards';
import { NewCard } from '../NewCard';

type KanbanColumnProps = {
  title: string;
};

export const KanbanColumn = ({ title }: KanbanColumnProps) => {
  const [isAddingCard, willNotAddCard, willAddCard] = useBooleanState();

  const cardTitle = 'anyTitle';
  const cards = [
    { title: cardTitle },
    { title: cardTitle },
    { title: cardTitle },
  ];

  return (
    <div className="flex flex-col gap-2 border-2 rounded p-1  dark:border-zinc-800 dark:text-white dark:bg-zinc-800 w-[300px]">
      <div className="flex">
        <p>{title}</p>
      </div>

      <KanbanCards cards={cards} />
      {isAddingCard ? <NewCard /> : null}
      <div className="flex gap-2 items-center">
        <AddCardButton willAddCard={willAddCard} />
        <p>Add a card</p>
      </div>
    </div>
  );
};
