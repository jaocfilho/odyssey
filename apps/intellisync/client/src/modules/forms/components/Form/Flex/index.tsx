import { ReactNode } from 'react';

type FlexProps = {
  children: ReactNode;
};

export function Flex({ children }: FlexProps) {
  return <div className="flex flex-col gap-8">{children}</div>;
}
