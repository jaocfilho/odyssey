import { PersonaUpdateForm } from '@/modules/personas/components/PersonaUpdateForm';
import { SectionList } from '@/components/SectionList';
import {
  PersonaUpdateFormData,
  PersonaUpdateFormField,
} from '@/modules/personas/hooks/use-persona-update-form';
import { PersonasRow } from '@/modules/personas/entities';
import { extractKeysFromObject } from '@odyssey/objects';
import { PersonaUpdateFormInput } from '../../../PersonaUpdateFormInput';

export type Section = {
  title: string;
  formId: string;
  fields: PersonaUpdateFormField[];
};

type TraitsAreaSectionProps = {
  persona: PersonasRow;
  section: Section;
};

export function TraitsAreaSection({
  section,
  persona,
}: TraitsAreaSectionProps) {
  const defaultValues = extractKeysFromObject(persona, section.fields);

  return (
    <SectionList.Section title={section.title}>
      <div className="sm:max-w-xl">
        <PersonaUpdateForm
          formId={section.formId}
          chatbot_id={persona.chatbot_id}
          defaultValues={defaultValues as PersonaUpdateFormData}
        >
          {section.fields.map((field) => (
            <PersonaUpdateFormInput key={field} field={field} />
          ))}
        </PersonaUpdateForm>
      </div>
    </SectionList.Section>
  );
}
