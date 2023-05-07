import { z } from 'zod';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCreateAppMutation } from '../use-create-app-mutation';
import { useNavigation } from '@/modules/navigation/hooks/use-navigation';

const vibeOptions = [
  { value: 'funny', label: 'Funny' },
  { value: 'professional', label: 'Professional' },
  { value: 'silly', label: 'Silly' },
];

const newAppFormSchema = z.object({
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

type NewAppFormData = z.infer<typeof newAppFormSchema>;

export const useNewAppForm = () => {
  const mutation = useCreateAppMutation();
  const { redirectToApps } = useNavigation();

  const methods = useForm<NewAppFormData>({
    resolver: zodResolver(newAppFormSchema),
  });

  const createApp = ({ name, context, vibe }: NewAppFormData) => {
    mutation.mutate(
      { name, context, vibe },
      {
        onSuccess: () => {
          redirectToApps();
        },
      }
    );
  };

  return { createApp, methods, vibeOptions };
};
