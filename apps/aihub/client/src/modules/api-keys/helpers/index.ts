import { NextResponse } from 'next/server';

export function noApiKeyFoundResponse() {
  return new NextResponse(
    JSON.stringify({
      message: 'No API key found in request',
      hint: 'No `apikey` request header or url param was found.',
    }),
    {
      status: 401,
    }
  );
}
