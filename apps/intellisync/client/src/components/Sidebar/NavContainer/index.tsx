import { ReactNode } from 'react';

type NavContainerProps = {
  children: ReactNode;
};

export function NavContainer({ children }: NavContainerProps) {
  return (
    <nav className="mt-6">
      <div className="space-y-1">{children}</div>
    </nav>
  );
}
