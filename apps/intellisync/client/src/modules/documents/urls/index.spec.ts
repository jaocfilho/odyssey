import { describe, expect, it } from 'vitest';

import { documentsApiUrls } from '.';

describe('documentsApiUrls', () => {
  it('should have the upload url', () => {
    expect(documentsApiUrls.upload).toBe('api/upload');
  });
});
