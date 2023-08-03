import { XMarkIcon } from '@heroicons/react/24/outline';

export type TNewDocumentsListItem = {
  characters: number;
  fileName: string;
};

type NewDocumentsListItemProps = TNewDocumentsListItem & {
  removeDocument: () => void;
};

export function NewDocumentsListItem({
  characters,
  fileName,
  removeDocument,
}: NewDocumentsListItemProps) {
  return (
    <li key={fileName} className="py-4">
      <div className="flex items-center gap-x-4">
        <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-white">
          {fileName}
        </h3>
        <p className="flex-none text-sm dark:text-grayScheme-400">
          {characters} characters
        </p>
        <span role="button" onClick={removeDocument}>
          <XMarkIcon className="h-4 w-4 cursor-pointer dark:text-grayScheme-500 dark:hover:text-grayScheme-400" />
        </span>
      </div>
    </li>
  );
}
