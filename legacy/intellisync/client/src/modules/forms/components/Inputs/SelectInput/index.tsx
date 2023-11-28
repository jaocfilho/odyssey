import { Form, type SelectProps } from '../../Form';

type SelectInputProps = SelectProps;

export function SelectInput(props: SelectInputProps) {
  return (
    <Form.Field>
      <Form.Select {...props} />
    </Form.Field>
  );
}
