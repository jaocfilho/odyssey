import { useIsCurrentChatbotPath } from '@/modules/chatbots/hooks/use-is-current-chatbot-path';
import { ChatbotsDetailsOverviewLink } from '@/modules/navigation/components/ChatbotsDetailsOverviewLink';
import { classNames } from 'tailwind-ui';

const commonStyles =
  'group flex gap-x-3 rounded-md p-1 pl-3 text-sm font-semibold';
const currentStyles = 'dark:bg-zinc-900 dark:text-emerald-500';
const notCurrentStyles =
  'dark:text-zinc-600 dark:hover:text-emerald-500 dark:hover:bg-zinc-900';

type ChatbotsListItemProps = {
  id: string;
  name: string;
};

export function ChatbotsListItem({ id, name }: ChatbotsListItemProps) {
  const current = useIsCurrentChatbotPath(id);

  return (
    <li>
      <ChatbotsDetailsOverviewLink id={id}>
        <p
          className={classNames(
            current ? currentStyles : notCurrentStyles,
            commonStyles
          )}
        >
          {name}
        </p>
      </ChatbotsDetailsOverviewLink>
    </li>
  );
}
