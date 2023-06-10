import { z } from 'zod';

import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { PersonasRow } from '@/modules/personas/entities';

const schema = z.object({
  context: z.array(
    z.object({
      value: z.string(),
    })
  ),
});

export type PersonaContextFormData = z.infer<typeof schema>;

type UsePersonaContextFormProps = {
  onSubmit: (data: PersonasRow['context']) => void;
  defaultValues?: PersonaContextFormData;
};

export function usePersonaContextForm({
  onSubmit,
  defaultValues,
}: UsePersonaContextFormProps) {
  const { control, register, handleSubmit, formState, reset } = useForm({
    defaultValues: defaultValues ?? {
      context: [{ value: '' }],
    },

    // TODO - fix zodResolver type
    resolver: zodResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'context',
  });

  const addRow = () => {
    append({ value: '' });
  };

  const removeRow = (index: number) => {
    remove(index);
  };

  const resetForm = () => reset();

  const submit = handleSubmit((data) => {
    const context = data.context.map((item) => item.value);
    onSubmit(context);
  });

  return {
    addRow,
    removeRow,
    register,
    fields,
    submit,
    formState,
    resetForm,
  };
}
