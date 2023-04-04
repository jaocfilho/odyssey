import { Select } from '@/components/Select';
import { TextInput } from '@/components/TextInput';
import { TextArea } from '@/components/TextArea';

export const NewModelForm = () => {
  const options = [
    { value: 'funny', label: 'Funny' },
    { value: 'professional', label: 'Professional' },
    { value: 'silly', label: 'Silly' },
  ];

  return (
    <div className="flex flex-col gap-4">
      <TextInput label="Name" name="name" placeholder="French translator" />
      <Select label="Select your vibe" options={options} />
      <TextArea
        label="Add context"
        name="context"
        placeholder="You are a helpful assistant that translates English to French."
      />
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
  );
};
