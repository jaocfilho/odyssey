import { Button, type ButtonProps } from 'tailwind-ui';

type CancelButtonProps = ButtonProps;

export function CancelButton(props: CancelButtonProps) {
  return <Button {...props} colorScheme="gray" />;
}
