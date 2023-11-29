import { getStyleProps } from './index';
import { describe, expect, it } from 'vitest';

describe('getStyleProps', () => {
  it('should return an array of style variant keys', () => {
    const result = getStyleProps({
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
    const result = getStyleProps({});

    expect(result).toEqual([]);
  });

  it('should ignore the default style variant', () => {
    const result = getStyleProps({
      default: 'anyStyle',
    });

    expect(result).toEqual([]);
  });
});
