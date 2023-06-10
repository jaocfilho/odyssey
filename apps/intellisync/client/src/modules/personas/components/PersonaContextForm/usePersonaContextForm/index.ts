import { z } from 'zod';

import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  context: z
    .array(
      z.object({
        value: z.string(),
      })
    )
    .transform((context) => context.map((item) => item.value)),
});

export type PersonaContextFormInputs = z.input<typeof schema>;

type UsePersonaContextFormProps = {
  defaultValues?: PersonaContextFormInputs;
};

export function usePersonaContextForm({
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

  return {
    addRow,
    removeRow,
    register,
    fields,
    handleSubmit,
    formState,
    resetForm,
  };
}
