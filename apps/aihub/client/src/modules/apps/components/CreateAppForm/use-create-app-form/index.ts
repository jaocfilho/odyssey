import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCreateAppMutation } from '../../../hooks/use-create-app-mutation';
import { useNavigation } from '@/modules/navigation/hooks/use-navigation';
import { type CreateAppFormData, createAppFormSchema } from '../Inputs/schema';

export const useCreateAppForm = () => {
  const mutation = useCreateAppMutation();
  const { redirectToAppDetailsOverview } = useNavigation();

  const methods = useForm<CreateAppFormData>({
    resolver: zodResolver(createAppFormSchema),
  });

  const watchModel = () => methods.watch('model');

  const createApp = ({ name, model, description }: CreateAppFormData) => {
    mutation.mutate(
      { name, model, description },
      {
        onSuccess: ({ data }) => {
          const { id } = data!;
          redirectToAppDetailsOverview(id);
        },
      }
    );
  };

  return { createApp, methods, watchModel };
};
