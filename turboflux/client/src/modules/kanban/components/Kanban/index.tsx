import { KanbanColumn } from '../KanbanColumn';

export const Kanban = () => {
  return (
    <div className="flex gap-1">
      <KanbanColumn title="TODO" />
      <KanbanColumn title="IN PROGRESS" />
      <KanbanColumn title="DONE" />
    </div>
  );
};
