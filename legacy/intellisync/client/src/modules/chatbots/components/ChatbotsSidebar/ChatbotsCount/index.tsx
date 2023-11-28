type ChatbotsCountProps = {
  chatbotsCount: number;
};

export function ChatbotsCount({ chatbotsCount }: ChatbotsCountProps) {
  return (
    <p className="pl-3 text-sm font-semibold leading-6 dark:text-zinc-500">
      Chatbots ({chatbotsCount})
    </p>
  );
}
