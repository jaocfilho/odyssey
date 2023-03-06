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

export const addCard = ({ column, card }: AddCardParams): KanbanColumn => {
  const isDuplicated = !!column.cards.find((c) => c.id === column.id);
  if (isDuplicated) return column;

  const columnToUpdate = column;
  columnToUpdate.cards.push(card);

  return columnToUpdate;
};

type RemoveCardByIdParams = {
  column: KanbanColumn;
  cardId: string;
};

export const removeCardById = ({
  column,
  cardId,
}: RemoveCardByIdParams): KanbanColumn => {
  const columnToUpdate = column;

  const index = columnToUpdate.cards.findIndex((card) => card.id === cardId);
  if (index !== -1) columnToUpdate.cards.splice(index, 1);

  return columnToUpdate;
};
