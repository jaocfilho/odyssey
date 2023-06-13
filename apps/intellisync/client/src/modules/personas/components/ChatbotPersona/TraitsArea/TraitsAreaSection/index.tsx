import { PersonaUpdateForm } from '@/modules/personas/components/PersonaUpdateForm';
import { SectionList } from '@/components/SectionList';
import {
  PersonaUpdateFormData,
  PersonaUpdateFormField,
} from '@/modules/personas/hooks/use-persona-update-form';
import { PersonasRow } from '@/modules/personas/entities';
import { extractKeysFromObject } from '@odyssey/objects';
import { PersonaUpdateFormInput } from '../../../PersonaUpdateFormInput';

type TraitsAreaSectionProps = {
  title: string;
  formId: string;
  fields: PersonaUpdateFormField[];
  persona: PersonasRow;
};

export function TraitsAreaSection({
  title,
  formId,
  fields,
  persona,
}: TraitsAreaSectionProps) {
  const defaultValues = extractKeysFromObject(persona, fields);

  return (
    <SectionList.Section title={title}>
      <div className="sm:max-w-xl">
        <PersonaUpdateForm
          formId={formId}
          chatbot_id={persona.chatbot_id}
          defaultValues={defaultValues as PersonaUpdateFormData}
        >
          {fields.map((field) => (
            <PersonaUpdateFormInput key={field} field={field} />
          ))}
        </PersonaUpdateForm>
      </div>
    </SectionList.Section>
  );
}
