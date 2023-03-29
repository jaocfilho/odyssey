import { PlusIcon } from '@heroicons/react/20/solid';

import React, { ButtonHTMLAttributes } from 'react';

type PlusButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const PlusButton = (props: PlusButtonProps) => {
  return (
    <button
      className="rounded-full bg-indigo-600 p-1.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      {...props}
    >
      <PlusIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};
