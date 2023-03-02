import { InvalidReducerActionError } from '.';

describe('InvalidKanbanReducerActionError', () => {
  it('should have the correct error message', () => {
    const actionType = 'ADD_COLUMN';
    const expectedErrorMessage = `${actionType} is an invalid action type.`;

    const error = new InvalidReducerActionError(actionType);

    expect(error.message).toBe(expectedErrorMessage);
  });
});
