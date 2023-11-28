import { serverSelectAllFileSourcesByChatbotId } from '../../api/server';
import { FilesTableSummary } from '../FilesTableSummary';
import { TableRows } from './TableRows';

type FilesTableProps = {
  chatbotId: string;
};

export async function FilesTable({ chatbotId }: FilesTableProps) {
  const { data } = await serverSelectAllFileSourcesByChatbotId({
    chatbot_id: chatbotId,
  });

  return (
    <div className="h-full">
      <div className="mx-auto max-w-7xl h-full">
        <div className="bg-gray-900 py-10 h-full">
          <div className="px-4 sm:px-6 lg:px-8 h-full">
            <FilesTableSummary chatbotId={chatbotId} />
            <div className="mt-8 h-full">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 h-full">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <colgroup>
                      <col className="w-full sm:w-1/2" />
                      <col className="sm:w-1/6" />
                      <col className="sm:w-1/6" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          Characters
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <TableRows chatbotId={chatbotId} files={data!} />
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
