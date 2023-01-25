import { Flex, Text } from 'milky-ui';

type WorkspaceSectionProps = {
  repository: string;
};

export const WorkspaceSection = ({ repository }: WorkspaceSectionProps) => {
  return (
    <Flex alignItems="center" noShrink css={{ height: '$space$10' }} my={2}>
      <Text variant="h4">{repository}</Text>
    </Flex>
  );
};
