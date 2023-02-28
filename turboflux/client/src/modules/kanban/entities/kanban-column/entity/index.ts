import { randomUUID } from 'node:crypto';

import { z } from 'zod';

import { kanbanCardSchema } from '../../kanban-card';

export const kanbanColumnSchema = z.object({
  id: z.string().uuid().default(randomUUID()),
  title: z.string(),
  cards: z.array(kanbanCardSchema).default([]),
});

type TKanbanColumnSchema = typeof kanbanColumnSchema;
export type KanbanColumnInput = z.input<TKanbanColumnSchema>;
export type KanbanColumn = z.output<TKanbanColumnSchema>;
export type KanbanColumns = KanbanColumn[];
