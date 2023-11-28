import { type PersonaUpdateFormField } from '../../hooks/use-persona-update-form';
import { personaInputsMap } from '../Inputs';

type PersonaUpdateFormInputProps = {
  field: PersonaUpdateFormField;
};

export function PersonaUpdateFormInput({ field }: PersonaUpdateFormInputProps) {
  const Input = personaInputsMap[field];

  return <Input />;
}
