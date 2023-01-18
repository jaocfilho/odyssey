import { Flex, Text } from 'milky-ui';

type RepositoryRowProps = {
  repository: string;
};

export const RepositoryRow = ({ repository }: RepositoryRowProps) => {
  return (
    <Flex>
      <Text variant="h3">{repository}</Text>
    </Flex>
  );
};
