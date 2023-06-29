import { NextRequest } from 'next/server';

import { StreamingTextResponse, LangChainStream, Message } from 'ai';

import { CallbackManager } from 'langchain/callbacks';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { AIChatMessage, HumanChatMessage } from 'langchain/schema';
import { ConversationalRetrievalQAChain } from 'langchain/chains';

import { getSupabaseVectorStore } from '@/modules/documents/vector_stores';

type ChatbotChatParams = {
  params: { id: string };
};

type ChatApiBodyParams = {
  messages: Message[];
};

export const runtime = 'edge';

export async function POST(
  request: NextRequest,
  { params }: ChatbotChatParams
) {
  const { id: chatbotId } = params;
  const { messages }: ChatApiBodyParams = await request.json();

  const { stream, handlers } = LangChainStream();

  const llm = new ChatOpenAI({
    streaming: true,
    callbacks: CallbackManager.fromHandlers(handlers),
  });

  const questionLlm = new ChatOpenAI({});
  const vectorStore = getSupabaseVectorStore();

  const chatHistory = ConversationalRetrievalQAChain.getChatHistoryString(
    messages.map((m) => {
      if (m.role == 'user') {
        return new HumanChatMessage(m.content);
      }

      return new AIChatMessage(m.content);
    })
  );

  const chain = ConversationalRetrievalQAChain.fromLLM(
    llm,
    vectorStore.asRetriever(1, {
      essential: { chatbotId },
    }),
    {
      questionGeneratorChainOptions: {
        llm: questionLlm,
      },
    }
  );

  const question = messages[messages.length - 1].content;

  chain
    .call({
      question,
      chat_history: chatHistory,
    })
    .catch(console.error)
    .finally(() => {
      handlers.handleChainEnd();
    });

  return new StreamingTextResponse(stream);
}
