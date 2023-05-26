import { NextResponse, NextRequest } from 'next/server';

import { routeHandlerSelectChatbotById } from '@/modules/chatbots/api/route-handlers';

type ChatbotCompletionParams = {
  params: { id: string };
};

export async function POST(
  request: NextRequest,
  { params }: ChatbotCompletionParams
) {
  const { id } = params;

  const chatbot = await routeHandlerSelectChatbotById({ id });

  try {
    console.log(chatbot.data);
  } catch (error) {
    console.error('derp');
  }

  return NextResponse.json('OK');
}
