import { Card } from '@/components/Card';

export type KanbanCardProps = {
  title: string;
};

export const KanbanCard = ({ title }: KanbanCardProps) => {
  return <Card>{title}</Card>;
};
