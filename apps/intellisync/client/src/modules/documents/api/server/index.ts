import { loadPdf, storeVectorsFromDocuments } from '../../helpers/server';

type StoreVectorsFromDocumentsParams = {
  files: FormDataEntryValue[];
};

export async function storeVectorsFromFiles({
  files,
}: StoreVectorsFromDocumentsParams) {
  const docsPromises = await Promise.all(
    Array.from(files).map(async (file) => {
      return await loadPdf(file as Blob);
    })
  );

  const documents = docsPromises.flat();
  await storeVectorsFromDocuments({ documents });
}
