'use client';

import { type ChatbotsFilesSourcesRow } from '@/modules/documents/entities';
import { TableRow } from '../TableRow';
import { useSelectAllFileSourcesByChatbotId } from '@/modules/documents/hooks/use-select-all-file-sources-by-chatbot-id';

type TableRowsProps = {
  chatbotId: string;
  files: ChatbotsFilesSourcesRow[];
};

export function TableRows({ chatbotId, files }: TableRowsProps) {
  const filesQuery = useSelectAllFileSourcesByChatbotId(
    { chatbot_id: chatbotId },
    {
      initialData: files,
    }
  );

  return (
    <tbody className="divide-y divide-gray-800">
      {filesQuery.data?.map(({ id, name, characters }) => (
        <TableRow id={id} characters={characters} name={name} />
      ))}
    </tbody>
  );
}
