import { DeleteChatbotButton } from './DeleteChatbotButton';
import { SectionList } from '@/components/SectionList';

type DeleteChatbotSectionProps = {
  id: string;
};

export function DeleteChatbotSection({ id }: DeleteChatbotSectionProps) {
  return (
    <SectionList.Container>
      <SectionList.Info
        title="Delete chatbot"
        description="This action is not reversible. All information related to this chatbot will be deleted permanently."
      />

      <div className="flex items-start md:col-span-2">
        <DeleteChatbotButton id={id} />
      </div>
    </SectionList.Container>
  );
}
