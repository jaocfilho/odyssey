import { type ReactNode } from 'react';

type PageTitleProps = {
  children: ReactNode;
};

export function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="font-semibold text-grayScheme-900 dark:text-grayScheme-200 text-base leading-7">
      {children}
    </h1>
  );
}
