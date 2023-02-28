import { kanbanCardInput, kanbanCardSchema } from '../entity';

type CreateKanbanCardProps = {
  cardProps: kanbanCardInput;
};

export const createKanbanCard = ({ cardProps }: CreateKanbanCardProps) => {
  const kanbanCard = kanbanCardSchema.parse(cardProps);

  return kanbanCard;
};
