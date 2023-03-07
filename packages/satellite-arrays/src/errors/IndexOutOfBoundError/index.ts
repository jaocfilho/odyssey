export class IndexOutOfBoundError extends Error {
  constructor() {
    const message = 'Index out of bound';
    super(message);
  }
}
