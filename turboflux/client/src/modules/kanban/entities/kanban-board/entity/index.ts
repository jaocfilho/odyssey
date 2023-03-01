import { z } from 'zod';

import { kanbanColumnSchema } from '../../kanban-column';

export const kanbanBoardSchema = z.object({
  columns: z.array(kanbanColumnSchema).default([]),
});

type TKanbanBoardSchema = typeof kanbanBoardSchema;
export type KanbanBoardInput = z.input<TKanbanBoardSchema>;
export type KanbanBoard = z.output<TKanbanBoardSchema>;
