import { SectionContainer } from '../SectionContainer';
import { SectionInfo } from '../SectionInfo';
import { DeleteChatbotButton } from './DeleteChatbotButton';

export function DeleteChatbotSection() {
  return (
    <SectionContainer>
      <SectionInfo
        title="Delete chatbot"
        description="This action is not reversible. All information related to this chatbot will be deleted permanently."
      />

      <div className="flex items-start md:col-span-2">
        <DeleteChatbotButton />
      </div>
    </SectionContainer>
  );
}
