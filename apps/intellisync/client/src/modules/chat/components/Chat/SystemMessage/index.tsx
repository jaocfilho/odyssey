import { Markdown } from '@/components/Markdown';

type SystemMessageProps = {
  message: string;
};

export function SystemMessage({ message }: SystemMessageProps) {
  return (
    <div className="self-start px-4 py-2 lg:mr-24 rounded-md dark:bg-white/10">
      <Markdown>{message}</Markdown>
    </div>
  );
}
