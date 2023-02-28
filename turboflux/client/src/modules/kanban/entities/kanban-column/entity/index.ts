import { z } from 'zod';

import { kanbanCardSchema } from '../../kanban-card';

export const kanbanColumnSchema = z.object({
  title: z.string(),
  cards: z.array(kanbanCardSchema).default([]),
});

type TKanbanColumnSchema = typeof kanbanColumnSchema;
export type KanbanColumnInput = z.input<TKanbanColumnSchema>;
export type KanbanColumn = z.output<TKanbanColumnSchema>;
export type KanbanColumns = KanbanColumn[];
