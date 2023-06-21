import { Chat } from '@/modules/chat/components/Chat';

export default function ChatbotDetailsChatPage() {
  return (
    <div className="relative flex flex-col h-full">
      <div className="absolute inset-0">
        <Chat />
      </div>
    </div>
  );
}
