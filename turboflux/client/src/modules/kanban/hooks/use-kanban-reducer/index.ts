import { useCallback, useReducer } from 'react';

import { kanbanInitialState } from '../../state';
import { reducer } from './reducer';

export const useKanbanReducer = () => {
  const [kanban, dispatch] = useReducer(reducer, kanbanInitialState);

  // const addCard = useCallback(() => {
  //   dispatch({ type: 'ADD_CARD' })
  // }, [dispatch])

  return { kanban, dispatch };
};
