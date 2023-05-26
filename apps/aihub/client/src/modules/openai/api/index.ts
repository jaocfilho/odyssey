import { ChatOpenAI } from 'langchain/chat_models/openai';
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  PromptTemplate,
  SystemMessagePromptTemplate,
} from 'langchain/prompts';
import { HumanChatMessage, SystemChatMessage } from 'langchain/schema';

type ChatCompletionParams = {
  text: string;
};

export async function chatCompletion({ text }: ChatCompletionParams) {
  const initialMessage = new SystemChatMessage(
    'You are a chatbot and you will receive structions to fine tune your answer.'
  );

  const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    HumanMessagePromptTemplate.fromTemplate('{text}'),
  ]);

  const formatedPrompt = await chatPrompt.formatPromptValue({
    text,
  });
  const messages = formatedPrompt.toChatMessages();

  const chat = new ChatOpenAI();
  const response = await chat.call([
    initialMessage,
    new HumanChatMessage(text),
  ]);

  return response;
}
