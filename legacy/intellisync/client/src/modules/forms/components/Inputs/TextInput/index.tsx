import { Form, type InputProps } from '../../Form';

type TextInputProps = InputProps;

export function TextInput(props: TextInputProps) {
  return (
    <Form.Field>
      <Form.Input {...props} />
    </Form.Field>
  );
}
