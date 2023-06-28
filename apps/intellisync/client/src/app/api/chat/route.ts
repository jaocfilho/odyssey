import { StreamingTextResponse, LangChainStream, Message } from 'ai';

import { CallbackManager } from 'langchain/callbacks';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import {
  AIChatMessage,
  HumanChatMessage,
  SystemChatMessage,
} from 'langchain/schema';
import { ConversationalRetrievalQAChain } from 'langchain/chains';
import { getSupabaseVectorStore } from '@/modules/documents/vector_stores';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const { stream, handlers } = LangChainStream();

  const llm = new ChatOpenAI({
    streaming: true,
    callbacks: CallbackManager.fromHandlers(handlers),
  });

  // const vectorStore = getSupabaseVectorStore();

  // const chain = ConversationalRetrievalQAChain.fromLLM(
  //   llm,
  //   vectorStore.asRetriever()
  // );

  // const chat_history = (messages as Message[]).map((m) => {
  //   if (m.role == 'user') {
  //     console.log(m);
  //     return new HumanChatMessage(m.content);
  //   }

  //   if (m.role == 'system') {
  //     console.log(m);
  //     return new SystemChatMessage(m.content);
  //   }

  //   console.log(m);
  //   return new AIChatMessage(m.content);
  // });

  // const chat_history = (messages as Message[]).reduce(
  //   (prev, curr) => prev + curr.content,
  //   ''
  // );
  // const question = messages[messages.length - 1].content;

  // await chain.call({
  //   question,
  //   chat_history,
  // });

  llm
    .call(
      (messages as Message[]).map((m) =>
        m.role == 'user'
          ? new HumanChatMessage(m.content)
          : new AIChatMessage(m.content)
      )
    )
    .catch(console.error)
    .finally(() => {
      // Call handleStreamEnd when the chat or stream ends
      handlers.handleChainEnd();
    });

  return new StreamingTextResponse(stream);
}
