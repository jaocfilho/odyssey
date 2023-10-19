import {
  Button as TuiButton,
  type ButtonProps as TuiButtonProps,
} from 'cosmic-ui';

type BrandButtonProps = TuiButtonProps;

export function BrandButton(props: BrandButtonProps) {
  return <TuiButton {...props} colorScheme="indigo" />;
}
