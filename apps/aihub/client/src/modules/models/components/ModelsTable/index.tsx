'use client';

import { Body } from './Body';
import { TableContainer } from './Container';
import { Header } from './Header';
import { type Model } from '@/lib/supabase/types';
import { useSelectedModels } from './use-selected-models';

type ModelsTableProps = {
  models: Model[];
};

export function ModelsTable({ models }: ModelsTableProps) {
  const { checkAllRows, checkRow, rowIsChecked, uncheckAllRows, uncheckRow } =
    useSelectedModels({ models });

  return (
    <TableContainer>
      <Header checkAllRows={checkAllRows} uncheckAllRows={uncheckAllRows} />
      <Body
        rows={models}
        checkRow={checkRow}
        uncheckRow={uncheckRow}
        rowIsChecked={rowIsChecked}
      />
    </TableContainer>
  );
}
