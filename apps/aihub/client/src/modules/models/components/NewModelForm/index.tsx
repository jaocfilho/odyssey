'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

import { Form } from '@/modules/forms/components';
import { Select } from '@/components/Select';

const options = [
  { value: 'funny', label: 'Funny' },
  { value: 'professional', label: 'Professional' },
  { value: 'silly', label: 'Silly' },
];

const newModelFormSchema = z.object({
  name: z.string(),
  context: z.string(),
});

type NewModelFormData = z.infer<typeof newModelFormSchema>;

export const NewModelForm = () => {
  const methods = useForm<NewModelFormData>({
    resolver: zodResolver(newModelFormSchema),
  });

  const createModel = (data: NewModelFormData) => console.log(data);

  return (
    <Form.Root onSubmit={createModel} {...methods}>
      <div className="flex flex-col gap-4">
        <Form.Field>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Input name="name" placeholder="French translator" type="text" />
          <Form.ErrorMessage name="name" />
        </Form.Field>

        <Select label="Add a vibe" options={options} />

        <Form.Field>
          <Form.Label htmlFor="context">Add context</Form.Label>
          <Form.TextArea
            name="context"
            rows={4}
            placeholder="You are a helpful assistant that translates English to French."
          />
          <Form.ErrorMessage name="context" />
        </Form.Field>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
          >
            Save
          </button>
        </div>
      </div>
    </Form.Root>
  );
};
