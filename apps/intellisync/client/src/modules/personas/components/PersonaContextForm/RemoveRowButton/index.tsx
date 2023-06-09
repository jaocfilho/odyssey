import { MinusCircleIcon } from '@heroicons/react/24/outline';

type RemoveRowButtonProps = {
  removeRow: () => void;
};

export function RemoveRowButton({ removeRow }: RemoveRowButtonProps) {
  return (
    <div
      role="button"
      onClick={removeRow}
      className="relative flex h-6 w-6 flex-none items-center justify-center dark:bg-grayScheme-950"
    >
      <MinusCircleIcon className="h-6 w-6 dark:text-grayScheme-400 hover:dark:text-red-500 cursor-pointer" />
    </div>
  );
}
