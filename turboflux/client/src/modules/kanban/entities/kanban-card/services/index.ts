import {
  KanbanCard,
  KanbanCardInput,
  KanbanCards,
  kanbanCardSchema,
} from '../entity';

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

type GetCardByIdParams = {
  cardId: string;
  cards: KanbanCards;
};

type GetCardByIdReturn =
  | {
      card: KanbanCard;
      index: number;
    }
  | undefined;

export const getCardById = ({
  cardId,
  cards,
}: GetCardByIdParams): GetCardByIdReturn => {
  const index = cards.findIndex((c) => c.id === cardId);

  if (index !== -1) {
    const card = cards[index];
    return { card, index };
  }

  return undefined;
};
