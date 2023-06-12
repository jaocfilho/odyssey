import { z } from 'zod';

import {
  UseCustomFormMethods,
  useCustomForm,
} from '@/modules/forms/hooks/use-custom-form';
import { answer_size } from '../../components/Inputs/AnswerSize';
import { domain } from '../../components/Inputs/Domain';
import { language_complexity } from '../../components/Inputs/LanguageComplexity';
import { level_of_detail } from '../../components/Inputs/LevelOfDetail';
import { target_audience } from '../../components/Inputs/TargetAudience';
import { tone } from '../../components/Inputs/Tone';
import { topic } from '../../components/Inputs/Topic';
import { informality } from '../../components/Inputs/Informality';
import { useUpdatePersonaByChatbot } from '../use-update-persona-by-chatbot';
import { type PersonasRow } from '../../entities';

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

export type UseUpdatePersonaFormMethods = UseCustomFormMethods<
  typeof updatePersonaSchema
>;

export type UpdatePersonaFormData = z.infer<typeof updatePersonaSchema>;

type UseUpdatePersonaFormProps = {
  chatbot_id: PersonasRow['chatbot_id'];
  defaultValues: UpdatePersonaFormData;
};

export function useUpdatePersonaForm({
  chatbot_id,
  defaultValues,
}: UseUpdatePersonaFormProps) {
  const updateMutation = useUpdatePersonaByChatbot();

  const handleSubmit = (data: UpdatePersonaFormData) => {
    updateMutation.mutate({
      chatbot_id,
      params: data,
    });
  };

  const { methods } = useCustomForm({
    schema: updatePersonaSchema,
    defaultValues,
  });

  return {
    methods,
    handleSubmit,
  };
}
