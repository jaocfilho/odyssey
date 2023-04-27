import { Form, type InputProps } from '../Form';

type TextInputProps = InputProps & {
  label?: string;
};

export function TextInput({ label, name, ...rest }: TextInputProps) {
  return (
    <Form.Field>
      {!!label ? <Form.Label htmlFor={name}>Name</Form.Label> : null}
      <Form.Input name={name} {...rest} />
      <Form.ErrorMessage name={name} />
    </Form.Field>
  );
}
