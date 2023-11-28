import { PlusCircleIcon } from '@heroicons/react/24/outline';

type AddRowButtonProps = {
  addRow: () => void;
};

export function AddRowButton({ addRow }: AddRowButtonProps) {
  return (
    <div
      role="button"
      onClick={addRow}
      data-testid="addRowButton"
      className="relative flex h-6 w-6 flex-none items-center justify-center dark:bg-grayScheme-950"
    >
      <PlusCircleIcon className="h-6 w-6 dark:text-grayScheme-400 hover:dark:text-grayScheme-200 cursor-pointer" />
    </div>
  );
}
