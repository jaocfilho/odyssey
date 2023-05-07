'use client';

import { Body } from './Body';
import { TableContainer } from './Container';
import { Header } from './Header';
import { type Model } from '@/lib/supabase/types';
import { useSelectedApps } from './use-selected-apps';

type AppsTableProps = {
  apps: Model[];
};

export function AppsTable({ apps }: AppsTableProps) {
  const { checkAllRows, checkRow, rowIsChecked, uncheckAllRows, uncheckRow } =
    useSelectedApps({ apps });

  return (
    <TableContainer>
      <Header checkAllRows={checkAllRows} uncheckAllRows={uncheckAllRows} />
      <Body
        rows={apps}
        checkRow={checkRow}
        uncheckRow={uncheckRow}
        rowIsChecked={rowIsChecked}
      />
    </TableContainer>
  );
}
