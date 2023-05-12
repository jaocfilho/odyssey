import { ReactNode } from 'react';

import { Form } from '@/modules/forms/components';
import { UseCreateAppFormMethods } from '../use-create-app-form';

type CreateAppFormComponentRootProps = {
  children: ReactNode;
  methods: UseCreateAppFormMethods;
};

export function CreateAppFormComponentRoot({
  children,
  methods,
}: CreateAppFormComponentRootProps) {
  return (
    <Form.Root id="createAppForm" {...methods}>
      {children}
    </Form.Root>
  );
}
