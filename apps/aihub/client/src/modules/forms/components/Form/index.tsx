'use client';

import { HTMLAttributes } from 'react';

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
import { ErrorMessage } from './ErrorMessage';
import { Select } from '../Select';

export type { InputProps } from '../Input';
export type { TextAreaProps } from '../TextArea';

type FormElementProps = Pick<HTMLAttributes<HTMLFormElement>, 'id'>;

type FormProps<TFieldValues extends FieldValues> =
  FormProviderProps<TFieldValues> &
    FormElementProps & {
      onSubmit?: SubmitHandler<TFieldValues>;
    };

function FormRoot<TFieldValues extends FieldValues>({
  children,
  onSubmit,
  handleSubmit,
  id,
  ...rest
}: FormProps<TFieldValues>) {
  const submit = () => {
    if (!!onSubmit) {
      return handleSubmit(onSubmit);
    }
    return undefined;
  };

  return (
    <FormProvider handleSubmit={handleSubmit} {...rest}>
      <form id={id} onSubmit={submit()}>
        {children}
      </form>
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
