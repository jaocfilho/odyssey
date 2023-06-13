import { type ReactNode } from 'react';

import { SectionContainer } from '../SectionContainer';
import { SectionInfo } from '../SectionInfo';
import { SectionContent } from '../SectionContent';

type SectionProps = {
  title: string;
  children: ReactNode;
};

export function Section({ title, children }: SectionProps) {
  return (
    <SectionContainer>
      <SectionInfo title={title} />
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  );
}
