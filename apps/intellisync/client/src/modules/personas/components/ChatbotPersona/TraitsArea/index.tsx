import { SectionList } from '@/components/SectionList';
import { DeleteChatbotSection } from '@/modules/chatbots/components/ChatbotSettings/DeleteChatbotSection';

export function TraitsArea() {
  return (
    <div className="-mx-4 px-4 sm:mx-0 sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2">
      <SectionList.Root>
        <SectionList.Container>
          <SectionList.Info title="Target audience" />
          <SectionList.Content>
            <div className="sm:max-w-xl">content</div>
          </SectionList.Content>
        </SectionList.Container>
        <DeleteChatbotSection id="any" />
        <DeleteChatbotSection id="any" />
      </SectionList.Root>
    </div>
  );
}
