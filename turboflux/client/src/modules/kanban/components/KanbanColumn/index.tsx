import { Flex, Text } from 'milky-ui';

import { KanbanCard } from '../KanbanCard';

type KanbanColumnProps = {
  title: string;
};

export const KanbanColumn = ({ title }: KanbanColumnProps) => {
  const cardTitle = 'anyTitle';

  return (
    <Flex fullWidth direction="column" gap={4}>
      <Text>{title}</Text>

      <Flex direction="column" gap={4}>
        <KanbanCard title={cardTitle} />
        <KanbanCard title={cardTitle} />
        <KanbanCard title={cardTitle} />
        <KanbanCard title={cardTitle} />
        <KanbanCard title={cardTitle} />
      </Flex>
    </Flex>
  );
};
