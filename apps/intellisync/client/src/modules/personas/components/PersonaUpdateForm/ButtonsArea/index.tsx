import { Button } from 'tailwind-ui';

type ButtonsAreaProps = {
  formId: string;
  reset: () => void;
  disabled?: boolean;
};

export function ButtonsArea({ formId, reset, disabled }: ButtonsAreaProps) {
  return (
    <div className="mt-8 flex">
      <div className="flex gap-4">
        <Button disabled={disabled} colorScheme="gray" onClick={reset}>
          Cancel
        </Button>
        <Button
          disabled={disabled}
          colorScheme="indigo"
          type="submit"
          form={formId}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
