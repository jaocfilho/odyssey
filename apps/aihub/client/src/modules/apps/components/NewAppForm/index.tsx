'use client';

import { Form } from '@/modules/forms/components';
import { useNewAppForm } from './use-new-app-form';
import { TextAreaInput } from '@/modules/forms/components/TextAreaInput';
import { Model } from './Model';
import { Name } from './Name';
import { ButtonsArea } from './ButtonsArea';
import { ModelPricing } from './ModelPricing';
import { RefinementArea } from './RefinementArea';

export const NewAppForm = () => {
  const { createApp, methods, watchModel } = useNewAppForm();

  const modelValue = watchModel();

  return (
    <Form.Root onSubmit={createApp} {...methods}>
      <div className="flex flex-col gap-4">
        <Name />
        <Model />

        {!!modelValue ? <ModelPricing /> : null}
        <TextAreaInput
          label="Add context"
          name="context"
          rows={4}
          placeholder="You are a helpful assistant that translates English to French."
        />
        <RefinementArea />

        <ButtonsArea />
      </div>
    </Form.Root>
  );
};
