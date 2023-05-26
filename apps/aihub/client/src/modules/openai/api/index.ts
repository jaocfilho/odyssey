import { createPersonaChatMessages } from '@/modules/personas/helpers';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanChatMessage } from 'langchain/schema';

type ChatCompletionParams = {
  text: string;
};

export async function chatCompletion({ text }: ChatCompletionParams) {
  const messages = await createPersonaChatMessages({
    domain: 'technology',
    topic: 'software programming',
    answer_size: 'short',
  });

  const chat = new ChatOpenAI();
  const response = await chat.call([...messages, new HumanChatMessage(text)]);

  return response;
}
