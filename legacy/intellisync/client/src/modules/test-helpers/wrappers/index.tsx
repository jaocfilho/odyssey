import { Form } from '@/modules/forms/components';
import { type ReactNode } from 'react';
import { useForm } from 'react-hook-form';

type FormInputWrapperProps = {
  children: ReactNode;
};

export function FormInputWrapper({ children }: FormInputWrapperProps) {
  const methods = useForm();

  return (
    <Form.Root id="testForm" onSubmit={() => {}} {...methods}>
      {children}
    </Form.Root>
  );
}
