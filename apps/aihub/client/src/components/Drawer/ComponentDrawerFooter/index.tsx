'use client';

export type ComponentDrawerFooterProps = {
  onCancel?: () => void;
};

export function ComponentDrawerFooter({
  onCancel,
}: ComponentDrawerFooterProps) {
  return (
    <div className="flex flex-shrink-0 justify-end px-4 py-4 border-t dark:border-zinc-50/10">
      <button
        type="button"
        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={onCancel}
      >
        Cancel
      </button>
      <button
        type="submit"
        className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  );
}
