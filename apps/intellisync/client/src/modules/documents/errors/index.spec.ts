import { describe, expect, it } from 'vitest';

import { UnsuportedFileExtensionError } from '.';

describe('UnsuportedFileExtensionError', () => {
  it('should throw the correct message', () => {
    const error = new UnsuportedFileExtensionError();

    expect(error.message).toBe('File extension is not supported.');
  });
});
