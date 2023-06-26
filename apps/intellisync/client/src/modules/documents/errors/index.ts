export class UnsuportedFileExtensionError extends Error {
  name = 'UnsuportedFileExtensionError';

  constructor() {
    const message = `File extension is not supported.`;

    super(message);
  }
}
