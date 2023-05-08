import { type ReactNode } from 'react';

import { DetailsNavigation } from '../DetailsNavigation';
import { Header } from '../DetailsOverview/Header';

type DetailsLayoutProps = {
  children: ReactNode;
  id: string;
};

export function DetailsLayout({ id, children }: DetailsLayoutProps) {
  return (
    <div>
      <header>
        <DetailsNavigation id={id} />
        <Header name="Cooking assistant" />
      </header>
      {children}
    </div>
  );
}
