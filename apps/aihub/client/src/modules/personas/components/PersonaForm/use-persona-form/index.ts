import { UseFormReturn, SubmitHandler } from 'react-hook-form';

import { personaSchema, type PersonaFormData } from '../Inputs/schema';
import { useCustomForm } from '@/modules/forms/hooks/use-custom-form';

type UsePersonaFormProps = {
  onSubmit: SubmitHandler<PersonaFormData>;
};

export type UsePersonaFormMethods = UseFormReturn<PersonaFormData>;

export function usePersonaForm({ onSubmit }: UsePersonaFormProps) {
  const { methods, customMethods } = useCustomForm({
    schema: personaSchema,
    onSubmit,
  });

  return { methods, customMethods };
}
