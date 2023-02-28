import { KanbanCardInput, kanbanCardSchema } from '../entity';

type CreateKanbanCardProps = {
  cardProps: KanbanCardInput;
};

export const createKanbanCard = ({ cardProps }: CreateKanbanCardProps) => {
  const kanbanCard = kanbanCardSchema.parse(cardProps);

  return kanbanCard;
};
