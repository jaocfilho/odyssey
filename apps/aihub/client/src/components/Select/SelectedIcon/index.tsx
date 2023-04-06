import { CheckIcon } from '@heroicons/react/20/solid';

import { classNames } from '@/modules/theme/utils';

type SelectedIconProps = {
  selected: boolean;
  active: boolean;
};

export function SelectedIcon({ selected, active }: SelectedIconProps) {
  if (!selected) {
    return null;
  }

  return (
    <span
      className={classNames(
        active ? 'text-white' : 'text-pink-600',
        'absolute inset-y-0 right-0 flex items-center pr-4'
      )}
    >
      <CheckIcon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}
