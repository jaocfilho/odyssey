export type NewDocumentsListItemProps = {
  characters: number;
  fileName: string;
};

export function NewDocumentsListItem({
  characters,
  fileName,
}: NewDocumentsListItemProps) {
  return (
    <li key={fileName} className="py-4">
      <div className="flex items-center gap-x-3">
        <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-white">
          {fileName}
        </h3>
        <p className="flex-none text-xs text-gray-500">
          {characters} characters
        </p>
      </div>
    </li>
  );
}
