import { KanbanColumnInput, kanbanColumnSchema } from '../entity';

type CreateKanbanColumnProps = {
  columnProps: KanbanColumnInput;
};

export const createKanbanColumn = ({
  columnProps,
}: CreateKanbanColumnProps) => {
  const kanbanColumn = kanbanColumnSchema.parse(columnProps);

  return kanbanColumn;
};
