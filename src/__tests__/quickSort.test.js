import { quickSort } from '../quickSort';

describe('quickSort', () => {
  it('should have a quickSort function', () => {
    expect(quickSort).toBeDefined();
  });

  it('should sort the array', () => {
    const unsorted = Object.freeze([10, 5, 8, 9, 4, 1, 3, 7, 2, 6]);
    const sorted = Object.freeze([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const result = quickSort(unsorted);
    expect(result).toEqual(sorted);
  });
});
