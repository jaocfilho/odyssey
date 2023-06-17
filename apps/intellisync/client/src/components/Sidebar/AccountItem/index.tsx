import { UserIcon } from '@heroicons/react/24/outline';

export function AccountItem() {
  return (
    <p className="flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium dark:text-zinc-200">
      <UserIcon />
    </p>
  );
}
