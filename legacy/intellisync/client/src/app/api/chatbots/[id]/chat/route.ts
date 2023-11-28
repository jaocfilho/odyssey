import { NextRequest } from 'next/server';

import { StreamingTextResponse, LangChainStream, Message } from 'ai';

import { CallbackManager } from 'langchain/callbacks';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { ConversationalRetrievalQAChain } from 'langchain/chains';
import { BufferMemory } from 'langchain/memory';

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

  const chain = ConversationalRetrievalQAChain.fromLLM(
    llm,
    vectorStore.asRetriever(1, {
      essential: { chatbotId },
    }),
    {
      questionGeneratorChainOptions: {
        llm: questionLlm,
      },
      memory: new BufferMemory({
        humanPrefix:
          'I want you to act as a document that I am having a conversation with. You will provide me with answers from the given info. If the answer is not included, search for an answer and return it. Never break character.',
        memoryKey: 'chat_history',
        returnMessages: true,
      }),
    }
  );

  const question = messages.at(-1)!.content;

  chain
    .call({
      question,
    })
    .catch(console.error)
    .finally(() => {
      handlers.handleChainEnd();
    });

  return new StreamingTextResponse(stream);
}
