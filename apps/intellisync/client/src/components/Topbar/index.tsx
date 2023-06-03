import { BreadCrumb } from '../BreadCrumb';

export function Topbar() {
  return (
    <div className="border-b px-4 h-12 max-h-12 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 dark:border-zinc-50/10">
      <div className="min-w-0 flex-1">
        <BreadCrumb />
      </div>
    </div>
  );
}
