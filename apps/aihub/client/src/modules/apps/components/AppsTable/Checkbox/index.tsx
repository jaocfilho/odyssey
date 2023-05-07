import {
  Checkbox as BaseCheckbox,
  CheckboxProps as BaseCheckboxProps,
} from '@/components/Checkbox';

type CheckboxProps = BaseCheckboxProps;

export function Checkbox(props: CheckboxProps) {
  return <BaseCheckbox className="absolute left-4 top-1/2 -mt-2" {...props} />;
}
