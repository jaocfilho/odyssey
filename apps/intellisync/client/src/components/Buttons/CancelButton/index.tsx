import { Button, type ButtonProps } from 'cosmic-ui';

type CancelButtonProps = ButtonProps;

export function CancelButton(props: CancelButtonProps) {
  return <Button {...props} colorScheme="gray" />;
}
