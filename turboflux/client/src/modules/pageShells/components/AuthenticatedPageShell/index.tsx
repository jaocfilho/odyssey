import { ReactNode } from 'react';

type AuthenticatedPageShellProps = {
  children: ReactNode;
};

export const AuthenticatedPageShell = ({
  children,
}: AuthenticatedPageShellProps) => {
  return <div>{children}</div>;
};
