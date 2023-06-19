import { BrandButton } from '@/components/Buttons/BrandButton';
import { CancelButton } from '@/components/Buttons/CancelButton';

type ButtonsAreaProps = {
  formId: string;
  reset: () => void;
  disabled?: boolean;
};

export function ButtonsArea({ formId, reset, disabled }: ButtonsAreaProps) {
  return (
    <div className="mt-8 flex">
      <div className="flex gap-4">
        <CancelButton disabled={disabled} onClick={reset}>
          Cancel
        </CancelButton>
        <BrandButton disabled={disabled} type="submit" form={formId}>
          Save
        </BrandButton>
      </div>
    </div>
  );
}
