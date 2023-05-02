import { ReactNode } from 'react';

import Link from 'next/link';

import { modelsUrls } from '@/modules/navigation/helpers';

type ModelDetailsPromptLinkProps = {
  children: ReactNode;
  id: string;
};

export function ModelDetailsPromptLink({
  children,
  id,
}: ModelDetailsPromptLinkProps) {
  const url = modelsUrls.details.prompt(id);

  return <Link href={url}>{children}</Link>;
}
