import { NewCardProps } from '../../../entities/kanban-card';
import { getColumnUseCase } from '../../../use-cases';
import { updateCardFromColumnUseCase } from '../../../use-cases';
import { KanbanState } from '../../reducer';

export type UpdateCardPayload = {
  columnId: string;
  cardId: string;
  newCardProps: NewCardProps;
};

export const updateCard = (
  state: KanbanState,
  { cardId, columnId, newCardProps }: UpdateCardPayload
) => {
  const query = getColumnUseCase({ board: state.board, columnId });

  if (!query) return;

  const { column, index } = query;
  const updatedColumn = updateCardFromColumnUseCase({
    column,
    cardId,
    newCardProps,
  });

  state.board.columns[index] = updatedColumn;
};
