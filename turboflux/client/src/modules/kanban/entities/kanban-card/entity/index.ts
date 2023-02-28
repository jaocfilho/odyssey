import { z } from 'zod';

export const kanbanCardSchema = z.object({
  title: z.string(),
});

type TKanbanCardSchema = typeof kanbanCardSchema;
export type kanbanCardInput = z.input<TKanbanCardSchema>;
export type kanbanCard = z.output<TKanbanCardSchema>;
export type kanbanCards = kanbanCard[];
