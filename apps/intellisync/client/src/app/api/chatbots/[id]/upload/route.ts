import { NextRequest, NextResponse } from 'next/server';

import { storeVectorsFromFiles } from '@/modules/documents/api/server';

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
