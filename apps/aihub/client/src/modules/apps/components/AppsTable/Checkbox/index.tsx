import {
  Checkbox as TUICheckbox,
  CheckboxProps as TUICheckboxProps,
} from 'tailwind-ui';

type CheckboxProps = TUICheckboxProps;

export function Checkbox(props: CheckboxProps) {
  return <TUICheckbox className="absolute left-4 top-1/2 -mt-2" {...props} />;
}
