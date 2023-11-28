import { useCallback, useReducer } from 'react';

import {
  AddCardPayload,
  AddColumnPayload,
  ChangeCardOrderPayload,
  ChangeColumnOrderPayload,
  kanbanInitialState,
  RemoveCardPayload,
  RemoveColumnPayload,
  UpdateCardPayload,
  UpdateColumnPayload,
  MoveCardPayload,
} from '../../state';
import { reducer } from './reducer';

export const useKanbanReducer = () => {
  const [kanban, dispatch] = useReducer(reducer, kanbanInitialState);

  const addCard = useCallback(
    ({ columnId, cardProps }: AddCardPayload) => {
      dispatch({ type: 'ADD_CARD', payload: { columnId, cardProps } });
    },
    [dispatch]
  );

  const addColumn = useCallback(
    ({ columnProps }: AddColumnPayload) => {
      dispatch({ type: 'ADD_COLUMN', payload: { columnProps } });
    },
    [dispatch]
  );

  const removeCard = useCallback(
    ({ cardId, column }: RemoveCardPayload) => {
      dispatch({ type: 'REMOVE_CARD', payload: { cardId, column } });
    },
    [dispatch]
  );

  const removeColumn = useCallback(
    ({ columnId }: RemoveColumnPayload) => {
      dispatch({ type: 'REMOVE_COLUMN', payload: { columnId } });
    },
    [dispatch]
  );

  const changeCardOrder = useCallback(
    ({ columnId, from, to }: ChangeCardOrderPayload) => {
      dispatch({ type: 'CHANGE_CARD_ORDER', payload: { columnId, from, to } });
    },
    [dispatch]
  );

  const changeColumnOrder = useCallback(
    ({ from, to }: ChangeColumnOrderPayload) => {
      dispatch({ type: 'CHANGE_COLUMN_ORDER', payload: { from, to } });
    },
    [dispatch]
  );

  const updateCard = useCallback(
    ({ cardId, columnId, newCardProps }: UpdateCardPayload) => {
      dispatch({
        type: 'UPDATE_CARD',
        payload: { cardId, columnId, newCardProps },
      });
    },
    [dispatch]
  );

  const updateColumn = useCallback(
    ({ columnId, newColumnProps }: UpdateColumnPayload) => {
      dispatch({
        type: 'UPDATE_COLUMN',
        payload: { columnId, newColumnProps },
      });
    },
    [dispatch]
  );

  const moveCard = useCallback(
    ({
      cardId,
      originColumnId,
      targetColumnId,
      targetIndex,
    }: MoveCardPayload) => {
      dispatch({
        type: 'MOVE_CARD',
        payload: { cardId, originColumnId, targetColumnId, targetIndex },
      });
    },
    [dispatch]
  );

  return {
    kanban,
    addCard,
    addColumn,
    removeCard,
    removeColumn,
    updateCard,
    updateColumn,
    changeCardOrder,
    changeColumnOrder,
    moveCard,
  };
};
