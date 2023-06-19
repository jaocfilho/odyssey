import { AddRowButton } from '../AddRowButton';
import { BrandButton } from '@/components/Buttons/BrandButton';
import { CancelButton } from '@/components/Buttons/CancelButton';

type LastRowProps = {
  addRow: () => void;
  reset: () => void;
  disabled: boolean;
};

export function LastRow({ addRow, disabled, reset }: LastRowProps) {
  return (
    <li className="relative flex gap-x-4">
      <div className="h-6 absolute left-0 top-0 flex w-6 justify-center">
        <div className="w-px dark:bg-grayScheme-50/10" />
      </div>
      <div className="flex justify-between items-center w-full">
        <AddRowButton addRow={addRow} />
        <div className="flex gap-4">
          <CancelButton disabled={disabled} onClick={reset}>
            Cancel
          </CancelButton>
          <BrandButton type="submit" disabled={disabled}>
            Save
          </BrandButton>
        </div>
      </div>
    </li>
  );
}
