import { usePersonaForm, type PersonaFormData } from '../../PersonaForm';
import { useInsertPersona } from '../../../hooks/use-insert-persona';

export function useCreatePersonaForm() {
  const mutation = useInsertPersona();

  const onSubmit = (data: PersonaFormData) => {
    mutation.mutate(data);
  };

  const { methods } = usePersonaForm({ onSubmit });

  return { methods, onSubmit };
}
