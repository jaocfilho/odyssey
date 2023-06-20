import { useState } from 'react';

type ChatMessage = {
  id: number;
  author: 'system' | 'user';
  message: string;
};

type AddSystemMessageParams = {
  message: string;
};

type AddUserMessageParams = {
  message: string;
};

type UseChatProps = {
  initialState?: ChatMessage[];
  onAddUserMessage: (message: string) => void;
};

export function useChat({ onAddUserMessage, initialState = [] }: UseChatProps) {
  const [chat, setChat] = useState<ChatMessage[]>(initialState);

  const addSystemMessage = ({ message }: AddSystemMessageParams) => {
    setChat((prevChat) => [
      ...prevChat,
      { id: prevChat.length + 1, author: 'system', message },
    ]);
  };

  const addUserMessage = ({ message }: AddUserMessageParams) => {
    setChat((prevChat) => [
      ...prevChat,
      { id: prevChat.length + 1, author: 'user', message },
    ]);

    onAddUserMessage(message);
  };

  return { chat, addUserMessage, addSystemMessage };
}
