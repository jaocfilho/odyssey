import { z } from 'zod';

import {
  useForm,
  UseFormProps,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCustomMethods } from '../use-custom-methods';

export type UseCustomFormOnSubmit<Schema extends z.ZodTypeAny> = SubmitHandler<
  z.infer<Schema>
>;

export type UseCustomFormProps<Schema extends z.ZodTypeAny> = Omit<
  UseFormProps,
  'resolver'
> & {
  schema: Schema;
  onSubmit: UseCustomFormOnSubmit<Schema>;
};

/**
 * Zod generic reference:
 * https://zod.dev/?id=writing-generic-functions
 */
export function useCustomForm<Schema extends z.ZodTypeAny>({
  schema,
  onSubmit,
  ...rest
}: UseCustomFormProps<Schema>) {
  const methods = useForm({
    resolver: zodResolver(schema),
    ...rest,
  }) as UseFormReturn<z.infer<typeof schema>>;

  const { customMethods } = useCustomMethods<Schema>({
    methods,
    onSubmit,
  });

  return { methods, customMethods };
}

export type UseCustomFormMethods<Schema extends z.ZodTypeAny> = UseFormReturn<
  z.infer<Schema>
>;
