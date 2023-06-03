import { type ReactNode } from 'react';

type AppDetailsRefinementLayoutProps = {
  children: ReactNode;
};

export default function AppDetailsRefinementLayout({
  children,
}: AppDetailsRefinementLayoutProps) {
  return (
    <div className="mx-8">
      <div className="pt-10">{children}</div>
    </div>
  );
}
