import { PersonasRow } from '@/modules/personas/entities';
import { TargetAudienceSection } from './TargetAudienceSection';

type TraitsAreaProps = {
  chatbot_id: PersonasRow['chatbot_id'];
  persona: PersonasRow;
};

export function TraitsArea({ chatbot_id, persona }: TraitsAreaProps) {
  return (
    <div className="-mx-4 px-4 sm:mx-0 sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2">
      <TargetAudienceSection
        chatbot_id={chatbot_id}
        target_audience={persona.target_audience}
      />
    </div>
  );
}
