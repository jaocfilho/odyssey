import { type ReactNode } from 'react';

import { DetailsHeader } from '../DetailsHeader';
import { SelectAppByIdReturnData } from '../../api/base';

type DetailsPageShellProps = {
  children: ReactNode;
  initialData: SelectAppByIdReturnData;
};

export function DetailsPageShell({
  initialData,
  children,
}: DetailsPageShellProps) {
  return (
    <>
      <DetailsHeader name={initialData?.name!} />
      {children}
    </>
  );
}
