import { Select } from '@/components/Select';

export const NewModelForm = () => {
  const options = [
    { value: 'funny', label: 'Funny' },
    { value: 'professional', label: 'Professional' },
    { value: 'silly', label: 'Silly' },
  ];

  return (
    <div className="flex flex-col gap4">
      <Select label="Vibe" options={options} />
    </div>
  );
};
