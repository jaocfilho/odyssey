import { Markdown } from '@/components/Markdown';

type AssistantMessageProps = {
  message: string;
};

export function AssistantMessage({ message }: AssistantMessageProps) {
  return (
    <div className="self-start px-4 py-2 lg:mr-24 rounded-md dark:bg-white/10">
      <Markdown>{message}</Markdown>
    </div>
  );
}
