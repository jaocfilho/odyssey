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

type NewColumnProps = Omit<Partial<KanbanColumn>, 'id'>;
type UpdateKanbanColumnParams = {
  column: KanbanColumn;
  newColumnProps: NewColumnProps;
};

export const updateKanbanColumn = ({
  column,
  newColumnProps,
}: UpdateKanbanColumnParams): KanbanColumn => {
  return { ...column, ...newColumnProps };
};

type AddCardParams = {
  column: KanbanColumn;
  card: KanbanCard;
};

export const addCard = ({ column, card }: AddCardParams) => {
  return produce(column, (draft) => {
    draft.cards.push(card);
  });
};

type RemoveCardByIdParams = {
  column: KanbanColumn;
  cardId: string;
};

export const removeCardById = ({ column, cardId }: RemoveCardByIdParams) => {
  return produce(column, (draft) => {
    const index = draft.cards.findIndex((todo) => todo.id === cardId);
    if (index !== -1) draft.cards.splice(index, 1);
  });
};
