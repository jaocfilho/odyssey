import { personaInputs } from '../Inputs';
import { type PersonaUpdateFormData } from '../../hooks/use-persona-update-form';
import { PersonaUpdateForm } from '../PersonaUpdateForm';

type TargetAudienceFormProps = {
  chatbot_id: string;
  defaultValues: PersonaUpdateFormData;
};

export function TargetAudienceForm({
  chatbot_id,
  defaultValues,
}: TargetAudienceFormProps) {
  return (
    <PersonaUpdateForm
      formId="targetAudienceForm"
      chatbot_id={chatbot_id}
      defaultValues={defaultValues}
    >
      <personaInputs.TargetAudience />
    </PersonaUpdateForm>
  );
}
