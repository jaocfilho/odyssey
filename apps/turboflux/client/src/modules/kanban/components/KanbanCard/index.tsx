export type KanbanCardProps = {
  title: string;
};

export const KanbanCard = ({ title }: KanbanCardProps) => {
  return (
    <div className="overflow-hidden rounded bg-white shadow dark:bg-zinc-900 dark:text-white dark:border-zinc-700 border-2">
      <div className="p-2 sm:p-6">{title}</div>
    </div>
  );
};
