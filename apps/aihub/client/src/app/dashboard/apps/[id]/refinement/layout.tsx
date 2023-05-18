import { type ReactNode } from 'react';

type AppDetailsRefinementLayoutProps = {
  children: ReactNode;
};

export default function AppDetailsRefinementLayout({
  children,
}: AppDetailsRefinementLayoutProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">{children}</div>
    </div>
  );
}
