import { CheckIcon } from '@heroicons/react/20/solid';

import { classNames } from '../../../utils';

const activeStyles = 'text-white';

const inactiveStyles = 'text-emerald-600 dark:text-emerald-500';

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
        active ? activeStyles : inactiveStyles,
        'absolute inset-y-0 right-0 flex items-center pr-4'
      )}
    >
      <CheckIcon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}
