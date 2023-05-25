import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanChatMessage } from 'langchain/schema';

import { supabase } from '@/lib/supabase';

export async function chatAgent(text: string) {
  supabase;
  const chat = new ChatOpenAI();
  // Pass in a list of messages to `call` to start a conversation. In this simple example, we only pass in one message.
  const response = await chat.call([new HumanChatMessage(text)]);
  console.log(response);
}
