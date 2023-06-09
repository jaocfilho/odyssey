'use client';

import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline';

import { Button, Textarea } from 'tailwind-ui';
import { z } from 'zod';
import { RemoveRowButton } from './RemoveRowButton';

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
          <li key={field.id} className="relative flex gap-x-4">
            <div className="-bottom-6 absolute left-0 top-0 flex w-6 justify-center">
              <div className="w-px dark:bg-grayScheme-50/10" />
            </div>
            <>
              <RemoveRowButton removeRow={() => removeRow(index)} />
              <Textarea
                colorScheme="emerald"
                className="resize-none"
                {...register(`context.${index}.value`)}
              />
            </>
          </li>
        ))}
        <li className="relative flex gap-x-4">
          <div className="h-6 absolute left-0 top-0 flex w-6 justify-center">
            <div className="w-px dark:bg-grayScheme-50/10" />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="relative flex h-6 w-6 flex-none items-center justify-center dark:bg-grayScheme-950">
              <PlusCircleIcon
                onClick={addRow}
                role="addRow"
                className="h-6 w-6 dark:text-grayScheme-400 hover:dark:text-grayScheme-200 cursor-pointer"
              />
            </div>
            <div className="flex gap-4">
              <Button
                disabled={!formState.isDirty}
                colorScheme="gray"
                onClick={() => reset()}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={!formState.isDirty}>
                Save
              </Button>
            </div>
          </div>
        </li>
      </ul>
    </form>
  );
}
