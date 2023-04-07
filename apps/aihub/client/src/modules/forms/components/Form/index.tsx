'use client';

import {
  FieldValues,
  FormProvider,
  FormProviderProps,
  SubmitHandler,
} from 'react-hook-form';

import { Field } from '../Field';
import { Input } from '../Input';
import { TextArea } from '../TextArea';
import { Label } from '../Label';
import { ErrorMessage } from '../ErrorMessage';
import { Select } from '../Select';

type FormProps<TFieldValues extends FieldValues> =
  FormProviderProps<TFieldValues> & {
    onSubmit: SubmitHandler<TFieldValues>;
  };

function FormRoot<TFieldValues extends FieldValues>({
  children,
  onSubmit,
  handleSubmit,
  ...rest
}: FormProps<TFieldValues>) {
  return (
    <FormProvider handleSubmit={handleSubmit} {...rest}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export const Form = {
  Root: FormRoot,
  Field,
  Input,
  TextArea,
  Label,
  ErrorMessage,
  Select,
};
