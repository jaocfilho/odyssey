type UserMessageProps = {
  message: string;
};

export function UserMessage({ message }: UserMessageProps) {
  return (
    <div className="self-end px-4 py-2 rounded-md dark:bg-white/5">
      <p>{message}</p>
    </div>
  );
}
