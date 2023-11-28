import { type ReactNode } from 'react';

import { SectionContainer } from '../SectionContainer';
import { SectionInfo } from '../SectionInfo';
import { SectionContent } from '../SectionContent';

type SectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ title, description, children }: SectionProps) {
  return (
    <SectionContainer>
      <SectionInfo title={title} description={description} />
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  );
}
