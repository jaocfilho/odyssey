import { describe, it, expect } from 'vitest';

import fc from 'fast-check';

import { moveItem } from '.';

const arrayArbitrary = () => fc.array(fc.integer(), { minLength: 2 }); // array of integers
const fromArbitrary = () => fc.nat(); // from index
const toArbitrary = () => fc.nat(); // to index

describe('moveItem', () => {
  it('moves an item from one position to another', () => {
    const testPredicate = (arr: number[], from: number, to: number) => {
      // The expected output is an array with the same length and the item moved
      const expected = [...arr];
      const movedItem = expected.splice(from, 1)[0];

      expected.splice(to, 0, movedItem);

      const result = moveItem(arr, from, to);

      expect(result).toEqual(expected);
    };

    fc.assert(
      fc.property(
        arrayArbitrary(),
        fromArbitrary(),
        toArbitrary(),
        testPredicate
      ),
      { seed: -46595051, path: '11:0', endOnFailure: true }
    );

    fc.assert(
      fc.property(
        arrayArbitrary(),
        fromArbitrary(),
        toArbitrary(),
        testPredicate
      )
    );
  });

  it('returns the same array if the indices are the same', () => {
    fc.assert(
      fc.property(arrayArbitrary(), fromArbitrary(), (arr, index) => {
        const result = moveItem(arr, index, index);
        expect(result).toEqual(arr);
      })
    );
  });

  it('should move the first item to the last position', () => {
    fc.assert(
      fc.property(fc.array(fc.integer(), { minLength: 2 }), (arr) => {
        const from = 0;
        const to = arr.length - 1;

        const result = moveItem(arr, from, to);

        expect(result[result.length - 1]).toEqual(arr[0]);
      })
    );
  });

  it('should move the last item to the first position', () => {
    fc.assert(
      fc.property(fc.array(fc.integer(), { minLength: 2 }), (arr) => {
        const from = arr.length - 1;
        const to = 0;

        const result = moveItem(arr, from, to);

        expect(result[0]).toEqual(arr[arr.length - 1]);
      })
    );
  });
});
