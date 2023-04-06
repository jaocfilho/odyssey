import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  context: z.string(),
});

export const useNewModelForm = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  });

  return { register, handleSubmit };
};
