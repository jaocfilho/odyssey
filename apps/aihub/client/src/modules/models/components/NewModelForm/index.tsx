'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

import { Select } from '@/components/Select';
import { TextArea } from '@/components/TextArea';
import { Form } from '@/modules/forms/components';

const options = [
  { value: 'funny', label: 'Funny' },
  { value: 'professional', label: 'Professional' },
  { value: 'silly', label: 'Silly' },
];

const newModelFormSchema = z.object({
  name: z.string().refine((name) => name === 'derp'),
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

        <Form.Field>
          <Form.Label htmlFor="context">Add context</Form.Label>
          <Form.Input
            name="context"
            placeholder="French translator"
            type="text"
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

    // <form onSubmit={handleSubmit(createModel)}>
    //   <div className="flex flex-col gap-4">
    //     <div>
    //       <label htmlFor="name" className="block text-sm font-medium leading-6">
    //         Name
    //       </label>
    //       <div className="relative mt-2">
    //         <input
    //           type="text"
    //           id="name"
    //           className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 dark:bg-slate-800 dark:hover:bg-slate-700"
    //           placeholder="French translator"
    //           {...register('name')}
    //         />
    //         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
    //           <ExclamationCircleIcon
    //             className="h-5 w-5 text-red-500"
    //             aria-hidden="true"
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     <Select label="Select your vibe" options={options} />

    //     <div>
    //       <label
    //         htmlFor="context"
    //         className="block text-sm font-medium leading-6"
    //       >
    //         Add context
    //       </label>
    //       <div className="mt-2">
    //         <textarea
    //           rows={4}
    //           id="context"
    //           placeholder="You are a helpful assistant that translates English to French."
    //           className="block w-full rounded-md border-0 shadow-sm ring-1 ring-inset placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:py-1.5 sm:text-sm sm:leading-6 dark:bg-slate-800 dark:hover:bg-slate-700"
    //           {...register('context')}
    //         />
    //       </div>
    //     </div>

    //     <div className="mt-6 flex items-center justify-end gap-x-6">
    //       <button type="button" className="text-sm font-semibold leading-6">
    //         Cancel
    //       </button>
    //       <button
    //         type="submit"
    //         className="rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
    //       >
    //         Save
    //       </button>
    //     </div>
    //   </div>
    // </form>
  );
};
