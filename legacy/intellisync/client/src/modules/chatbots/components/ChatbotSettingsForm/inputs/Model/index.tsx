import { z } from 'zod';

import { SelectInput } from '@/modules/forms/components/Inputs';
import { ModelTypes, modelTypes } from '@/modules/chatbots/entities';

type ModelOption = {
  value: ModelTypes;
  label: string;
};

const modelOptions: ModelOption[] = [
  { value: 'gpt-3.5-turbo', label: 'GPT 3.5 turbo' },
  { value: 'gpt-4', label: 'GPT 4' },
];

export const model = z.enum(modelTypes).optional();

export function Model() {
  return (
    <SelectInput
      label="Model"
      name="model"
      placeholder="Select a model"
      options={modelOptions}
    />
  );
}
