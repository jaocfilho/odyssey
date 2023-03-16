import { KanbanState } from '../../reducer';

export type MoveCardPayload = {
  cardId: string;
  targetIndex: number;
  originColumnIndex: number;
  targetColumnIndex: number;
};

export const moveCard = (state: KanbanState, payload: MoveCardPayload) => {};
