import { buildStyles } from '.';

describe('buildStyles', () => {
  const styles = buildStyles({
    base: 'base',
    size: {
      xs: 'size-xs',
      sm: 'size-sm',
      md: 'size-md',
      lg: 'size-lg',
      xl: 'size-xl',
    },
    grayScale: {
      default: 'grayScale-gray',
      gray: 'grayScale-gray',
      stone: 'grayScale-stone',
      slate: 'grayScale-slate',
      zinc: 'grayScale-zinc',
      neutral: 'grayScale-neutral',
    },
  });

  it('should return an empty string when there are no variant definitions for that style', () => {
    const expected = styles.getClassNames('colorScheme', 'default');

    expect(expected).toEqual('');
  });

  it('should return the className for the variant', () => {
    const expected = styles.getClassNames('size', 'xs');

    expect(expected).toEqual('size-xs');
  });

  it('should return the correct styles', () => {
    const expected = styles.getStyles({
      size: 'xs',
      grayScale: 'gray',
    });

    expect(expected).toEqual('base size-xs grayScale-gray');
  });
});
