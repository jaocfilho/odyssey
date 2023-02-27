import { Flex } from 'milky-ui';

export type KanbanCardProps = {
  title: string;
};

export const KanbanCard = ({ title }: KanbanCardProps) => {
  return <Flex direction="column">{title}</Flex>;
};
