import { Flex } from 'milky-ui';
import { RepositoryRow } from '../RepositoryRow';

export const RepositoriesArea = () => {
  return (
    <Flex direction="column">
      <RepositoryRow repository="codeflux" />
      <RepositoryRow repository="milky-ui" />
      <RepositoryRow repository="satellite" />
      <RepositoryRow repository="orbitals" />
    </Flex>
  );
};
