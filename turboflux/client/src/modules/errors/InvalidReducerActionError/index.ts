export class InvalidReducerActionError extends Error {
  constructor(actionType: string) {
    const message = `${actionType} is an invalid action type.`;

    super(message);
  }
}
