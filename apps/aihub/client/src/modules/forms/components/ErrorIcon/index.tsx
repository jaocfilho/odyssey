'use client';

import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

import { useFieldError } from '../../hooks/use-field-error';

type ErrorIconProps = {
  name: string;
};

export function ErrorIcon({ name }: ErrorIconProps) {
  const { error } = useFieldError({ name });

  if (!error) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
      <ExclamationCircleIcon
        className="h-5 w-5 text-red-500"
        aria-hidden="true"
      />
    </div>
  );
}
