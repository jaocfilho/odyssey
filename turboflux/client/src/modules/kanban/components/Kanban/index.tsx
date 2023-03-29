import { KanbanStateProvider } from '@/modules/kanban/contexts/KanbanStateContext';
import { KanbanColumn } from '../KanbanColumn';

export const Kanban = () => {
  return (
    <KanbanStateProvider>
      <div className="flex gap-4">
        <KanbanColumn title="TODO" />
        <KanbanColumn title="IN PROGRESS" />
        <KanbanColumn title="DONE" />
      </div>
    </KanbanStateProvider>
  );
};
