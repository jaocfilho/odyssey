'use client';

import Link from 'next/link';

import { Form } from '@/modules/forms/components';
import { useNewAppForm } from '../../hooks/use-new-model-form';
import { TextInput } from '@/modules/forms/components/TextInput';
import { TextAreaInput } from '@/modules/forms/components/TextAreaInput';

export const NewAppForm = () => {
  const { createApp, methods, vibeOptions } = useNewAppForm();

  return (
    <Form.Root onSubmit={createApp} {...methods}>
      <div className="flex flex-col gap-4">
        <TextInput
          label="Name"
          name="name"
          placeholder="French translator"
          type="text"
        />

        <Form.Field>
          <Form.Select label="Add a vibe" name="vibe" options={vibeOptions} />
        </Form.Field>

        <TextAreaInput
          label="Add context"
          name="context"
          rows={4}
          placeholder="You are a helpful assistant that translates English to French."
        />

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link href="/dashboard/models">
            <button type="button" className="text-sm font-semibold leading-6">
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            className="rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            Save
          </button>
        </div>
      </div>
    </Form.Root>
  );
};
