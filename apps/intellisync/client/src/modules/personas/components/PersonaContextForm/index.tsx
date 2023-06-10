'use client';

import { SubmitHandler } from 'react-hook-form';

import { Textarea } from 'tailwind-ui';
import { RemoveRowButton } from './RemoveRowButton';
import { FormRow } from './FormRow';
import { LastRow } from './LastRow';
import {
  type PersonaContextFormInputs,
  usePersonaContextForm,
} from './usePersonaContextForm';

type PersonaContextFormProps = {
  onSubmit: SubmitHandler<PersonaContextFormInputs>;
  defaultValues?: PersonaContextFormInputs;
};

export function PersonaContextForm({
  onSubmit,
  defaultValues,
}: PersonaContextFormProps) {
  const {
    addRow,
    fields,
    formState,
    register,
    removeRow,
    handleSubmit,
    resetForm,
  } = usePersonaContextForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <ul role="list" className="mt-6 space-y-6">
        {fields.map((field, index) => (
          <FormRow key={field.id}>
            <>
              <RemoveRowButton
                isFirstRow={index === 0}
                removeRow={() => removeRow(index)}
              />
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
          reset={resetForm}
          disabled={!formState.isDirty}
        />
      </ul>
    </form>
  );
}
