import { PersonasRow } from '@/modules/personas/entities';
import { TargetAudienceSection } from './TargetAudienceSection';
import { SectionList } from '@/components/SectionList';
import { CommunicationStyleSection } from './CommunicationStyleSection';
import { WrittingStyleSection } from './WrittingStyleSection';

type TraitsAreaProps = {
  chatbot_id: PersonasRow['chatbot_id'];
  persona: PersonasRow;
};

export function TraitsArea({ chatbot_id, persona }: TraitsAreaProps) {
  return (
    <div className="-mx-4 px-4 sm:mx-0 sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2">
      <SectionList.Root>
        <TargetAudienceSection
          chatbot_id={chatbot_id}
          target_audience={persona.target_audience}
        />
        <CommunicationStyleSection
          chatbot_id={chatbot_id}
          informality={persona.informality}
          tone={persona.tone}
        />
        <WrittingStyleSection
          chatbot_id={chatbot_id}
          language_complexity={persona.language_complexity}
          style={persona.style}
        />
      </SectionList.Root>
    </div>
  );
}
