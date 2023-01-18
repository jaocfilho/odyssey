import { Flex, Text } from 'milky-ui';

type WorkspaceSectionProps = {
  repository: string;
};

export const WorkspaceSection = ({ repository }: WorkspaceSectionProps) => {
  return (
    <Flex>
      <Text variant="h3">{repository}</Text>
    </Flex>
  );
};
