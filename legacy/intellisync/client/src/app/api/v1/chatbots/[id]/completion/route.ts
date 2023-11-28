import { NextResponse, NextRequest } from 'next/server';

import { routeHandlerGetChatbotConfig } from '@/modules/chatbots/api/route-handlers';
import { noApiKeyFoundResponse } from '@/modules/api-keys/helpers';

type ChatbotCompletionParams = {
  params: { id: string };
};

export async function POST(
  request: NextRequest,
  { params }: ChatbotCompletionParams
) {
  const apikey = request.headers.get('apikey');
  if (!apikey) {
    return noApiKeyFoundResponse();
  }

  const { id } = params;

  const chatbotConfig = await routeHandlerGetChatbotConfig({
    apikey,
    chatbot_id: id,
  });

  if (chatbotConfig.status === 200) {
    return NextResponse.json('success');
  }

  return new NextResponse(
    JSON.stringify({
      message: 'No chatbot found in request',
    }),
    {
      status: 400,
    }
  );
}
