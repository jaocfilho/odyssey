import { personaInputs } from '../Inputs';
import {
  PersonaUpdateForm,
  type PersonaUpdateFormProps,
} from '../PersonaUpdateForm';

type CommunicationStyleFormProps = Pick<
  PersonaUpdateFormProps,
  'chatbot_id' | 'defaultValues'
>;

export function CommunicationStyleForm({
  chatbot_id,
  defaultValues,
}: CommunicationStyleFormProps) {
  return (
    <PersonaUpdateForm
      formId="communicationStyleForm"
      chatbot_id={chatbot_id}
      defaultValues={defaultValues}
    >
      <personaInputs.Tone />
      <personaInputs.Informality />
    </PersonaUpdateForm>
  );
}
