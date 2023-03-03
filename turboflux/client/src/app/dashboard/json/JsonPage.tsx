'use client';

import { Flex, JsonView } from 'milky-ui';
import { useEffect } from 'react';

import { useListCommits } from '../../../modules/github';
import { useKanbanReducer } from '../../../modules/kanban/hooks';

export default function JsonPage() {
  const { kanban, dispatch } = useKanbanReducer();

  useEffect(() => {
    dispatch({
      type: 'CREATE_COLUMN',
      payload: {
        columnProps: {
          title: 'new column',
        },
      },
    });
  }, []);

  return (
    <Flex fullWidth>
      <JsonView value={kanban} />
    </Flex>
  );
}
