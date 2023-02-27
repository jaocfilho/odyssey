import { Flex } from 'milky-ui';

export type KanbanCardProps = {
  title: string;
};

export const KanbanCard = ({ title }: KanbanCardProps) => {
  return (
    <Flex p={4} b={1} bStyle="solid" bColor="$gray6">
      {title}
    </Flex>
  );
};
