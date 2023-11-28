import { AccountItem } from './AccountItem';
import { CurrentOrganization } from './CurrentOrganization';

export function Topbar() {
  return (
    <div className="border-b px-4 h-16 max-h-16 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 dark:border-white/5">
      <div className="min-w-0 flex flex-1 justify-between align-middle">
        <CurrentOrganization />
        <AccountItem />
      </div>
    </div>
  );
}
