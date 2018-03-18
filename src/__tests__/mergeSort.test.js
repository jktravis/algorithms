import { mergeSort } from '../mergeSort';

describe('mergeSort', () => {
  it('should have a mergeSort function', () => {
    expect(mergeSort).toBeDefined();
  });

  it('should sort the array', () => {
    const unsorted = Object.freeze([10, 5, 8, 9, 4, 1, 3, 7, 2, 6]);
    const sorted = Object.freeze([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(mergeSort(unsorted)).toEqual(sorted);
  });
});