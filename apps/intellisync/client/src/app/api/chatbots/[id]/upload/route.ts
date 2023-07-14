import { NextRequest, NextResponse } from 'next/server';

import { storeVectorsFromFiles } from '@/modules/documents/api/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://www.intellisyncai.com',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS(request: NextRequest) {
  return NextResponse.json({}, { headers: corsHeaders });
}

type Params = {
  params: { id: string };
};

export async function POST(request: NextRequest, { params }: Params) {
  const { id } = params;

  const formData = await request.formData();
  const files = formData.getAll('files');

  await storeVectorsFromFiles({ files, chatbotId: id });

  return NextResponse.json({ success: true });
}
