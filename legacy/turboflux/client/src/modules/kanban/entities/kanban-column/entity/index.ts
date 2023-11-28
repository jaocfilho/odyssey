import { v4 as uuidv4 } from 'uuid';

import { z } from 'zod';

import { kanbanCardSchema } from '../../kanban-card';

export const kanbanColumnSchema = z.object({
  id: z.string().uuid().default(uuidv4()),
  title: z.string(),
  cards: z.array(kanbanCardSchema).default([]),
});

type TKanbanColumnSchema = typeof kanbanColumnSchema;
export type KanbanColumnInput = z.input<TKanbanColumnSchema>;
export type KanbanColumn = z.output<TKanbanColumnSchema>;
export type KanbanColumns = KanbanColumn[];
