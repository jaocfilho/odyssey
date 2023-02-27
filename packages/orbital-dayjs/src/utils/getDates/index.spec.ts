import { describe, expect, it } from 'vitest';

import { dayjs } from '../../lib';
import { getDates } from '.';

describe('getDates', () => {
  it('returns an array of Day.js objects', () => {
    const startDateOffset = 5;
    const endDateOffset = 10;

    const dates = getDates(startDateOffset, endDateOffset);

    expect(Array.isArray(dates)).toBe(true);
  });

  it('returns an array of the correct length', () => {
    const startDateOffset = 5;
    const endDateOffset = 10;

    const dates = getDates(startDateOffset, endDateOffset);

    const expectedLength = startDateOffset + endDateOffset;
    expect(dates.length).toBe(expectedLength);
  });

  it('returns an empty array when given 0 offsets', () => {
    const dates = getDates(0, 0);
    expect(dates).toEqual([]);
  });

  it('returns an array of the correct dates', () => {
    const startDateOffset = 2;
    const endDateOffset = 3;

    const dates = getDates(startDateOffset, endDateOffset);

    const expectedDates = [
      dayjs().subtract(startDateOffset, 'day'),
      dayjs().subtract(startDateOffset - 1, 'day'),
      dayjs(),
      dayjs().add(1, 'day'),
      dayjs().add(2, 'day'),
    ];

    expect(dates).toEqual(expectedDates);
  });
});
