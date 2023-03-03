import { InvalidReducerActionError } from '.';

describe('InvalidKanbanReducerActionError', () => {
  it('should have the correct error message', () => {
    const reducer = 'kanban';
    const expectedErrorMessage = `Invalid action on ${reducer} reducer.`;

    const error = new InvalidReducerActionError(reducer);

    expect(error.message).toBe(expectedErrorMessage);
  });
});
