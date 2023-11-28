export class InvalidReducerActionError extends Error {
  constructor(reducer: string) {
    const message = `Invalid action on ${reducer} reducer.`;

    super(message);
  }
}
