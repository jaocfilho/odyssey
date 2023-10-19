import { Button } from '../../Button';

export type ModalComponentButtonsAreaProps = {
  confirmButton: string;
  cancelButton?: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export function ModalComponentButtonsArea({
  confirmButton,
  cancelButton,
  onCancel,
  onConfirm,
}: ModalComponentButtonsAreaProps) {
  return (
    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
      <Button
        colorScheme="red"
        onClick={onConfirm}
        className="sm:ml-3 inline-flex w-full sm:w-auto"
      >
        {confirmButton}
      </Button>
      <Button
        colorScheme="gray"
        onClick={onCancel}
        className="mt-3 sm:mt-0 inline-flex w-full sm:w-auto"
      >
        {!!cancelButton ? cancelButton : 'Cancel'}
      </Button>
    </div>
  );
}
