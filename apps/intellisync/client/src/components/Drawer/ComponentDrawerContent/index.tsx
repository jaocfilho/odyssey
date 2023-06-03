import { ReactNode } from 'react';

type ComponentDrawerContentProps = {
  children: ReactNode;
};

export function ComponentDrawerContent({
  children,
}: ComponentDrawerContentProps) {
  return <div className="relative flex-1 px-4 py-6 sm:px-6">{children}</div>;
}
