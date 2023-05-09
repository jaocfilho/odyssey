import { AppsList } from './AppsList';
import { NewAppButton } from './NewAppButton';

export function AppsSidebar() {
  return (
    <div className="flex flex-col p-4 gap-4">
      <NewAppButton />
      <AppsList />
    </div>
  );
}
