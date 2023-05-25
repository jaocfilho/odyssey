import { NextResponse, NextRequest } from 'next/server';

import { type ChatCompletionsParams } from '@/modules/openai/api/chat-completion';
import { chatAgent } from '@/modules/openai/api/langchain';

export async function POST(request: NextRequest) {
  const data: ChatCompletionsParams = await request.json();

  await chatAgent(data.prompt);

  return new Response('Ok');
}
