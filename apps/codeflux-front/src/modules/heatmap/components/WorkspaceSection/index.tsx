import { Flex, Text } from 'milky-ui';

type WorkspaceSectionProps = {
  repository: string;
};

export const WorkspaceSection = ({ repository }: WorkspaceSectionProps) => {
  return (
    <Flex css={{ height: '$space$10', alignItems: 'center' }} my={2}>
      <Text variant="h3">{repository}</Text>
    </Flex>
  );
};
