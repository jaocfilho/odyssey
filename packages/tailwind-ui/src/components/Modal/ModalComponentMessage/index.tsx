export type ModalComponentMessageProps = {
  message: string;
};

export function ModalComponentMessage({ message }: ModalComponentMessageProps) {
  return (
    <div className="mt-2">
      <p className="text-sm text-grayScheme-500 dark:text-grayScheme-400">
        {message}
      </p>
    </div>
  );
}
