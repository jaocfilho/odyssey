import { personaInputs } from '../Inputs';
import {
  PersonaUpdateForm,
  type PersonaUpdateFormProps,
} from '../PersonaUpdateForm';

type TargetAudienceFormProps = Pick<
  PersonaUpdateFormProps,
  'chatbot_id' | 'defaultValues'
>;

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
