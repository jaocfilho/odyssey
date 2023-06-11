import { GeneralSettingsSection } from './GeneralSettingsSection';
import { DeleteChatbotSection } from './DeleteChatbotSection';
import { ChatbotsSettingsRow } from '../../entities';

type ChatbotSettingsProps = {
  id: string;
  initialData: ChatbotsSettingsRow;
};

export function ChatbotSettings({ id, initialData }: ChatbotSettingsProps) {
  return (
    <div className="divide-y dark:divide-zinc-50/10">
      <GeneralSettingsSection id={id} initialData={initialData} />
      <DeleteChatbotSection id={id} />
    </div>
  );
}
