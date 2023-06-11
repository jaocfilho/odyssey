'use client';

import { Textarea } from 'tailwind-ui';
import { RemoveRowButton } from './RemoveRowButton';
import { FormRow } from './FormRow';
import { LastRow } from './LastRow';
import {
  type PersonaContextFormData,
  usePersonaContextForm,
} from './usePersonaContextForm';
import { type PersonasRow } from '../../entities';

type PersonaContextFormProps = {
  onSubmit: (context: PersonasRow['context']) => void;
  defaultValues?: PersonaContextFormData;
};

export function PersonaContextForm({
  onSubmit,
  defaultValues,
}: PersonaContextFormProps) {
  const { addRow, fields, formState, register, removeRow, submit, resetForm } =
    usePersonaContextForm({ defaultValues, onSubmit });

  return (
    <form onSubmit={submit}>
      <ul role="list" className="mt-6 space-y-6">
        {fields.map((field, index) => (
          <FormRow key={field.id}>
            <>
              <RemoveRowButton
                isFirstRow={index === 0}
                removeRow={() => removeRow(index)}
              />
              <Textarea
                rows={3}
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
