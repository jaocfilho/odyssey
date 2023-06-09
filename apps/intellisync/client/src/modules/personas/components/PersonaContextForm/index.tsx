'use client';

import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { PlusCircleIcon } from '@heroicons/react/24/outline';

import { Button, Textarea } from 'tailwind-ui';
import { z } from 'zod';
import { RemoveRowButton } from './RemoveRowButton';
import { AddRowButton } from './AddRowButton';
import { FormRow } from './FormRow';
import { LastRow } from './LastRow';
import { rest } from 'msw';

const schema = z.object({
  context: z
    .array(
      z.object({
        value: z.string(),
      })
    )
    .transform((context) => context.map((item) => item.value)),
});

export function PersonaContextForm() {
  const { control, register, formState, reset, handleSubmit } = useForm({
    defaultValues: {
      context: [{ value: '' }],
    },
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

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul role="list" className="mt-6 space-y-6">
        {fields.map((field, index) => (
          <FormRow key={field.id}>
            <>
              <RemoveRowButton removeRow={() => removeRow(index)} />
              <Textarea
                colorScheme="emerald"
                className="resize-none"
                {...register(`context.${index}.value`)}
              />
            </>
          </FormRow>
        ))}
        <LastRow
          addRow={addRow}
          reset={() => reset()}
          disabled={!formState.isDirty}
        />
      </ul>
    </form>
  );
}
