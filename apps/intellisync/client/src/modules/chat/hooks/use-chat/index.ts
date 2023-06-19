import { useState } from 'react';

type ChatMessage = {
  id: number;
  author: 'system' | 'user';
  message: string;
};

export function useChat() {
  const [chat, setChat] = useState<ChatMessage[]>([
    {
      id: 1,
      author: 'system',
      message: 'this is a prototype of a chat component',
    },
    {
      id: 2,
      author: 'system',
      message: 'it will be used in the chatbot details page',
    },
    { id: 3, author: 'user', message: 'this is an example of a chat message' },
  ]);

  const addSystemMessage = (message: string) => {
    setChat((prevChat) => [
      ...prevChat,
      { id: prevChat.length + 1, author: 'system', message },
    ]);
  };

  const addUserMessage = (message: string) => {
    setChat((prevChat) => [
      ...prevChat,
      { id: prevChat.length + 1, author: 'user', message },
    ]);

    addSystemMessage('this is a system message');
  };

  return { chat, addUserMessage };
}
