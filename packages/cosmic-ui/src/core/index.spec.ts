import { getStyleVariants } from './index';
import { describe, expect, it } from 'vitest';

describe('getStyleVariants', () => {
  it('should return an array of style variant keys', () => {
    const result = getStyleVariants({
      colorScheme: {
        amber: 'anyStyle',
      },
      size: {
        md: 'anyStyle',
      },
    });

    expect(result).toEqual(['colorScheme', 'size']);
  });

  it('should return an empty array if no style variants are found', () => {
    const result = getStyleVariants({});

    expect(result).toEqual([]);
  });

  it('should ignore the default style variant', () => {
    const result = getStyleVariants({
      default: 'anyStyle',
    });

    expect(result).toEqual([]);
  });
});
