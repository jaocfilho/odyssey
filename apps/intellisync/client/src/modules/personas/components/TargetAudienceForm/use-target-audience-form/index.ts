import { z } from 'zod';

import {
  useCustomForm,
  type UseCustomFormMethods,
  type UseCustomFormProps,
} from '@/modules/forms/hooks/use-custom-form';
import { target_audience } from '../../Inputs/TargetAudience';

const targetAudienceSchema = z.object({
  target_audience,
});

type UseTargetAudienceFormProps = Pick<
  UseCustomFormProps<typeof targetAudienceSchema>,
  'defaultValues'
>;

export type UseTargetAudienceFormMethods = UseCustomFormMethods<
  typeof targetAudienceSchema
>;

export type TargetAudienceFormData = z.infer<typeof targetAudienceSchema>;

export function useTargetAudienceForm({
  defaultValues,
}: UseTargetAudienceFormProps) {
  const { methods, customMethods } = useCustomForm({
    schema: targetAudienceSchema,
    defaultValues,
  });

  return { methods, customMethods };
}
