import { useReducer } from 'react';

import { kanbanInitialState } from '../../state';
import { reducer } from './reducer';

export const useKanbanReducer = () => {
  const [kanban, dispatch] = useReducer(reducer, kanbanInitialState);

  return { kanban, dispatch };
};
