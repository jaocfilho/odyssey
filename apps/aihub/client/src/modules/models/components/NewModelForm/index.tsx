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
    </div>
  );
};
