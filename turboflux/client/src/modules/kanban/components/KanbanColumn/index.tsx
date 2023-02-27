import { Flex, Text } from 'milky-ui';

import { KanbanCards } from '../KanbanCards';

type KanbanColumnProps = {
  title: string;
};

export const KanbanColumn = ({ title }: KanbanColumnProps) => {
  const cardTitle = 'anyTitle';
  const cards = [{ title: cardTitle }];

  return (
    <Flex direction="column" gap={4}>
      <Text>{title}</Text>

      <KanbanCards cards={cards} />
    </Flex>
  );
};
