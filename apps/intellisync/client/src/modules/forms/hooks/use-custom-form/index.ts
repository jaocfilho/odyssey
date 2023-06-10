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
  UseFormProps<z.infer<Schema>>,
  'resolver'
> & {
  schema: Schema;
  onSubmit?: UseCustomFormOnSubmit<Schema>;
};

/**
 * Zod generic reference:
 * https://zod.dev/?id=writing-generic-functions
 */
export function useCustomForm<Schema extends z.ZodTypeAny>({
  schema,
  onSubmit,
  defaultValues,
  ...rest
}: UseCustomFormProps<Schema>) {
  const methods = useForm({
    // TODO - fix zodResolver type
    resolver: zodResolver(schema),
    defaultValues,
    ...rest,
  });

  const { customMethods } = useCustomMethods<Schema>({
    methods,
    onSubmit,
    defaultValues,
  });

  return { methods, customMethods };
}

export type UseCustomFormMethods<Schema extends z.ZodTypeAny> = UseFormReturn<
  z.infer<Schema>
>;
