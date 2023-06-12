import { z } from 'zod';

import { useCustomForm } from '@/modules/forms/hooks/use-custom-form';
import { answer_size } from '../../components/Inputs/AnswerSize';
import { domain } from '../../components/Inputs/Domain';
import { language_complexity } from '../../components/Inputs/LanguageComplexity';
import { level_of_detail } from '../../components/Inputs/LevelOfDetail';
import { target_audience } from '../../components/Inputs/TargetAudience';
import { tone } from '../../components/Inputs/Tone';
import { topic } from '../../components/Inputs/Topic';
import { informality } from '../../components/Inputs/Informality';

const updatePersonaSchema = z.object({
  answer_size,
  domain,
  language_complexity,
  level_of_detail,
  target_audience,
  tone,
  topic,
  informality,
});

type UpdatePersonaFormData = z.infer<typeof updatePersonaSchema>;

type UseUpdatePersonaFormProps = {
  defaultValues: UpdatePersonaFormData;
};

export function useUpdatePersonaForm({
  defaultValues,
}: UseUpdatePersonaFormProps) {
  const { methods, customMethods } = useCustomForm({
    schema: updatePersonaSchema,
    defaultValues,
  });
  return {
    methods,
    customMethods,
  };
}
