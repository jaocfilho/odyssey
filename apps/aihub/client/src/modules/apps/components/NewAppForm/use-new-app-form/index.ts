import { z } from 'zod';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCreateAppMutation } from '../../../hooks/use-create-app-mutation';
import { useNavigation } from '@/modules/navigation/hooks/use-navigation';
import { model } from '../Model';
import { vibe } from '../Vibe';
import { name } from '../Name';

const newAppFormSchema = z.object({
  name,
  model,
  vibe,
  context: z.string(),
});

type NewAppFormData = z.infer<typeof newAppFormSchema>;

export const useNewAppForm = () => {
  const mutation = useCreateAppMutation();
  const { redirectToApps } = useNavigation();

  const methods = useForm<NewAppFormData>({
    resolver: zodResolver(newAppFormSchema),
  });

  const watchModel = () => methods.watch('model');

  const createApp = ({ name, model, context, vibe }: NewAppFormData) => {
    mutation.mutate(
      { name, model, context, vibe },
      {
        onSuccess: () => {
          redirectToApps();
        },
      }
    );
  };

  return { createApp, methods, watchModel };
};
