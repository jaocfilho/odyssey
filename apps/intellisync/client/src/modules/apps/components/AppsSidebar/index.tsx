import { AppsListWithData } from './AppsListWithData';
import { CreateAppButton } from './CreateAppButton';

export function AppsSidebar() {
  return (
    <div className="flex flex-col p-4 gap-4">
      <CreateAppButton />
      <AppsListWithData />
    </div>
  );
}
