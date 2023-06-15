import { Input } from 'tailwind-ui';

type ApikeyInputProps = {
  value: string;
};

export function ApikeyInput({ value }: ApikeyInputProps) {
  return (
    <Input label="API key" value={value} name="apiKey" disabled hasCopyButton />
  );
}
