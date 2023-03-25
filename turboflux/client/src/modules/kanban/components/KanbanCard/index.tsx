export type KanbanCardProps = {
  title: string;
};

export const KanbanCard = ({ title }: KanbanCardProps) => {
  return (
    <div p={4} b={1} bStyle="solid" bColor="$gray6">
      {title}
    </div>
  );
};
