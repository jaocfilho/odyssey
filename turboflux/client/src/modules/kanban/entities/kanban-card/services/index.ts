import { KanbanCard, KanbanCardInput, kanbanCardSchema } from '../entity';

type CreateKanbanCardParams = {
  cardProps: KanbanCardInput;
};

export const createKanbanCard = ({ cardProps }: CreateKanbanCardParams) => {
  const kanbanCard = kanbanCardSchema.parse(cardProps);

  return kanbanCard;
};

type NewCardProps = Omit<Partial<KanbanCard>, 'id'>;
type UpdateKanbanCardParams = {
  card: KanbanCard;
  newCardProps: NewCardProps;
};

export const updateKanbanCard = ({
  card,
  newCardProps,
}: UpdateKanbanCardParams): KanbanCard => {
  return { ...card, ...newCardProps };
};
