import { Flex, Text } from 'milky-ui';

type WorkspaceSectionProps = {
  workspace: string;
};

export const WorkspaceSection = ({ workspace }: WorkspaceSectionProps) => {
  return (
    <Flex alignItems="center" noShrink css={{ height: '$space$10' }} my={2}>
      <Text variant="h4">{workspace}</Text>
    </Flex>
  );
};
