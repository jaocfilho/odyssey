import { NextRequest, NextResponse } from 'next/server';

import { storeVectorsFromFiles } from '@/modules/documents/api/server';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const files = formData.getAll('files');

  await storeVectorsFromFiles({ files });

  return NextResponse.json({ success: true });
}
