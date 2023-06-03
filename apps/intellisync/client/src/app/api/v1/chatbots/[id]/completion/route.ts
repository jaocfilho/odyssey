import { NextResponse, NextRequest } from 'next/server';

import { routeHandlerGetChatbotConfig } from '@/modules/chatbots/api/route-handlers';
import { chatCompletion } from '@/modules/openai/api';
import { noApiKeyFoundResponse } from '@/modules/api-keys/helpers';

type ChatbotCompletionParams = {
  params: { id: string };
};

type ChatbotCompletionApiBodyParams = {
  text: string;
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
    const { text }: ChatbotCompletionApiBodyParams = await request.json();

    const response = await chatCompletion({
      text,
      config: chatbotConfig.data!,
    });

    return NextResponse.json(response);
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
