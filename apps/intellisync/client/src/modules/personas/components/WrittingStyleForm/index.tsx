import { personaInputs } from '../Inputs';
import {
  PersonaUpdateForm,
  type PersonaUpdateFormProps,
} from '../PersonaUpdateForm';

type WrittingStyleFormProps = Pick<
  PersonaUpdateFormProps,
  'chatbot_id' | 'defaultValues'
>;

export function WrittingStyleForm({
  chatbot_id,
  defaultValues,
}: WrittingStyleFormProps) {
  return (
    <PersonaUpdateForm
      formId="writtingStyleForm"
      chatbot_id={chatbot_id}
      defaultValues={defaultValues}
    >
      <personaInputs.LanguageComplexity />
      <personaInputs.Style />
    </PersonaUpdateForm>
  );
}
