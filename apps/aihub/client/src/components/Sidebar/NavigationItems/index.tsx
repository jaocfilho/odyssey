'use client';

import { Squares2X2Icon } from '@heroicons/react/24/outline';

import { ChatbotsLink } from '@/modules/navigation/components/ChatbotsLink';
import { NavItem } from '../NavItem';
import { useIsChatbotsPath } from '@/modules/chatbots/hooks/use-is-chatbots-path';

export function ChatbotsPageNavItem() {
  const current = useIsChatbotsPath();

  return (
    <ChatbotsLink>
      <NavItem Icon={Squares2X2Icon} current={current} />
    </ChatbotsLink>
  );
}
