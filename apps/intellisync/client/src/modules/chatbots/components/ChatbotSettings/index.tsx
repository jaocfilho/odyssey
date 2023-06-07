import { GeneralSettingsSection } from './GeneralSettingsSection';
import { SelectChatbotSettingsByIdReturnData } from '../../api/base';
import { DeleteChatbotSection } from './DeleteChatbotSection';

type ChatbotSettingsProps = {
  id: string;
  initialData: NonNullable<SelectChatbotSettingsByIdReturnData>;
};

export function ChatbotSettings({ id, initialData }: ChatbotSettingsProps) {
  return (
    <div className="divide-y dark:divide-zinc-50/10">
      <GeneralSettingsSection id={id} initialData={initialData} />
      <DeleteChatbotSection id={id} />
    </div>
  );
}
