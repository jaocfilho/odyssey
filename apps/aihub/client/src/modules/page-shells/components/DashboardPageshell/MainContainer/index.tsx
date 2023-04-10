import { ReactNode } from 'react';

type MainContainerProps = {
  children: ReactNode;
};

export function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="flex flex-col lg:pl-64">
      <main className="flex-1">{children}</main>
    </div>
  );
}
