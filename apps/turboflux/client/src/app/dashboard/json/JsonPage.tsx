'use client';

import { Flex, JsonView } from 'milky-ui';
import { useKanbanReducer } from '../../../modules/kanban/hooks';

export default function JsonPage() {
  const { kanban } = useKanbanReducer();

  return (
    <Flex fullWidth>
      <JsonView value={kanban} />
    </Flex>
  );
}
