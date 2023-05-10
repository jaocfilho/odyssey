'use client';

import { ReactNode } from 'react';

import { Form } from '@/modules/forms/components';
import { useCreateAppForm } from '../use-create-app-form';

type CreateAppFormComponentRootProps = {
  children: ReactNode;
};

export function CreateAppFormComponentRoot({
  children,
}: CreateAppFormComponentRootProps) {
  const { createApp, methods } = useCreateAppForm();

  return (
    <Form.Root id="createAppForm" onSubmit={createApp} {...methods}>
      {children}
    </Form.Root>
  );
}
