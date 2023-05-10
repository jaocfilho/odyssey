import { Form, type TextAreaProps } from '../Form';

type TextAreaInputProps = TextAreaProps & {
  label?: string;
};

export function TextAreaInput({ label, name, ...rest }: TextAreaInputProps) {
  return (
    <Form.Field>
      {!!label ? <Form.Label htmlFor={name}>{label}</Form.Label> : null}
      <Form.TextArea name={name} {...rest} />
      <Form.ErrorMessage name={name} />
    </Form.Field>
  );
}
