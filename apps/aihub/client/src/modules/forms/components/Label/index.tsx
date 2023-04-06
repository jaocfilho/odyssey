import { LabelHTMLAttributes } from 'react';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function Label(props: LabelProps) {
  return <label className="block text-sm font-medium leading-6" {...props} />;
}
