import { Flex } from 'milky-ui';

import { KanbanCard, KanbanCardProps } from '../KanbanCard';

export type KanbanCardsProps = {
  cards: KanbanCardProps[];
};

export const KanbanCards = ({ cards }: KanbanCardsProps) => {
  // TODO change list keys

  return (
    <Flex direction="column" gap={4}>
      {cards.map((cardProps, index) => (
        <KanbanCard key={index} {...cardProps} />
      ))}
    </Flex>
  );
};
