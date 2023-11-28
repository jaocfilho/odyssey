import { NextRequest, NextResponse } from 'next/server';

import { serverUploadDocuments } from '@/modules/documents/api/server';

type Params = {
  params: { id: string };
};

export async function POST(request: NextRequest, { params }: Params) {
  const { documents } = await request.json();

  await serverUploadDocuments({ documents });

  return NextResponse.json({ success: true });
}
