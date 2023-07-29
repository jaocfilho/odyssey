import { NextRequest, NextResponse } from 'next/server';

import { serverParseFiles } from '@/modules/documents/api/server';

type Params = {
  params: { id: string };
};

export async function POST(request: NextRequest, { params }: Params) {
  const { id } = params;

  const formData = await request.formData();
  const files = formData.getAll('files');

  const { documents } = await serverParseFiles({ files, chatbotId: id });

  return NextResponse.json({ documents });
}
