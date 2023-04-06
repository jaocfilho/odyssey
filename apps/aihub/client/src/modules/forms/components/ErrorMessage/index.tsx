'use client';

import { HTMLAttributes } from 'react';

import { useFieldError } from '../../hooks/use-field-error';

type ErrorMessageProps = HTMLAttributes<HTMLParagraphElement> & {
  name: string;
};

export function ErrorMessage({ name, ...rest }: ErrorMessageProps) {
  const { error } = useFieldError({ name });

  if (!error) {
    return null;
  }

  return (
    <p className="text-sm text-red-500" id={`${name}-error`} {...rest}>
      {error.message?.toString()}
    </p>
  );
}
