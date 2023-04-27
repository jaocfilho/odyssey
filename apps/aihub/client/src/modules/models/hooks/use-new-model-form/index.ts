import { z } from 'zod';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const vibeOptions = [
  { value: 'funny', label: 'Funny' },
  { value: 'professional', label: 'Professional' },
  { value: 'silly', label: 'Silly' },
];

const newModelFormSchema = z.object({
  name: z.string(),
  vibe: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .default(vibeOptions[0])
    .transform((vibe) => vibe.value),
  context: z.string(),
});

type NewModelFormData = z.infer<typeof newModelFormSchema>;

export const useNewModelForm = () => {
  const methods = useForm<NewModelFormData>({
    resolver: zodResolver(newModelFormSchema),
  });

  const createModel = (data: NewModelFormData) => console.log(data);

  return { createModel, methods, vibeOptions };
};
