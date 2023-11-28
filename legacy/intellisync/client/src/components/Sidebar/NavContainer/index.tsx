import { ReactNode } from 'react';

type NavContainerProps = {
  children: ReactNode;
};

export function NavContainer({ children }: NavContainerProps) {
  return (
    <nav className="mt-6">
      <div className="flex flex-col space-y-2">{children}</div>
    </nav>
  );
}
