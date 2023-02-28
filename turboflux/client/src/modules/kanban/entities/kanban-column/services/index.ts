import produce from 'immer';

import { KanbanCard } from '../../kanban-card';
import { KanbanColumn, KanbanColumnInput, kanbanColumnSchema } from '../entity';

type CreateKanbanColumnParams = {
  columnProps: KanbanColumnInput;
};

export const createKanbanColumn = ({
  columnProps,
}: CreateKanbanColumnParams) => {
  const kanbanColumn = kanbanColumnSchema.parse(columnProps);

  return kanbanColumn;
};

type AddCardToKanbanColumnParams = {
  column: KanbanColumn;
  card: KanbanCard;
};

export const addCardToKanbanColumn = ({
  column,
  card,
}: AddCardToKanbanColumnParams) => {
  return produce(column, (draft) => {
    draft.cards.push(card);
  });
};
