import { FileUploadButton } from '@/modules/documents/components/FileUploadButton';
import { Button } from 'tailwind-ui';

const activityItems = [
  {
    id: '1',
    characters: 1000,
    name: 'resume.pdf',
  },
  {
    id: '2',
    characters: 2000,
    name: 'resume.txt',
  },
  {
    id: '3',
    characters: 1000,
    name: 'resume.pdf',
  },
  {
    id: '4',
    characters: 4000,
    name: 'resume.json',
  },
];

type ChatbotDataSourceUploadPageProps = {
  chatbotId: string;
};

export function ChatbotDataSourceUploadPage({
  chatbotId,
}: ChatbotDataSourceUploadPageProps) {
  return (
    <div className="m-4 flex flex-col gap-8 h-full justify-between">
      <FileUploadButton chatbotId={chatbotId} />
      <ul role="list" className="divide-y divide-white/5">
        {activityItems.map((item) => (
          <li key={item.id} className="py-4">
            <div className="flex items-center gap-x-3">
              <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-white">
                {item.name}
              </h3>
              <p className="flex-none text-xs text-gray-500">
                {item.characters} characters
              </p>
            </div>
          </li>
        ))}
      </ul>
      <Button className="self-end">Train chatbot</Button>
    </div>
  );
}
