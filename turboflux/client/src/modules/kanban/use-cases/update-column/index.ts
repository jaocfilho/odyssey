import { KanbanColumn, updateKanbanColumn } from '../../entities/kanban-column';

type NewColumnProps = Omit<Partial<KanbanColumn>, 'id'>;
type UpdateColumnUseCaseParams = {
  column: KanbanColumn;
  newColumnProps: NewColumnProps;
};

export const updateColumnUseCase = ({
  column,
  newColumnProps,
}: UpdateColumnUseCaseParams): KanbanColumn => {
  return updateKanbanColumn({ column, newColumnProps });
};
