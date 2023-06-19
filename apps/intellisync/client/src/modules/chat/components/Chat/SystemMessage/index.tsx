type SystemMessageProps = {
  message: string;
};

export function SystemMessage({ message }: SystemMessageProps) {
  return (
    <div className="self-start px-4 py-2 rounded-md dark:bg-white/10">
      <p>{message}</p>
    </div>
  );
}
