import { NextResponse, NextRequest } from 'next/server';

import {
  chatCompletions,
  type ChatCompletionsParams,
} from '@/modules/openai/api/chat-completion';

export async function POST(request: NextRequest) {
  const data: ChatCompletionsParams = await request.json();
  const stream = await chatCompletions(data);

  return new Response(stream);
}
