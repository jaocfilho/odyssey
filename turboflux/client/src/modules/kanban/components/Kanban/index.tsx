import { Flex } from 'milky-ui';

import { KanbanColumn } from '../KanbanColumn';

export const Kanban = () => {
  return (
    <Flex fullWidth gap={4}>
      <KanbanColumn title="TODO" />
      <KanbanColumn title="IN PROGRESS" />
      <KanbanColumn title="DONE" />
    </Flex>
  );
};
