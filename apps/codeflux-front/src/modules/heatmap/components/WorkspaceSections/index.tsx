import { Flex } from 'milky-ui';
import { WorkspaceSection } from '../WorkspaceSection';

type WorkspaceSectionsProps = {
  workspaces: string[];
};

export const WorkspaceSections = ({ workspaces }: WorkspaceSectionsProps) => {
  return (
    <Flex direction="column">
      {workspaces.map((workspace) => (
        <WorkspaceSection key={workspace} workspace={workspace} />
      ))}
    </Flex>
  );
};
