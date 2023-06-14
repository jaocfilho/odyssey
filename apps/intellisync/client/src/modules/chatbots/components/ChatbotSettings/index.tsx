import { GeneralSettingsSection } from './GeneralSettingsSection';
import { DeleteChatbotSection } from './DeleteChatbotSection';
import { ChatbotsSettingsRow } from '../../entities';
import { SectionList } from '@/components/SectionList';

type ChatbotSettingsProps = {
  id: string;
  initialData: ChatbotsSettingsRow;
};

export function ChatbotSettings({ id, initialData }: ChatbotSettingsProps) {
  return (
    <SectionList.Root>
      <GeneralSettingsSection id={id} initialData={initialData} />
      <DeleteChatbotSection id={id} />
    </SectionList.Root>
  );
}
