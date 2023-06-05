import { Button } from 'tailwind-ui';
import { SectionContainer } from './SectionContainer';
import { SectionInfo } from './SectionInfo';
import { GeneralSettingsSection } from './GeneralSettingsSection';
import { SelectChatbotSettingsByIdReturnData } from '../../api/base';

type ChatbotSettingsProps = {
  initialData: SelectChatbotSettingsByIdReturnData;
};

export function ChatbotSettings({ initialData }: ChatbotSettingsProps) {
  console.log(initialData);

  return (
    <div className="divide-y dark:divide-zinc-50/10">
      <GeneralSettingsSection />

      <SectionContainer>
        <SectionInfo
          title="Delete chatbot"
          description="This action is not reversible. All information related to this chatbot will be deleted permanently."
        />

        <form className="flex items-start md:col-span-2">
          <Button colorScheme="red">Yes, delete my chatbot</Button>
        </form>
      </SectionContainer>
    </div>
  );
}
