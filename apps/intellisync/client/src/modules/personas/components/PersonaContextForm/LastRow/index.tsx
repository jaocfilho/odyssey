import { Button } from 'tailwind-ui';
import { AddRowButton } from '../AddRowButton';

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
          <Button disabled={disabled} colorScheme="gray" onClick={reset}>
            Cancel
          </Button>
          <Button type="submit" disabled={disabled}>
            Save
          </Button>
        </div>
      </div>
    </li>
  );
}
