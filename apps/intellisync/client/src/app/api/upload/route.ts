import { NextRequest, NextResponse } from 'next/server';

import {
  loadPdf,
  storeVectorsFromDocuments,
} from '@/modules/documents/helpers';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const files = formData.getAll('files');

  const docsPromises = await Promise.all(
    files.map(async (file) => {
      return await loadPdf(file as Blob);
    })
  );

  const documents = docsPromises.flat();
  await storeVectorsFromDocuments({ documents });

  return NextResponse.json({ success: true });
}
