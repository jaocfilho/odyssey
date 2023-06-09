import { type ReactNode } from 'react';

type FormRowProps = {
  children: ReactNode;
};

export function FormRow({ children }: FormRowProps) {
  return (
    <li className="relative flex gap-x-4">
      <div className="-bottom-6 absolute left-0 top-0 flex w-6 justify-center">
        <div className="w-px dark:bg-grayScheme-50/10" />
      </div>
      {children}
    </li>
  );
}
