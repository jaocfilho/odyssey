import { z } from 'zod';

import { kanbanCardSchema } from '../../kanban-card';

export const kanbanColumnSchema = z.object({
  title: z.string(),
  cards: z.array(kanbanCardSchema).default([]),
});

type TKanbanColumnSchema = typeof kanbanColumnSchema;
export type kanbanColumnInput = z.input<TKanbanColumnSchema>;
export type kanbanColumn = z.output<TKanbanColumnSchema>;
export type kanbanColumns = kanbanColumn[];
