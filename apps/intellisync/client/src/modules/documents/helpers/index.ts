export function createFormDataFromFiles(files: FileList) {
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    formData.append('files', file);
  }

  return formData;
}
