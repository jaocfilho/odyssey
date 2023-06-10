import { MinusCircleIcon } from '@heroicons/react/24/outline';

type RemoveRowButtonProps = {
  removeRow: () => void;
  isFirstRow?: boolean;
};

export function RemoveRowButton({
  removeRow,
  isFirstRow,
}: RemoveRowButtonProps) {
  return (
    <>
      {isFirstRow ? (
        <div className="relative flex h-6 w-6 flex-none items-center justify-center dark:bg-grayScheme-950">
          <div className="h-1.5 w-1.5 rounded-full dark:bg-grayScheme-700 ring-1 dark:ring-grayScheme-900" />
        </div>
      ) : (
        <div
          role="button"
          onClick={removeRow}
          data-testid="removeRowButton"
          className="relative flex h-6 w-6 flex-none items-center justify-center dark:bg-grayScheme-950"
        >
          <MinusCircleIcon className="h-6 w-6 dark:text-grayScheme-400 cursor-pointer hover:dark:text-red-500" />
        </div>
      )}
    </>
  );
}
