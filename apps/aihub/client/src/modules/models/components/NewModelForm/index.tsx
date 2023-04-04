import { Select } from '@/components/Select';
import { TextInput } from '@/components/TextInput';

export const NewModelForm = () => {
  const options = [
    { value: 'funny', label: 'Funny' },
    { value: 'professional', label: 'Professional' },
    { value: 'silly', label: 'Silly' },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Select label="Select your vibe" options={options} />
      <TextInput label="Add context" name="context" />
    </div>
  );
};
