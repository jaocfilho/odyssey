import { handleFile, storeVectorsFromDocuments } from '../../helpers/server';

type StoreVectorsFromDocumentsParams = {
  files: FormDataEntryValue[];
};

export async function storeVectorsFromFiles({
  files,
}: StoreVectorsFromDocumentsParams) {
  const docsPromises = await Promise.all(
    Array.from(files).map(async (file) => {
      return await handleFile(file as Blob);
    })
  );

  const documents = docsPromises.flat();
  await storeVectorsFromDocuments({ documents });
}
