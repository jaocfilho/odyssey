import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export function ModalComponentIcon() {
  return (
    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-500 sm:mx-0 sm:h-10 sm:w-10">
      <ExclamationTriangleIcon
        className="h-6 w-6 text-red-500 dark:text-white"
        aria-hidden="true"
      />
    </div>
  );
}
