import { ReactNode } from 'react';

type CreateAppLayoutProps = {
  children: ReactNode;
};

export default function CreateAppLayout({ children }: CreateAppLayoutProps) {
  return <div className="container mx-auto mt-8 px-8">{children}</div>;
}
