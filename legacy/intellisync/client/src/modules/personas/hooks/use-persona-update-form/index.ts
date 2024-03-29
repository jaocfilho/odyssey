import { z } from 'zod';

import {
  UseCustomFormMethods,
  useCustomForm,
} from '@/modules/forms/hooks/use-custom-form';
import { answer_size } from '../../components/Inputs/AnswerSize';
import { domain } from '../../components/Inputs/Domain';
import { language_complexity } from '../../components/Inputs/LanguageComplexity';
import { level_of_detail } from '../../components/Inputs/LevelOfDetail';
import { style } from '../../components/Inputs/Style';
import { target_audience } from '../../components/Inputs/TargetAudience';
import { tone } from '../../components/Inputs/Tone';
import { topic } from '../../components/Inputs/Topic';
import { informality } from '../../components/Inputs/Informality';
import { useUpdatePersonaByChatbot } from '../use-update-persona-by-chatbot';
import { type PersonasRow } from '../../entities';

const personaUpdateSchema = z.object({
  answer_size,
  domain,
  language_complexity,
  level_of_detail,
  style,
  target_audience,
  tone,
  topic,
  informality,
});

export type UsePersonaUpdateFormMethods = UseCustomFormMethods<
  typeof personaUpdateSchema
>;

export type PersonaUpdateFormData = z.infer<typeof personaUpdateSchema>;

export type PersonaUpdateFormField = keyof PersonaUpdateFormData;

type UseUpdatePersonaFormProps = {
  chatbot_id: PersonasRow['chatbot_id'];
  defaultValues: PersonaUpdateFormData;
};

export function usePersonaUpdateForm({
  chatbot_id,
  defaultValues,
}: UseUpdatePersonaFormProps) {
  const updateMutation = useUpdatePersonaByChatbot();

  const handleSubmit = (data: PersonaUpdateFormData) => {
    updateMutation.mutate({
      chatbot_id,
      params: data,
    });
  };

  const { methods } = useCustomForm({
    schema: personaUpdateSchema,
    defaultValues,
  });

  const resetForm = () => methods.reset();

  methods.formState.isSubmitSuccessful && methods.reset(methods.getValues());

  const buttonsAreDisabled = !methods.formState.isDirty;

  return {
    methods,
    handleSubmit,
    resetForm,
    buttonsAreDisabled,
  };
}
