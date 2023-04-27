import { z } from 'zod';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useInsertModel } from '../use-insert-model';

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
  const { insertModel } = useInsertModel();

  const methods = useForm<NewModelFormData>({
    resolver: zodResolver(newModelFormSchema),
  });

  const createModel = async ({ name, context, vibe }: NewModelFormData) => {
    const { data } = await insertModel({ name, context, vibe });
  };

  return { createModel, methods, vibeOptions };
};
